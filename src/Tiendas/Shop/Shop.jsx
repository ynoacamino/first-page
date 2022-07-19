import './Shop.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Hr from '../Hr/Hr';

function Shop({
  name, direccion, phone, email, horario, vol,
}) {
  return (
    <>
      <div className="Shop">
        <img
          src="https://xiaomiperu.com/media/direccion_tienda_mi_store_plaza_norte_xiaomi.png"
          alt="shop"
          className="boxImgShop"
        />
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
      {vol && <Hr />}
    </>
  );
}

export default Shop;
