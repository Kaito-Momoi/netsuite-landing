import React from 'react';
import { render, screen } from '@testing-library/react';
import FeatureCard, { FeatureGrid } from './FeatureCard';
import { Feature } from '../types';
import { Package } from 'lucide-react';

describe('FeatureCard', () => {
  const mockFeature: Feature = {
    icon: <Package className="w-8 h-8" />,
    title: 'Test Feature',
    description: 'This is a test feature description',
  };

  it('renders feature title', () => {
    render(<FeatureCard feature={mockFeature} />);
    expect(screen.getByText('Test Feature')).toBeInTheDocument();
  });

  it('renders feature description', () => {
    render(<FeatureCard feature={mockFeature} />);
    expect(screen.getByText('This is a test feature description')).toBeInTheDocument();
  });

  it('applies correct size classes for medium size', () => {
    const { container } = render(<FeatureCard feature={mockFeature} size="medium" />);
    const card = container.querySelector('.p-6');
    expect(card).toBeInTheDocument();
  });

  it('applies correct size classes for small size', () => {
    const { container } = render(<FeatureCard feature={mockFeature} size="small" />);
    const card = container.querySelector('.p-4');
    expect(card).toBeInTheDocument();
  });

  it('applies correct size classes for large size', () => {
    const { container } = render(<FeatureCard feature={mockFeature} size="large" />);
    const card = container.querySelector('.p-8');
    expect(card).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    const { container } = render(<FeatureCard feature={mockFeature} />);
    const card = container.querySelector('.shadow-lg');
    expect(card).toBeInTheDocument();
  });

  it('renders with gradient variant', () => {
    const { container } = render(<FeatureCard feature={mockFeature} variant="gradient" />);
    const gradientCard = container.querySelector('.bg-gradient-to-br');
    expect(gradientCard).toBeInTheDocument();
  });
});

describe('FeatureGrid', () => {
  const mockFeatures: Feature[] = [
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Feature 1',
      description: 'Description 1',
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Feature 2',
      description: 'Description 2',
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Feature 3',
      description: 'Description 3',
    },
  ];

  it('renders all features', () => {
    render(<FeatureGrid features={mockFeatures} />);
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Feature 3')).toBeInTheDocument();
  });

  it('applies correct column classes for 3 columns', () => {
    const { container } = render(<FeatureGrid features={mockFeatures} columns={3} />);
    const grid = container.querySelector('.lg\\:grid-cols-3');
    expect(grid).toBeInTheDocument();
  });

  it('applies correct column classes for 2 columns', () => {
    const { container } = render(<FeatureGrid features={mockFeatures} columns={2} />);
    const grid = container.querySelector('.md\\:grid-cols-2');
    expect(grid).toBeInTheDocument();
  });

  it('renders with specified size', () => {
    const { container } = render(<FeatureGrid features={mockFeatures} size="small" />);
    const smallCards = container.querySelectorAll('.p-4');
    expect(smallCards.length).toBeGreaterThan(0);
  });

  it('renders with specified variant', () => {
    const { container } = render(<FeatureGrid features={mockFeatures} variant="gradient" />);
    const gradientCards = container.querySelectorAll('.bg-gradient-to-br');
    expect(gradientCards.length).toBe(mockFeatures.length);
  });
});
