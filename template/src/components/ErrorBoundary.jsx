import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleErrors = (error, errorInfo) => {
      console.error(error, errorInfo);
      setHasError(true);
    };

    window.addEventListener('error', handleErrors);

    return () => {
      window.removeEventListener('error', handleErrors);
    };
  }, []);

  if (hasError) {
    return <div>Ops! Qualcosa è andato storto.</div>;
  }

  return children;
};

export default ErrorBoundary;

