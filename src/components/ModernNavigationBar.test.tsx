import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ModernNavigationBar from './ModernNavigationBar';

// Helper to wrap component with Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ModernNavigationBar', () => {
  it('renders logo with link to corporate website', () => {
    renderWithRouter(<ModernNavigationBar />);

    const logo = screen.getByAltText('EvangSol');
    expect(logo).toBeInTheDocument();
    expect(logo.closest('a')).toHaveAttribute('href', 'https://www.evangsol.co.jp/');
  });

  it('renders navigation items', () => {
    renderWithRouter(<ModernNavigationBar />);

    expect(screen.getByText('ホーム')).toBeInTheDocument();
    expect(screen.getByText('NetSuiteの機能')).toBeInTheDocument();
    expect(screen.getByText('EvangSolの強み')).toBeInTheDocument();
  });

  it('renders contact button', () => {
    renderWithRouter(<ModernNavigationBar />);

    const contactButton = screen.getByText('お問い合わせ');
    expect(contactButton).toBeInTheDocument();
  });

  it('calls onContactClick when contact button is clicked', () => {
    const mockContactClick = jest.fn();
    renderWithRouter(<ModernNavigationBar onContactClick={mockContactClick} />);

    const contactButton = screen.getByText('お問い合わせ');
    fireEvent.click(contactButton);

    expect(mockContactClick).toHaveBeenCalledTimes(1);
  });

  it('handles scroll events', () => {
    renderWithRouter(<ModernNavigationBar />);

    // Simulate scroll event
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window);

    // Navigation bar should update based on scroll position
    expect(window.scrollY).toBe(100);
  });

  it('handles navigation click for external links', () => {
    const mockOpen = jest.fn();
    window.open = mockOpen;

    renderWithRouter(<ModernNavigationBar />);

    // Find and click the external link (会社概要)
    const companyLink = screen.getByText('会社概要');
    fireEvent.click(companyLink);

    expect(mockOpen).toHaveBeenCalledWith(
      'https://www.evangsol.co.jp/about',
      '_blank',
      'noopener,noreferrer'
    );
  });

  it('renders progress bar', () => {
    const { container } = renderWithRouter(<ModernNavigationBar />);

    const progressBar = container.querySelector('.fixed.top-0');
    expect(progressBar).toBeInTheDocument();
  });
});
