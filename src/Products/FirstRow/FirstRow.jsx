import './FirstRow.css';
import React from 'react';

function FirstRow() {
  const FRLeftProducts = [
    {
      name: 'Accesorios',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/1104953580735189076/FRLeft-removebg-preview.png',
      alt: '',
    },
    {
      name: 'Audio',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/1104953580445773914/Captura_de_pantalla_2023-05-07_211026-removebg-preview.png',
      alt: '',
    },
  ];

  return (
    <div className="FRBox">
      <div className="boxGris FRLeft">
        <div className="boxTextFRL">
          <span className="nameFR">{FRLeftProducts[0].name}</span>
          <button className="pointer btnProduct btnFR" type="button">Conoce mas</button>
        </div>

        <img className="imgFRLeft" src={FRLeftProducts[0].img} alt={FRLeftProducts[0].alt} />
      </div>

      <div className="boxGris FRRigth">
        <img className="imgFRRigth" src={FRLeftProducts[1].img} alt={FRLeftProducts[1].alt} />
        <div className="boxTextFRL">
          <span className="nameFR">{FRLeftProducts[1].name}</span>
          <button className="pointer btnProduct btnFR" type="button">Conoce mas</button>
        </div>
      </div>
    </div>
  );
}

export default FirstRow;
