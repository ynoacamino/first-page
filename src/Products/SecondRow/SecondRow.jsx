import './SecondRow.css';
import React from 'react';

function SecondRow() {
  const infoSR = [
    {
      name: 'SmartPhones',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/1104967217499615293/celulares-con-mejor-camara-removebg-preview.png',
      alt: '',
    },
  ];

  return (
    <div className="SRBox">
      <div className="boxGris SRPrimary">
        <div className="boxTextSR">
          <span className="nameFR">{infoSR[0].name}</span>
          <button className="pointer btnProduct btnSR" type="button">Conoce mas</button>
        </div>
        <img className="imgSR" src={infoSR[0].img} alt={infoSR[0].alt} />
      </div>
    </div>
  );
}

export default SecondRow;
