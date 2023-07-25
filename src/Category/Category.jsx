import React from 'react';
import './Category.css';
import { useParams } from 'react-router-dom';
import ProductsList from '../Products/ProductsList/ProductsList';

function Category() {
  const { category } = useParams();
  const title = category.substring(0, 1).toUpperCase() + category.substring(1);
  return (
    <div className="Category">
      <h2 className="titleCategory">{title}</h2>
      <ProductsList category={category} />
    </div>
  );
}

export default Category;
