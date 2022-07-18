import './Shop.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Shop() {
  return (
    <div className="Shop">
      <div className="boxImgShop">
        <img
          src="https://xiaomiperu.com/media/direccion_tienda_mi_store_plaza_norte_xiaomi.png"
          alt="shop"
        />
      </div>
      <div className="boxTextShop">
        <span className="nameShop">Xiaomi Plaza norte</span>
        <div className="infoShop">
          <div className="guionShop">
            <FontAwesomeIcon icon={faHouse} />
            Calle Schell 168, frente al parque Keneddy
          </div>
          <div className="guionShop">
            <FontAwesomeIcon icon={faWhatsapp} />
            +51 932 262 031
          </div>
          <div className="guionShop">
            <FontAwesomeIcon icon={faEnvelope} />
            informes@xiaomiperu.com
          </div>
          <div className="guionShop">
            <FontAwesomeIcon icon={faClock} />
            Lunes a Sábado: 10:00 - 21:00
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
