// src/components/utils/Loader.tsx
import React from 'react';

const Loader = ({ loading, label, children }) => {
  return loading ? (
    <>{label ? `${label}...` : 'Loading...'}</>
  ) : (
    <>{children}</>
  );
};

export default Loader;
