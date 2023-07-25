import './PrimaryProducts.css';
import React from 'react';
import {
  isMobile, isAndroid,
} from 'react-device-detect';
import ProductLeft from './ProductLeft/ProductLeft';
import ProductRigthTop from './ProductRigthTop/ProductRigthTop';
import ProductRigthBottom from './ProductRigthBottom/ProductRigthBottom';
import { findID } from '../../util';

function PrimaryProducts({ images, texts }) {
  const imgL = images.find(findID('64b2ed9fabfda49049469e36'));
  const imgRT = images.find(findID('64b2edb8abfda49049469e38'));
  const imgRB = images.find(findID('64b2edcbabfda49049469e3a'));

  const txtL = texts.find(findID('64b2ed41abfda49049469e34'));
  const txtRT = texts.find(findID('64b2edeeabfda49049469e3c'));
  const txtRB = texts.find(findID('64b2ee14abfda49049469e3e'));
  return (
    <div className="PrimaryProducts">
      <span className="titleProducts">Productos Top</span>
      <div className="boxProducts">
        <ProductLeft
          image={imgL}
          text={txtL}
          isAndroid={isAndroid}
          isMobile={isMobile}
        />
        <div className="BoxRigth">
          <ProductRigthTop
            image={imgRT}
            text={txtRT}
            isAndroid={isAndroid}
            isMobile={isMobile}
          />
          <ProductRigthBottom
            image={imgRB}
            text={txtRB}
            isAndroid={isAndroid}
            isMobile={isMobile}
          />
        </div>
      </div>
      <span className="viewMoreProducts">
        Descubre más productos
        {' '}
        <a href="/" className="linkViewMore underline">Aquí</a>
      </span>
    </div>
  );
}

export default PrimaryProducts;
