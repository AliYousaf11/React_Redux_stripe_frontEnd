import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetails from './container/ProductDetails';
import ProductListening from './container/ProductListening';
import Header from "./container/Header";
import SelectedProduct from "./container/SelectedProduct";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListening />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/selectedProduct' element={<SelectedProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
