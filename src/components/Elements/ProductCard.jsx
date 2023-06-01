import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/`} className="relative">
        <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
          Best Seller
        </span>

        <img className="rounded-t-lg w-full h-64" src="" alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/products/`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {''}
        </p>

        <div className="flex items-center my-2">
          {/* <Rating rating={''} /> */}
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>{''}</span>
          </span>

          <button
            className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 `}
          >
            Remove Item <i className="ml-1 bi bi-trash3"></i>
          </button>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
