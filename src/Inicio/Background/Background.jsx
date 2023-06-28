import './Background.css';
import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import Title from '../Title/Title';

const img = {
  src: 'https://media.discordapp.net/attachments/772232222220615710/982819357124087878/Web_Setup-GRAL_Blanco.jpg',
  alt: 'setUp',
};

const QUERY_IMAGE = gql`
query findById($ID: ID!) {
  findSingleImage(id: $ID) {
    src
    alt
    link
  }
}
`;

function Background() {
  const { loading, data } = useQuery(QUERY_IMAGE, {
    variables: { ID: '649b166f083daa9c8af6e139' },
  });
  return (
    <div className="Background">
      <div className="boxImgBg">
        { loading
          ? (
            <img
              className="boxImg"
              src={img.src}
              alt={img.alt}
            />
          ) : (
            <img
              className="boxImg"
              src={data.findSingleImage.src}
              alt={data.findSingleImage.alt}
            />
          )}
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
