import React from 'react';
import './ScreenError.css';
import bgError200 from '../assets/error200.png';

function ScreenError({ errorCode, msgError }) {
  return (
    <div className="ScreenError">
      <img src={bgError200} alt="Error 200" />
      <h1 className="msgError">{msgError === 'Failed to fetch' ? "Server isn't working" : msgError}</h1>
      <h1 className="msgError">{errorCode || 'Error 200'}</h1>
    </div>
  );
}

export default ScreenError;
