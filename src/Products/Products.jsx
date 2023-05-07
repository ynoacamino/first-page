import './Products.css';
import { React } from 'react';
import FirstRow from './FirstRow/FirstRow';

function Products() {
  return (
    <div className="Products">
      <span className="titleProducts">
        Categorias
      </span>
      <div className="BoxForProducts">
        <FirstRow />
        <FirstRow />
      </div>
    </div>
  );
}

export default Products;
