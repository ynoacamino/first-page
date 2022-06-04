/* eslint-disable arrow-body-style */
import './Slider.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const imgs = [
  {
    src: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'sliderImg',
    key: '1',
  },
  {
    src: 'https://images.pexels.com/photos/51415/pexels-photo-51415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'sliderImg',
    key: '2',
  },
  {
    src: 'https://images.pexels.com/photos/237807/pexels-photo-237807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'sliderImg',
    key: '3',
  },
  {
    src: 'https://images.pexels.com/photos/2106216/pexels-photo-2106216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'sliderImg',
    key: '4',
  },
];

function Slider() {
  const [viewImg, setViewImg] = useState(1);

  const next = () => {
    if (viewImg === 4) setViewImg(1);
    else setViewImg(viewImg + 1);
  };

  const prev = () => {
    if (viewImg === 1) setViewImg(4);
    else setViewImg(viewImg - 1);
  };

  const changeImg = (num) => {
    setViewImg(Number(num));
  };

  return (
    <div className="Slider">
      {imgs.map((img) => {
        return (
          <div className="divImg" key={img.key}>
            <img className={`imgSlider ${viewImg === Number(img.key) && 'visible'}`} src={img.src} alt={img.alt} />
          </div>
        );
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
