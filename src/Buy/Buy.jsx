/* eslint-disable react-hooks/exhaustive-deps */
import './Buy.css';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemBuy from './ItemBuy/Itembuy';
import { useShop } from '../context/ShopContext';

function Buy() {
  const {
    isLoged, reload, cart, loading,
  } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    reload();
    if (!isLoged()) navigate('/login');
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="Buy">
      <span className="titleBuy">
        Carro de compras
      </span>
      {cart.map((i) => (
        <ItemBuy
          key={i.id}
          name={i.name}
          cost={i.cost}
          src={i.src}
          id={i.id}
        />
      ))}
      <div className="footerBuy">
        <div className="footerPrice">
          <span style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
            Subtotal: S/ 175.00
          </span>
          <span style={{ color: 'gray' }}>
            Acepto terminos y condiciones
          </span>
        </div>
        <div className="footerBtnNavegation">
          <Link to="/products" className="btnBuy">Seguir comprando</Link>
          <button type="button" className="clearBtn pointer btnBuy">Continuar</button>
        </div>
      </div>
    </div>
  );
}

export default Buy;
