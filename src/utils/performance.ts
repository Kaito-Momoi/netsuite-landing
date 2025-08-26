export const measurePerformance = (markName: string) => {
  if (typeof window !== 'undefined' && window.performance) {
    window.performance.mark(markName);
  }
};

export const measurePerformanceBetween = (startMark: string, endMark: string, measureName: string) => {
  if (typeof window !== 'undefined' && window.performance) {
    try {
      window.performance.measure(measureName, startMark, endMark);
      const measure = window.performance.getEntriesByName(measureName)[0];
      console.log(`${measureName}: ${measure.duration.toFixed(2)}ms`);
      return measure.duration;
    } catch (error) {
      console.error('Performance measurement error:', error);
    }
  }
  return null;
};

export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};