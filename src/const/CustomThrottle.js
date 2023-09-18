// Custom throttle function
export const throttle = (func, delay) => {
    let lastCallTime = 0;
  
    return function (...args) {
      const now = new Date().getTime();
  
      if (now - lastCallTime >= delay) {
        func(...args);
        lastCallTime = now;
      }
    };
  };