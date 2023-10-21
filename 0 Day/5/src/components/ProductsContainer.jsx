import ProductsGrid from './ProductsGrids';
import ProductsList from './ProductsList';

import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState('grid');
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-xm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-based-content'
    }`;
  };
  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md ">
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className=" flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div className=" text-2xl mt-16 ">
        {totalProducts === 0 ? (
          <h5 className="0">sorry, no products matched your search</h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;