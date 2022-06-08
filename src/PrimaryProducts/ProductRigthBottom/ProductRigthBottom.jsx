import './ProductRigthBottom.css';
import React from 'react';

function ProductRigthBottom({ isMobile, isAndroid, product }) {
  return (
    <a href="/" className={`ProductRigthTop boxProduct ${(isMobile || isAndroid) && 'isMobileProductRigthTop'}`}>
      <div className="textBoxRigthTop">
        <span className="nameProductRigthTop">
          {product.name}
        </span>
        <div className="aniamtionBtnRigthTop">
          <span className="descriptionProductRigthTop">
            {product.description}
          </span>
          <button className="pointer btnProduct" type="button">
            Comprar
          </button>
        </div>
      </div>
      <img
        className="hoverProduct imgProductRigthTop"
        src={product.src}
        alt={product.name}
      />
    </a>
  );
}

export default ProductRigthBottom;
