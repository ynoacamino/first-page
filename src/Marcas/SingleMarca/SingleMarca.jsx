import './SingleMarca.css';
import React from 'react';

function SingleMarca({ link, src, alt }) {
  return (
    <a href={link}>
      <img
        src={src}
        alt={alt}
        className="imgMarca"
      />
    </a>
  );
}

export default SingleMarca;
