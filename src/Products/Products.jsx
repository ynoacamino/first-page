import './Products.css';
import { React } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ProductsList from './ProductsList/ProductsList';
import ViewCategory from './viewCategory/viewCategory';

function Products() {
  return (
    <div className="Products">
      <span className="titleProducts">
        Categorias
      </span>
      <div className="BoxForProducts">
        <ViewCategory />
      </div>
      <div className="bodyProducts">
        <SearchBar />
        <ProductsList />
      </div>
    </div>
  );
}

export default Products;
