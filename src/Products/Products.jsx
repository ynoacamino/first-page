import './Products.css';
import { React } from 'react';
import FirstRow from './FirstRow/FirstRow';
import SecondRow from './SecondRow/SecondRow';
import ThirdRow from './ThirdRow/ThirdRow';
import SearchBar from './SearchBar/SearchBar';
import ProductsList from './ProductsList/ProductsList';

function Products() {
  return (
    <div className="Products">
      <span className="titleProducts">
        Categorias
      </span>
      <div className="BoxForProducts">
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </div>
      <div className="bodyProducts">
        <SearchBar />
        <ProductsList />
      </div>
    </div>
  );
}

export default Products;
