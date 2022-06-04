/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
import './Slider.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const imgs = [
  {
    src: 'https://cdn.discordapp.com/attachments/772232222220615710/982726877124907068/IZQCQ6Ow.png',
    alt: 'sliderImg',
    key: '1',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/772232222220615710/982726877481426944/tgr8Y6Ug.png',
    alt: 'sliderImg',
    key: '2',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/772232222220615710/982726877716283402/lMWNRBSw.png',
    alt: 'sliderImg',
    key: '3',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/772232222220615710/982726877988921354/Mv--JP8w.png',
    alt: 'sliderImg',
    key: '4',
  },
];

function Slider() {
  const [viewImg, setViewImg] = useState(1);

  const next = () => {
    if (viewImg === imgs.length) setViewImg(1);
    else setViewImg(viewImg + 1);
  };

  const prev = () => {
    if (viewImg === 1) setViewImg(imgs.length);
    else setViewImg(viewImg - 1);
  };

  const changeImg = (num) => {
    setViewImg(Number(num));
  };

  return (
    <div className="Slider">
      {imgs.map((img) => {
        if (viewImg === Number(img.key)) {
          return (
            <div className="divImg" key={img.key}>
              <img className="imgSlider " src={img.src} alt={img.alt} />
            </div>
          );
        }
      })}
      <button type="button" className="prev arrowBtn pointer arrowBtnLeft" onClick={prev}>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
      </button>
      <button type="button" className="next arrowBtn pointer arrowBtnRigth" onClick={next}>
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </button>
      <div className="elements">
        {imgs.map((img) => (
          <button
            type="button"
            key={img.key}
            className={`quadrate pointer ${viewImg === Number(img.key) && 'quadrateView'}`}
            onClick={() => changeImg(img.key)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
