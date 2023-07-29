import './Shop.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Hr from '../Hr/Hr';
import { ImgRatio } from '../../util';

function Shop({
  name, direccion, phone, email, horario, src,
}) {
  return (
    <>
      <div className="Shop">
        <div
          className="boxImgShop"
          style={{ borderRadius: '15px', overflow: 'hidden' }}
        >
          <ImgRatio
            src={src}
            alt={name}
            aspectRatio={20 / 11}
          />
        </div>

        <div className="boxTextShop">
          <span className="nameShop">{name}</span>
          <div className="infoShop">
            <div className="guionShop">
              <FontAwesomeIcon icon={faHouse} />
              {direccion}
            </div>
            <div className="guionShop">
              <FontAwesomeIcon icon={faWhatsapp} />
              {phone}
            </div>
            <div className="guionShop">
              <FontAwesomeIcon icon={faEnvelope} />
              {email}
            </div>
            <div className="guionShop">
              <FontAwesomeIcon icon={faClock} />
              {horario}
            </div>
          </div>
        </div>
      </div>
      <Hr />
    </>
  );
}

export default Shop;
