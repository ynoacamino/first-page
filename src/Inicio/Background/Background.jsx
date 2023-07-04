import './Background.css';
import React from 'react';
import Title from '../Title/Title';
import { findID } from '../../util';

function Background({ images, texts }) {
  console.log({ images }, { texts });
  const boxImg = images.find(findID('649b166f083daa9c8af6e139'));
  const textBg = texts.find(findID('64a39756de4fc89914038f06'));

  const especialText = [
    textBg.description.substring(0, textBg.description.indexOf('click')),
    textBg.description.substring(textBg.description.indexOf('click') + 5),
  ];

  return (
    <div className="Background">
      <div className="boxImgBg">
        <img
          className="boxImg"
          src={boxImg.src}
          alt={boxImg.alt}
        />
        <div className="degraded" />
      </div>
      <div className="textBg">
        {especialText[0]}
        {' '}
        <a className="clickLink underline" href="/">click</a>
        {especialText[1]}
      </div>
      <Title />
    </div>
  );
}

export default Background;
