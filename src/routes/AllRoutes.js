import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { HomePage, ProductsList, CartPage } from '../pages';

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
