import './SearchBar.css';
import React from 'react';

function SearchBar() {
  const marcas = [
    {
      name: 'Redragon',
    },
    {
      name: 'Logitech',
    },
    {
      name: 'Vsg',
    },
    {
      name: 'Huawei',
    },
    {
      name: 'Samsung',
    },
  ];
  return (
    <div className="SearchBar">
      <span className="SBtitle">Filtros</span>
      <div className="SBboxBTN">
        <button className="SBbtn pointer" type="button">Limpiar</button>
        <button className="SBbtn pointer" type="button">Filtrar</button>
      </div>
      <div className="SBboxPrecio">
        <span className="SBBtitle">Precio</span>
        <div className="SBprecioBox">
          <input className="inputPrecio" type="number" name="min" placeholder="Minimo" />
          -
          <input className="inputPrecio" type="number" name="max" placeholder="Maximo" />
        </div>
      </div>
      <div className="SBboxMarca">
        <span className="SBBTitle">Marca</span>
        <div className="SBmarcaBox">
          {marcas.map((mrc) => (
            <div className="SBsingleMarca">
              <input
                className="SBcheckBox"
                type="checkbox"
                name={mrc.name}
                id={mrc.name}
              />
              <label htmlFor={mrc.name} className="SBmarcaSingle">{mrc.name.toUpperCase()}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
