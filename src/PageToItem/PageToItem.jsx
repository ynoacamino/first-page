/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import './PageToItem.css';
import { ImgRatio } from '../util';
import { QUERY_ONE_ITEM } from '../Operations/Query';

function PageToItem() {
  const { productId } = useParams();

  const { data, loading } = useQuery(QUERY_ONE_ITEM, {
    variables: {
      id: productId,
    },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div className="PagoToItem">
      <div className="previewItem">
        <ImgRatio
          src={data.findItemById.src}
          alt={data.findItemById.name}
          aspectRatio={1}
        />
      </div>
      <div className="infoItem">
        <span className="nameItem">{data.findItemById.name}</span>
        <span className="skuItem">
          SKU:
          {' '}
          {data?.findItemById.sku || 123123123}
        </span>
        <span className="precioItem">
          S/
          {data.findItemById.cost}
        </span>
        <div className="box1Item">
          <div className="box2Item">
            <label className="labelCantItem" htmlFor="num">CANTIDAD</label>
            <input className="inputCantItem" type="number" name="num" id="num" value={1} />
          </div>
          <div className="box2Item">
            <button className="btnGetItem pointer" type="button">Agregar al carro</button>
          </div>
        </div>
        <div className="boxTextItem">
          <span className="titleItem">
            Tags:
          </span>
          <span className="descriptionItem">
            {data.findItemById.tags.join(', ')}
          </span>
          <span className="titleItem">
            Descripcion:
          </span>
          <span className="descriptionItem">
            {data.findItemById.description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PageToItem;
