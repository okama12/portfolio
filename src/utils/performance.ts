export const reportWebVitals = (metric: any) => {
  // You can send to analytics here
  console.log(metric);
};

export const initializePerformanceMonitoring = () => {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    });
  }
}; 