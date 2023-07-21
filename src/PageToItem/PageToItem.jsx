/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './PageToItem.css';
import { ImgRatio } from '../util';

function PageToItem() {
  return (
    <div className="PagoToItem">
      <div className="previewItem">
        <ImgRatio
          src="https://dojiw2m9tvv09.cloudfront.net/74275/product/M_aio-lenovo-ideace-3-12338.png?66&time=1689787498"
          alt="img"
          aspectRatio={1}
        />
      </div>
      <div className="infoItem">
        <span className="nameItem">AIO LENOVO IDEACE 3 23.8 CI5 10400T 4GB 1TB 128GB</span>
        <span className="skuItem">SKU: 66113613354615</span>
        <span className="precioItem">S/ 2, 999.00</span>
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
            Descripcion:
          </span>
          <span className="descriptionItem">
            El Lenovo IdeaCentre 3 23.8 es una impresionante AIO (All-in-One) que combina
            un elegante diseño con un potente rendimiento.
            Está impulsado por un procesador Intel Core i5
            10400T, que ofrece una capacidad de procesamiento
            sólida para manejar tareas cotidianas y multitarea eficientemente.

            Con una pantalla de 23.8 pulgadas, ofrece una
            experiencia visual envolvente y nítida. Además,
            incluye una memoria RAM de 4GB que permite
            un rendimiento fluido al ejecutar varias aplicaciones al mismo tiempo.

            En cuanto al almacenamiento, el AIO Lenovo
            IdeaCentre 3 viene con una combinación de
            1TB de almacenamiento HDD y 128GB de almacenamient
            SSD. Esto proporciona una amplia capacidad
            para guardar archivos y documentos importantes,
            además de una mayor velocidad de acceso a datos y programas.

            Su diseño todo en uno lo hace ideal para
            espacios reducidos o para mantener una estación
            de trabajo organizada, ya que integra todos los
            componentes en una única unidad. Además, cuenta
            con una variedad de puertos y conectores que
            facilitan la conexión con otros dispositivos
            y periféricos.
          </span>
        </div>
      </div>
    </div>
  );
}

export default PageToItem;
