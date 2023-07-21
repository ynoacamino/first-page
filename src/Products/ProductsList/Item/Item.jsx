import React from 'react';
import './Item.css';
import { ImgRatio } from '../../../util';

function Item() {
  return (
    <div className="productItem">
      <div className="boxImgItem">
        <ImgRatio
          src="https://dojiw2m9tvv09.cloudfront.net/74275/product/M_aio-lenovo-ideace-3-12338.png?66&time=1689787498"
          alt="img"
          aspectRatio={1}
        />
      </div>
      <div className="boxText">
        <span className="textMarcaItem">LENOVO</span>
        <span className="textNombreItem">PC MINI ASROCK 4X4 BOX-4500U/US/AI</span>
        <span className="textPrecioItem">S/ 2,999.0</span>
      </div>
      <button type="button" className="addCardButton pointer">
        Agregar al carro
      </button>
    </div>
  );
}

export default Item;
