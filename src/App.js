import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetails from './container/ProductDetails';
import ProductListening from './container/ProductListening';
import Header from "./container/Header";
import SelectedProduct from "./container/SelectedProduct";
import SuccessPage from "./pages/Success";
import FailPage from "./pages/Fail";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListening />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/selectedProduct' element={<SelectedProduct />} />
          <Route path='/order/success' element={<SuccessPage />} />
          <Route path='/order/fail' element={<FailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
