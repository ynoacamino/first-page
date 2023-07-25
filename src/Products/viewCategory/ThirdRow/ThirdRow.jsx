import React from 'react';
import { Link } from 'react-router-dom';
import { findID } from '../../../util';
import './ThirdRow.css';

function ThirdRow({ image, text }) {
  const imgL = image.find(findID('64b496faf62ec34fb6e17e0b'));
  const txtL = text.find(findID('64b49635f62ec34fb6e17dff'));
  const imgC = image.find(findID('64b49710f62ec34fb6e17e0d'));
  const txtC = text.find(findID('64b49648f62ec34fb6e17e01'));
  const imgR = image.find(findID('64b49728f62ec34fb6e17e0f'));
  const txtR = text.find(findID('64b4965bf62ec34fb6e17e03'));

  return (
    <div className="TRBox">
      <div className="boxGris TRColumn">
        <img className="imgTR" src={imgL.src} alt={imgL.alt} />
        <div className="boxTextTR">
          <span className="nameFR">{txtL.name}</span>
          <Link
            to={`/products/${txtL.name.toLowerCase()}`}
            className="pointer btnProduct btnTR"
            type="button"
          >
            Conoce mas
          </Link>
        </div>
      </div>
      <div className="boxGris TRColumn">
        <img className="imgTR" src={imgC.src} alt={imgC.alt} />
        <div className="boxTextTR">
          <span className="nameFR">{txtC.name}</span>
          <Link
            to={`/products/${txtC.name.toLowerCase()}`}
            className="pointer btnProduct btnTR"
            type="button"
          >
            Conoce mas
          </Link>
        </div>
      </div>
      <div className="boxGris TRColumn">
        <img className="imgTR" src={imgR.src} alt={imgR.alt} />
        <div className="boxTextTR">
          <span className="nameFR">{txtR.name}</span>
          <Link
            to={`/products/${txtR.name.toLowerCase()}`}
            className="pointer btnProduct btnTR"
            type="button"
          >
            Conoce mas
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThirdRow;
