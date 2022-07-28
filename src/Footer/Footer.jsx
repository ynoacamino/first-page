import './Footer.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ColumsFooter from '../ColumsFooter/ColumsFooter';

const textApi = [
  {
    title: 'PRODUCTOS',
    content: [
      { name: 'Smartphones', url: '/' },
      { name: 'PC', url: '/' },
      { name: 'Tabletas', url: '/' },
      { name: 'Audio', url: '/' },
      { name: 'Wearables', url: '/' },
      { name: 'Accesorios', url: '/' },
      { name: 'Wi-Fi 5G', url: '/' },
    ],
    key: '1',
  },
  {
    title: 'SOPORTE',
    content: [
      { name: 'Ubicación de Centros de Servicios', url: '/' },
      { name: 'Consulta de Precios de Piezas', url: '/' },
      { name: 'Libro de Reclamaciones', url: '/' },
      { name: 'Servicio de Soporte Técnico', url: '/' },
    ],
    key: '2',
  },
  {
    title: 'CONTACTENOS',
    content: [
      { name: 'Ayuda y soporte', url: '/' },
      { name: 'Chat en vivo', url: '/' },
      { name: 'Dudas y sugerencias', url: '/' },
    ],
    key: '3',
  },
  {
    title: 'CONOCENOS',
    content: [
      { name: 'Acerca de nosotros', url: '/' },
      { name: 'HUAWEI Group', url: '/' },
      { name: 'HUAWEI Enterprise', url: '/' },
      { name: 'Únete a nosotros', url: '/' },
      { name: 'Contáctanos', url: '/' },
    ],

    key: '4',
  },
];

const redes = {
  title: 'SIGUENOS',
  reds: {
    facebook: 'https://www.facebook.com/',
    whatsapp: 'https://www.whatsapp.com/',
    instagram: 'https://www.instagram.com/',
  },
};

function Footer() {
  const [windowFooter, setWindowFooter] = useState(0);

  const changeWindow = (num) => {
    setWindowFooter(num);
  };

  return (
    <div className="Footer">
      {textApi.map((column) => (
        <ColumsFooter
          key={column.key}
          title={column.title}
          content={column.content}
          changeWindow={(x) => changeWindow(x)}
          windowFooter={windowFooter}
          llave={column.key}
        />
      ))}
      <div className="colSiguenos">
        <span className="titleFooter">{redes.title}</span>
        <ul className="boxIcoRedes">
          <li className="liFooter">
            <a href={redes.reds.facebook} className="linkFooter">
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
          </li>
          <li className="liFooter">
            <a href={redes.reds.whatsapp} className="linkFooter">
              <FontAwesomeIcon icon={faWhatsapp} size="3x" />
            </a>
          </li>
          <li className="liFooter">
            <a href={redes.reds.instagram} className="linkFooter">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
