import './Header.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import BtnBurger from '../BtnBurger/BtnBurger';
import LateralBar from './LateralBar/LateralBar';

function Header() {
  const [open, setOpen] = useState(false);
  const [loading, data] = useQuery();

  const clickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="Header">
      <a className="homeHeader link" href="/">
        <img className="imgLogoHeader" src="https://cdn-icons-png.flaticon.com/512/8297/8297984.png" alt="logo" srcSet="" />
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
      <LateralBar open={open} func={clickOpen} />
    </div>
  );
}

export default Header;
