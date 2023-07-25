import React from 'react';
import { Link } from 'react-router-dom';
import { findID } from '../../../util';
import './FirstRow.css';

function FirstRow({ image, text }) {
  const imgL = image.find(findID('64b4969ff62ec34fb6e17e05'));
  const txtL = text.find(findID('64b495e0f62ec34fb6e17df9'));
  const imgR = image.find(findID('64b496b2f62ec34fb6e17e07'));
  const txtR = text.find(findID('64b49608f62ec34fb6e17dfb'));

  return (
    <div className="FRBox">
      <div className="boxGris FRLeft">
        <div className="boxTextFRL">
          <span className="nameFR">{txtL.name}</span>
          <Link
            to={`/products/${txtL.name.toLowerCase()}`}
            className="pointer btnProduct btnFR"
            type="button"
          >
            Conoce mas

          </Link>
        </div>

        <img className="imgFRLeft" src={imgL.src} alt={imgL.alt} />
      </div>

      <div className="boxGris FRRigth">
        <img className="imgFRRigth" src={imgR.src} alt={imgR.alt} />
        <div className="boxTextFRL">
          <span className="nameFR">{txtR.name}</span>
          <Link
            to={`/products/${txtR.name.toLowerCase()}`}
            className="pointer btnProduct btnFR"
            type="button"
          >
            Conoce mas

          </Link>
        </div>
      </div>
    </div>
  );
}

export default FirstRow;
