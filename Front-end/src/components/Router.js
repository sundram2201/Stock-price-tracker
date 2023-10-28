import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Stock from "../pages/Stock";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/stock/:id' element={<Stock />} />
        <Route path='/*' element='404 not found' />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
