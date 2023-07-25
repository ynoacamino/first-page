import React from 'react';
import { useQuery } from '@apollo/client';
import './ProductsList.css';
import Item from './Item/Item';
import { QUERY_CATEGORY } from '../../Operations/Query';

function ProductsList({ category = '' }) {
  const { data, loading } = useQuery(QUERY_CATEGORY, {
    variables: { category },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div className="ProductList">
      {data.findCategory.map((item) => (
        <Item
          key={item.id}
          src={item.src}
          name={item.name}
          cost={item.cost}
          id={item.id}
          brand={item.brand}
        />
      ))}
    </div>
  );
}

export default ProductsList;
