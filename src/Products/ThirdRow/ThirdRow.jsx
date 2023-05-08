import './ThirdRow.css';
import React from 'react';

function ThirdRow() {
  const infoTR = [
    {
      name: 'Tablets',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/1104970302615720006/matepad-11-removebg-preview.png',
      alt: '',
    },
    {
      name: "Pc's",
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/1104970302968049745/matebook-x-pro-2021-pc-removebg-preview.png',
      alt: '',
    },
    {
      name: 'Wearables',
      img: 'https://cdn.discordapp.com/attachments/772232222220615710/1104970302343098438/Captura_de_pantalla_2023-05-07_221702-removebg-preview.png',
      alt: '',
    },
  ];

  return (
    <div className="TRBox">
      <div className="boxGris TRColumn">
        <img className="imgTR" src={infoTR[0].img} alt={infoTR[0].alt} />
        <div className="boxTextTR">
          <span className="nameFR">{infoTR[0].name}</span>
          <button className="pointer btnProduct btnTR" type="button">Conoce mas</button>
        </div>
      </div>
      <div className="boxGris TRColumn">
        <img className="imgTR" src={infoTR[1].img} alt={infoTR[1].alt} />
        <div className="boxTextTR">
          <span className="nameFR">{infoTR[1].name}</span>
          <button className="pointer btnProduct btnTR" type="button">Conoce mas</button>
        </div>
      </div>
      <div className="boxGris TRColumn">
        <img className="imgTR" src={infoTR[2].img} alt={infoTR[2].alt} />
        <div className="boxTextTR">
          <span className="nameFR">{infoTR[2].name}</span>
          <button className="pointer btnProduct btnTR" type="button">Conoce mas</button>
        </div>
      </div>
    </div>
  );
}

export default ThirdRow;
