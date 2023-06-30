import './Header.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import BtnBurger from '../BtnBurger/BtnBurger';
import LateralBar from './LateralBar/LateralBar';
import { QUERY_STATIC_IMAGE } from '../Operations/Query';
import { isLoading } from '../util';

function Header() {
  const [open, setOpen] = useState(false);
  const { loading, data } = useQuery(QUERY_STATIC_IMAGE, {
    variables: {
      ID: '649e0f0de59b27af2756c89d',
    },
  });

  const clickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="Header">
      <a className="homeHeader link" href="/">
        {isLoading(loading || !data, <img
          className="imgLogoHeader"
          src={data ? data.findSingleImage.src : ''}
          alt={data ? data.findSingleImage.alt : ''}
        />, 'imgLogoHeader')}
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
