import React from 'react';
import './Marcas.css';
import SingleMarca from './SingleMarca/SingleMarca';

// eslint-disable-next-line no-unused-vars
const listMarca = [
  {
    link: '/',
    src: 'https://www.tiendanova.com.ar/SITES/IMG/ignatech-10-2020/02-02-2021-07-02-06-logo-vector-01.png',
    alt: 'redragon',
  },
  {
    link: '/',
    src: 'https://fc-use1-00-pics-bkt-00.s3.amazonaws.com/54c5b5e9ae0fa4a51df71782f5ef7bf9b53c87c4c6f811380e5392ae327b68c2/f_marketingpicFull/u_e88d4a0b72676d762792274004133db279bebcf4084d58c46e33c8cbef3dc0b5/img_1621264105764.png',
    alt: 'vsg',
  },
  {
    link: '/',
    src: 'https://1000marcas.net/wp-content/uploads/2021/05/HyperX-logo.png',
    alt: 'hyperx',
  },
  {
    link: '/',
    src: 'https://www.tiendanova.com.ar/SITES/IMG/ignatech-10-2020/02-02-2021-07-02-06-logo-vector-01.png',
    alt: 'redragon',
  },
  {
    link: '/',
    src: 'https://fc-use1-00-pics-bkt-00.s3.amazonaws.com/54c5b5e9ae0fa4a51df71782f5ef7bf9b53c87c4c6f811380e5392ae327b68c2/f_marketingpicFull/u_e88d4a0b72676d762792274004133db279bebcf4084d58c46e33c8cbef3dc0b5/img_1621264105764.png',
    alt: 'vsg',
  },
  {
    link: '/',
    src: 'https://1000marcas.net/wp-content/uploads/2021/05/HyperX-logo.png',
    alt: 'hyperx',
  },
  {
    link: '/',
    src: 'https://www.tiendanova.com.ar/SITES/IMG/ignatech-10-2020/02-02-2021-07-02-06-logo-vector-01.png',
    alt: 'redragon',
  },
  {
    link: '/',
    src: 'https://fc-use1-00-pics-bkt-00.s3.amazonaws.com/54c5b5e9ae0fa4a51df71782f5ef7bf9b53c87c4c6f811380e5392ae327b68c2/f_marketingpicFull/u_e88d4a0b72676d762792274004133db279bebcf4084d58c46e33c8cbef3dc0b5/img_1621264105764.png',
    alt: 'vsg',
  },
];

const listMarcas = [
  {
    link: '/',
    src: 'https://www.tiendanova.com.ar/SITES/IMG/ignatech-10-2020/02-02-2021-07-02-06-logo-vector-01.png',
    alt: 'Redragon ',
  },
  {
    link: '/',
    src: 'https://www.tiendanova.com.ar/SITES/IMG/ignatech-10-2020/02-02-2021-07-02-06-logo-vector-01.png',
    alt: 'Redragon',
  },
  {
    link: '/',
    src: 'https://www.tiendanova.com.ar/SITES/IMG/ignatech-10-2020/02-02-2021-07-02-06-logo-vector-01.png',
    alt: 'Redragon',
  },
  {
    link: '/',
    src: 'https://www.tiendanova.com.ar/SITES/IMG/ignatech-10-2020/02-02-2021-07-02-06-logo-vector-01.png',
    alt: 'Redragon',
  },
  {
    link: '/',
    src: 'https://www.tiendanova.com.ar/SITES/IMG/ignatech-10-2020/02-02-2021-07-02-06-logo-vector-01.png',
    alt: 'Redragon',
  },
  {
    link: '/',
    src: 'https://www.tiendanova.com.ar/SITES/IMG/ignatech-10-2020/02-02-2021-07-02-06-logo-vector-01.png',
    alt: 'Redragon',
  },
];

function Marcas() {
  return (
    <div className="Marcas">
      <div className="titleBoxMarcas">
        <div className="degradedMarcas" />
        <div className="titleBoxText">
          <span>MARCAS</span>
        </div>
        <img
          src="https://homeofficehacks.com/wp-content/uploads/2022/04/gaming-space.jpg"
          alt=""
          className="imgMarcas"
        />
      </div>
      <div className="boxMarcasImg">
        {listMarcas.map((x) => <SingleMarca link={x.link} src={x.src} alt={x.alt} />)}
      </div>
      <div className="footerMarcas">
        <div className="boxTextFooter">
          <span className="">
            CONSULTA
          </span>
          <span className="spanTitleFooter">
            EN TIENDA
          </span>
        </div>
        <div className="listMarcas">
          <ul>
            {listMarcas.map((marca) => (
              <li className="linkMarca">
                <a href="/" className="linkMarca">{marca.alt}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Marcas;
