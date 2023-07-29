import './SingleMarca.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { ImgRatio } from '../../util';

function SingleMarca({ src, name }) {
  return (
    <Link to={`/products/${name}`} className="boxBrand">
      <ImgRatio
        aspectRatio={15 / 8}
        src={src}
        alt={name}
        className="imgMarca"
      />
    </Link>
  );
}

export default SingleMarca;
