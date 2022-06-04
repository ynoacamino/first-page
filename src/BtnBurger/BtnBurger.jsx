import './BtnBurger.css';
import React, { useState } from 'react';

function BtnBurger() {
  const [open, setOpen] = useState(false);

  const clickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={`icon nav-icon-5 ${open && 'open'}`} onClick={clickOpen} onKeyDown={clickOpen} role="button" aria-hidden>
      <span />
      <span />
      <span />
    </div>
  );
}

export default BtnBurger;
