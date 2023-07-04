import './Loading.css';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <div className="Loading">
      <CircularProgress size={70} />
    </div>
  );
}

export default Loading;
