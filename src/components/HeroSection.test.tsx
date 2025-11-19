import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from './HeroSection';
import { Sparkles } from 'lucide-react';

describe('HeroSection', () => {
  it('renders title correctly', () => {
    render(
      <HeroSection
        title={<span>Test Title</span>}
      />
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(
      <HeroSection
        title={<span>Test Title</span>}
        subtitle={<span>Test Subtitle</span>}
      />
    );
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(
      <HeroSection
        title={<span>Test Title</span>}
        description={<span>Test Description</span>}
      />
    );
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  // Badge test removed - badge prop is not currently used in HeroSection component

  it('renders primary button when provided', () => {
    const mockClick = jest.fn();
    render(
      <HeroSection
        title={<span>Test Title</span>}
        primaryButton={{
          text: 'Primary Action',
          onClick: mockClick,
        }}
      />
    );

    const button = screen.getByText('Primary Action');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('renders secondary button when provided', () => {
    const mockClick = jest.fn();
    render(
      <HeroSection
        title={<span>Test Title</span>}
        secondaryButton={{
          text: 'Secondary Action',
          onClick: mockClick,
        }}
      />
    );

    const button = screen.getByText('Secondary Action');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('renders with light variant by default', () => {
    const { container } = render(
      <HeroSection
        title={<span>Test Title</span>}
      />
    );

    const backgroundGradient = container.querySelector('.bg-gradient-to-br');
    expect(backgroundGradient).toBeInTheDocument();
  });

  it('does not render background when variant is transparent', () => {
    const { container } = render(
      <HeroSection
        title={<span>Test Title</span>}
        variant="transparent"
      />
    );

    const backgroundGradient = container.querySelector('.bg-gradient-to-br');
    expect(backgroundGradient).not.toBeInTheDocument();
  });

  it('applies fullWidth styling when specified', () => {
    const { container } = render(
      <HeroSection
        title={<span>Test Title</span>}
        fullWidth={true}
      />
    );

    const contentDiv = container.querySelector('.w-full');
    expect(contentDiv).toBeInTheDocument();
  });

  it('applies max-width container when fullWidth is false', () => {
    const { container } = render(
      <HeroSection
        title={<span>Test Title</span>}
        fullWidth={false}
      />
    );

    const contentDiv = container.querySelector('.max-w-7xl');
    expect(contentDiv).toBeInTheDocument();
  });

  it('renders scroll indicator', () => {
    render(
      <HeroSection
        title={<span>Test Title</span>}
      />
    );

    expect(screen.getByText('SCROLL')).toBeInTheDocument();
  });

  it('has proper ARIA labels', () => {
    render(
      <HeroSection
        title={<span>Test Title</span>}
      />
    );

    const section = screen.getByLabelText('hero-title').closest('section');
    expect(section).toHaveAttribute('aria-labelledby', 'hero-title');
  });

  it('renders custom actions when provided', () => {
    render(
      <HeroSection
        title={<span>Test Title</span>}
        actions={<button>Custom Action</button>}
      />
    );

    expect(screen.getByText('Custom Action')).toBeInTheDocument();
  });
});
