import React from 'react';
import './Tiendas.css';
import { useQuery } from '@apollo/client';
import Shop from './Shop/Shop';
import { QUERY_SHOPS } from '../Operations/Query';
/* name={shop.name}
direccion={shop.direccion}
phone={shop.phone}
email={shop.email}
horario={shop.horario}
key={shop.key} */

function Tiendas() {
  const { loading, data } = useQuery(QUERY_SHOPS);

  if (loading) return <p>Loading...</p>;

  const shops = {};

  data.findShops.forEach((e) => {
    if (shops[e.city.toLowerCase()]) {
      shops[e.city.toLowerCase()].push(e);
    } else {
      shops[e.city.toLowerCase()] = [e];
    }
  });

  const arrShops = Object.entries(shops);

  return (
    <div className="Tiendas">
      <div className=" titleBoxTienda">
        <h1 className="titleTienda">
          <span className="parteTitle">CONOCE</span>
          <span className="parteTitle">NUESTRAS</span>
          <span className="parteTitle">TIENDAS</span>
        </h1>
        <img
          src="https://www.clipartmax.com/png/full/197-1970940_mark-ogrady-boneco-vendedor-png.png"
          alt=""
          className="imgTitle"
        />
      </div>
      {arrShops.map((sE) => (
        <>
          <h2 key={sE[0]} className="namesShops">{sE[0].substring(0, 1).toUpperCase() + sE[0].substring(1)}</h2>
          {sE[1].map((e) => (
            <Shop
              name={e.name}
              direccion={e.direcction}
              phone={e.phone}
              email={e.email}
              horario={e.workingHours}
              key={e.id}
              src={e.src}
            />
          )) }

        </>
      ))}
    </div>
  );
}

export default Tiendas;
