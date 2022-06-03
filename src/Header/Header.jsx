import './Header.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div className="Header">
      <a className="homeHeader link" href="/">
        <FontAwesomeIcon icon={faSlack} size="3x" />
        <span className="titleHeader">Eshop</span>
      </a>
      <ul className="Nav">
        <li className="li">
          <a className="link navLink underline" href="/">Inicio</a>
        </li>
        <li className="li">
          <a className="link navLink underline" href="/">Productos</a>
        </li>
        <li className="li">
          <a className="link navLink underline" href="/">Marcas</a>
        </li>
        <li className="li">
          <a className="link navLink underline" href="/">Tiendas</a>
        </li>
        <li className="li">
          <a className="link navLink underline" href="/">Comprar</a>
        </li>
        <button type="button" className="btnSearchNav pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </button>
      </ul>
    </div>
  );
}

export default Header;
