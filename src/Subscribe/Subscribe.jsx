import './Subscribe.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Subscribe() {
  return (
    <div className="Subscribe">
      <form className="formSub">
        <span className="degradedText">¡REGÍSTRATE Y RECIBE OFERTAS EXCLUSIVAS!</span>
        <div className="inputBtnSub">
          <input className="inputSub" type="email" name="email" id="email" placeholder="example@gmail.com" required />
          <button type="submit" className="btnSub pointer">
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </button>
        </div>
      </form>
      <div className="boxImgSub">
        <img
          className="boxSubImg"
          src="https://cdn.discordapp.com/attachments/772232222220615710/983061210499002388/setupGray_1.jpg"
          alt="set up gray"
        />
        <div className="degradedSub" />
      </div>
    </div>
  );
}

export default Subscribe;
