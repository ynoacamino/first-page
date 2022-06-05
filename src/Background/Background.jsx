import './Background.css';
import React from 'react';
import Title from '../Title/Title';

function Background() {
  return (
    <div className="Background">
      <div className="boxImgBg">
        <img
          className="boxImg"
          src="https://media.discordapp.net/attachments/772232222220615710/982819357124087878/Web_Setup-GRAL_Blanco.jpg"
          alt="setUp"
        />
        <div className="degraded" />
      </div>
      <div className="textBg">
        La PC gamer de tu sueños a un click, consulta con nosotros.
      </div>
      <Title />
    </div>
  );
}

export default Background;
