import React from 'react';
import './LateralBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function LateralBar({ open, func }) {
  return (
    <ul className={`NavMobile ${open && 'NavMobileView'}`}>
      <li className="li">
        <a className="link navLink underline" href="/">Inicio</a>
      </li>
      <li className="li">
        <a className="link navLink underline" href="/products">Productos</a>
      </li>
      <li className="li">
        <a className="link navLink underline" href="/brand">Marcas</a>
      </li>
      <li className="li">
        <a className="link navLink underline" href="/shops">Tiendas</a>
      </li>
      <li className="li">
        <a className="link navLink underline" href="/buy">Comprar</a>
      </li>
      <button type="button" className="btnExit pointer" onClick={func}>
        <FontAwesomeIcon icon={faX} size="2x" />
      </button>
    </ul>
  );
}

export default LateralBar;
