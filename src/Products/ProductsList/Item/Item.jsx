import React, { useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ImgRatio } from '../../../util';
import { useShop } from '../../../context/ShopContext';
import { ADD_ITEM } from '../../../Operations/Mutation';

function Item({
  name, src, brand, cost, id,
}) {
  const [upItem] = useMutation(ADD_ITEM);
  const [modal, setModal] = useState(false);
  const [badModal, setBadModal] = useState(false);
  const { isLoged } = useShop();
  const addItem = () => {
    const loged = isLoged();
    if (loged) setModal(true);
    else setBadModal(true);

    setTimeout(() => {
      if (loged) setModal(false);
      else setBadModal(false);
    }, 3000);
    if (loged) {
      upItem({
        variables: {
          itemId: id,
        },
      });
    }
  };

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
      <button onClick={addItem} type="button" className="addCardButton pointer">
        Agregar al carro
      </button>
      <div className={`boxAddItemHidden  ${modal && 'boxAddItem'}`}>
        Producto añadido al carro.
      </div>
      <div className={`boxAddItemHidden  ${badModal && 'boxAddItem'}`} style={{ color: 'red' }}>
        Primero inicia sesion
      </div>
    </div>
  );
}

export default Item;
