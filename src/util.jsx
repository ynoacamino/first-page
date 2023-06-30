import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const isLoading = (trueFalse, component, className, secondComponent = null) => {
  if (secondComponent) {
    return (
      trueFalse
        ? secondComponent
        : component
    );
  }
  return (
    trueFalse
      ? <div className={className}><CircularProgress /></div>
      : component
  );
};

export const hola = (x) => console.log(x);
