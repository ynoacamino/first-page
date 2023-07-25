import React from 'react';
import { Link } from 'react-router-dom';
import { findID } from '../../../util';
import './SecondRow.css';

function SecondRow({ image, text }) {
  const img = image.find(findID('64b496ddf62ec34fb6e17e09'));
  const txt = text.find(findID('64b49620f62ec34fb6e17dfd'));

  return (
    <div className="SRBox">
      <div className="boxGris SRPrimary">
        <div className="boxTextSR">
          <span className="nameFR">{txt.name}</span>
          <Link
            to={`/products/${txt.name.toLowerCase()}`}
            className="pointer btnProduct btnSR"
            type="button"
          >
            Conoce mas

          </Link>
        </div>
        <img className="imgSR" src={img.src} alt={img.alt} />
      </div>
    </div>
  );
}

export default SecondRow;
