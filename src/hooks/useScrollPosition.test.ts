import { renderHook, act } from '@testing-library/react';
import { useScrollPosition } from './useScrollPosition';

describe('useScrollPosition', () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('returns false when scroll position is below threshold', () => {
    const { result } = renderHook(() => useScrollPosition(50));
    expect(result.current).toBe(false);
  });

  it('returns true when scroll position exceeds threshold', async () => {
    const { result } = renderHook(() => useScrollPosition(50, 0));

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
      window.dispatchEvent(new Event('scroll'));
    });

    // Wait for debounce
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });

    expect(result.current).toBe(true);
  });

  it('uses default threshold of 50 when not specified', async () => {
    const { result } = renderHook(() => useScrollPosition());

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 60, writable: true });
      window.dispatchEvent(new Event('scroll'));
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });

    expect(result.current).toBe(true);
  });

  it('debounces scroll events', async () => {
    const { result } = renderHook(() => useScrollPosition(50, 50));

    // Trigger multiple scroll events rapidly
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
      window.dispatchEvent(new Event('scroll'));
      window.dispatchEvent(new Event('scroll'));
      window.dispatchEvent(new Event('scroll'));
    });

    // Should not update immediately due to debounce
    expect(result.current).toBe(false);

    // Wait for debounce delay
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 60));
    });

    expect(result.current).toBe(true);
  });

  it('updates when threshold changes', async () => {
    const { result, rerender } = renderHook(
      ({ threshold }) => useScrollPosition(threshold, 0),
      { initialProps: { threshold: 50 } }
    );

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 75, writable: true });
      window.dispatchEvent(new Event('scroll'));
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });

    expect(result.current).toBe(true);

    // Change threshold to a higher value
    rerender({ threshold: 100 });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });

    expect(result.current).toBe(false);
  });

  it('cleans up event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useScrollPosition());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    removeEventListenerSpy.mockRestore();
  });

  it('performs initial check on mount', async () => {
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });

    const { result } = renderHook(() => useScrollPosition(50, 0));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
    });

    expect(result.current).toBe(true);
  });
});
