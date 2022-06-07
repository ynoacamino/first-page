/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
import './Slider.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const imgs = [
  {
    src: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/ecommerce/pe/events/smartoffice22/kvs/MateBook-D14WEB.webp',
    srcMovil: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/ecommerce/pe/events/smartoffice22/kvs/MateBook-D14-WAP.webp',
    alt: 'sliderImg',
    key: '1',
  },
  {
    src: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/ecommerce/pe/events/smartoffice22/kvs/MateView-GTWEB.webp',
    srcMovil: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/ecommerce/pe/events/smartoffice22/kvs/MateView-GT-WAP.webp',
    alt: 'sliderImg',
    key: '2',
  },
  {
    src: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/ecommerce/pe/events/smartoffice22/kvs/MatePad11WEB.webp',
    srcMovil: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/ecommerce/pe/events/smartoffice22/kvs/MatePad-WAP.webp',
    alt: 'sliderImg',
    key: '3',
  },
  {
    src: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/ecommerce/pe/events/smartoffice22/kvs/MateBook-D14WEB.webp',
    srcMovil: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/ecommerce/pe/events/smartoffice22/kvs/MateBook-D14-WAP.webp',
    alt: 'sliderImg',
    key: '4',
  },
  {
    src: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/ecommerce/pe/events/smartoffice22/kvs/Main-banner-promo-p50-2.webp',
    srcMovil: 'https://tinyurl.com/2cyb63bz',
    alt: 'sliderImg',
    key: '5',
  },
  {
    src: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/ecommerce/pe/events/smartoffice22/kvs/KV_WEB_11zon.webp',
    srcMovil: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/ecommerce/pe/events/smartoffice22/kvs/KV_WAP_11zon.webp',
    alt: 'sliderImg',
    key: '6',
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [viewImg]);

  return (
    <div className="Slider">
      {imgs.map((img) => {
        if (viewImg === Number(img.key)) {
          return (
            <div className="divImg" key={img.key}>
              <picture>
                <source media="(max-width: 1000px)" srcSet={img.srcMovil} />
                <img
                  className="imgSlider "
                  src={img.src}
                  alt={img.alt}
                  decoding="sync"
                />
              </picture>
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
