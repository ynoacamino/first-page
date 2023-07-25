import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { ImgRatio } from '../../../util';

function Item({
  name, src, brand, cost, id,
}) {
  return (
    <div className="productItem">
      <Link className="itemLink" to={`/products/item/${id}`}>
        <div className="boxImgItem">
          <ImgRatio
            src={src}
            alt={name}
            aspectRatio={1}
          />
        </div>
        <div className="boxText">
          <span className="textMarcaItem">{brand}</span>
          <span className="textNombreItem">{name}</span>
          <span className="textPrecioItem">
            S/
            {' '}
            {cost}
          </span>
        </div>
      </Link>
      <button type="button" className="addCardButton pointer">
        Agregar al carro
      </button>
    </div>
  );
}

export default Item;
