import './Header.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import BtnBurger from '../BtnBurger/BtnBurger';
import LateralBar from './LateralBar/LateralBar';
import { QUERY_MODULE } from '../Operations/Query';
import { findID } from '../util';

function Header() {
  const idImageLogo = '649e0f0de59b27af2756c89d';
  const idTextLogo = '649f8b8fe527c66bfbf3f850';
  const [open, setOpen] = useState(false);

  const { loading, data } = useQuery(QUERY_MODULE, {
    variables: {
      id: '64a4ced84c622ac3d7588672',
    },
  });

  const images = loading ? [] : data.findForModule.image;
  const texts = loading ? [] : data.findForModule.text;

  const clickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="Header">
      <a className="homeHeader link" href="/">
        <img
          className="imgLogoHeader"
          src={loading ? '' : images.find(findID(idImageLogo)).src}
          alt={loading ? '' : images.find(findID(idImageLogo)).alt}
        />
        <span className="titleHeader">
          {loading ? '' : texts.find(findID(idTextLogo)).name}
        </span>
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
