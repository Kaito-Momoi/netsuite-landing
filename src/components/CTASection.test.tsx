import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CTASection from './CTASection';

describe('CTASection', () => {
  const mockPrimaryAction = jest.fn();
  const mockSecondaryAction = jest.fn();

  beforeEach(() => {
    mockPrimaryAction.mockClear();
    mockSecondaryAction.mockClear();
  });

  it('renders title correctly', () => {
    render(
      <CTASection
        title={<span>Test CTA Title</span>}
        primaryButtonText="Primary"
        primaryButtonAction={mockPrimaryAction}
      />
    );

    expect(screen.getByText('Test CTA Title')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(
      <CTASection
        title={<span>Test CTA Title</span>}
        description="This is a test description"
        primaryButtonText="Primary"
        primaryButtonAction={mockPrimaryAction}
      />
    );

    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('renders primary button with correct text', () => {
    render(
      <CTASection
        title={<span>Test CTA Title</span>}
        primaryButtonText="Get Started"
        primaryButtonAction={mockPrimaryAction}
      />
    );

    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('calls primary action when primary button is clicked', () => {
    render(
      <CTASection
        title={<span>Test CTA Title</span>}
        primaryButtonText="Primary"
        primaryButtonAction={mockPrimaryAction}
      />
    );

    const primaryButton = screen.getByText('Primary');
    fireEvent.click(primaryButton);

    expect(mockPrimaryAction).toHaveBeenCalledTimes(1);
  });

  it('renders secondary button when provided', () => {
    render(
      <CTASection
        title={<span>Test CTA Title</span>}
        primaryButtonText="Primary"
        primaryButtonAction={mockPrimaryAction}
        secondaryButtonText="Learn More"
        secondaryButtonAction={mockSecondaryAction}
      />
    );

    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('calls secondary action when secondary button is clicked', () => {
    render(
      <CTASection
        title={<span>Test CTA Title</span>}
        primaryButtonText="Primary"
        primaryButtonAction={mockPrimaryAction}
        secondaryButtonText="Secondary"
        secondaryButtonAction={mockSecondaryAction}
      />
    );

    const secondaryButton = screen.getByText('Secondary');
    fireEvent.click(secondaryButton);

    expect(mockSecondaryAction).toHaveBeenCalledTimes(1);
  });

  it('does not render secondary button when not provided', () => {
    render(
      <CTASection
        title={<span>Test CTA Title</span>}
        primaryButtonText="Primary"
        primaryButtonAction={mockPrimaryAction}
      />
    );

    expect(screen.queryByRole('button', { name: /secondary/i })).not.toBeInTheDocument();
  });

  it('applies custom gradient when provided', () => {
    const { container } = render(
      <CTASection
        title={<span>Test CTA Title</span>}
        primaryButtonText="Primary"
        primaryButtonAction={mockPrimaryAction}
        gradient="from-purple-600 to-pink-600"
      />
    );

    const section = container.querySelector('.from-purple-600');
    expect(section).toBeInTheDocument();
  });

  it('applies default gradient when not provided', () => {
    const { container } = render(
      <CTASection
        title={<span>Test CTA Title</span>}
        primaryButtonText="Primary"
        primaryButtonAction={mockPrimaryAction}
      />
    );

    const section = container.querySelector('.from-blue-600');
    expect(section).toBeInTheDocument();
  });

  it('has proper ARIA labels', () => {
    render(
      <CTASection
        title={<span>Test CTA Title</span>}
        primaryButtonText="Primary Action"
        primaryButtonAction={mockPrimaryAction}
      />
    );

    const title = screen.getByText('Test CTA Title');
    const section = title.closest('section');
    expect(section).toHaveAttribute('aria-labelledby', 'cta-title');
  });

  it('primary button has proper aria-label', () => {
    render(
      <CTASection
        title={<span>Test CTA Title</span>}
        primaryButtonText="Contact Us"
        primaryButtonAction={mockPrimaryAction}
      />
    );

    const button = screen.getByLabelText('Contact Us');
    expect(button).toBeInTheDocument();
  });

  it('secondary button has proper aria-label', () => {
    render(
      <CTASection
        title={<span>Test CTA Title</span>}
        primaryButtonText="Primary"
        primaryButtonAction={mockPrimaryAction}
        secondaryButtonText="Learn More"
        secondaryButtonAction={mockSecondaryAction}
      />
    );

    const button = screen.getByLabelText('Learn More');
    expect(button).toBeInTheDocument();
  });
});
