import './BtnBurger.css';
import React from 'react';

function BtnBurger({ open }) {
  return (
    <div className={`icon nav-icon-5 ${open && 'open'}`}>
      <span />
      <span />
      <span />
    </div>
  );
}
export default BtnBurger;
