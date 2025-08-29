import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  onLoad?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = React.memo(
  ({ src, alt, className = '', loading = 'lazy', width, height, onLoad }) => {
    const [isInView, setIsInView] = useState(loading === 'eager');
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
      if (loading === 'lazy' && imgRef.current) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
              }
            });
          },
          {
            rootMargin: '50px',
          }
        );

        observer.observe(imgRef.current);

        return () => {
          observer.disconnect();
        };
      }
    }, [loading]);

    const handleLoad = () => {
      setIsLoaded(true);
      if (onLoad) {
        onLoad();
      }
    };

    return (
      <>
        {!isLoaded && (
          <div
            className={`bg-gray-200 animate-pulse ${className}`}
            style={{
              width: width ? `${width}px` : '100%',
              height: height ? `${height}px` : '100%',
            }}
          />
        )}
        <img
          ref={imgRef}
          src={isInView ? src : undefined}
          alt={alt}
          className={`${className} ${!isLoaded ? 'hidden' : ''}`}
          loading={loading}
          width={width}
          height={height}
          onLoad={handleLoad}
        />
      </>
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
