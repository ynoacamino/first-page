import './Header.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import BtnBurger from '../BtnBurger/BtnBurger';

function Header() {
  const [open, setOpen] = useState(false);

  const clickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="Header">
      <a className="homeHeader link" href="/">
        <FontAwesomeIcon icon={faSlack} size="3x" />
        <span className="titleHeader">Eshop</span>
      </a>
      <div className="rigth">
        <ul className={`Nav ${open && 'NavView'}`}>
          <li className="li">
            <Link className="link navLink underline" to="/">Inicio</Link>
          </li>
          <li className="li">
            <Link className="link navLink underline" to="/products">Productos</Link>
          </li>
          <li className="li">
            <Link className="link navLink underline" to="/brand">Marcas</Link>
          </li>
          <li className="li">
            <Link className="link navLink underline" to="/shops">Tiendas</Link>
          </li>
          <li className="li">
            <Link className="link navLink underline" to="/buy">Comprar</Link>
          </li>
        </ul>
        <button type="button" className="btnSearchNav pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </button>
        <button type="button" className="btnSearchNav" onClick={clickOpen}>
          <BtnBurger open={open} />
        </button>
      </div>
      <ul className={`NavMobile ${open && 'NavMobileView'}`}>
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
        <button type="button" className="btnExit pointer" onClick={clickOpen}>
          <FontAwesomeIcon icon={faX} size="2x" />
        </button>
      </ul>
    </div>
  );
}

export default Header;
