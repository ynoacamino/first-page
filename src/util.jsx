import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

export const findID = (id) => (obj) => obj.id === id;

export function ImgRatio({
  aspectRatio, src, alt, h = '100%',
}) {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    paddingBottom: `${(1 / aspectRatio) * 100}%`,
  };

  if (h !== '100%') { containerStyle.height = h; containerStyle.paddingBottom = 0; }

  const imageStyle = {
    position: 'absolute',
    width: '100%',
    height: h,
    objectFit: 'cover',
  };

  return (
    <div style={containerStyle}>
      <img
        src={src}
        alt={alt}
        style={imageStyle}
      />
    </div>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
