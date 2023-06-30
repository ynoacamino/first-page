import './Background.css';
import React from 'react';
import { useQuery } from '@apollo/client';
import { isLoading } from '../../util';
import Title from '../Title/Title';
import { QUERY_STATIC_IMAGE } from '../../Operations/Query';

function Background() {
  const { loading, data } = useQuery(QUERY_STATIC_IMAGE, {
    variables: { ID: '649b166f083daa9c8af6e139' },
  });
  return (
    <div className="Background">
      <div className="boxImgBg">
        {isLoading(loading || !data, <img
          className="boxImg"
          src={data ? data.findSingleImage.src : ''}
          alt={data ? data.findSingleImage.alt : ''}
        />, 'boxImg')}
        <div className="degraded" />
      </div>
      <div className="textBg">
        La PC gamer de tu sueños a un
        {' '}
        <a className="clickLink underline" href="/">click</a>
        , consulta con nosotros.
      </div>
      <Title />
    </div>
  );
}

export default Background;
