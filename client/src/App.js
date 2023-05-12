import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './views/Main'
import ProductPage from "./components/ProductPage";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = {<Main/>} path="/home" default />
          <Route element = {<ProductPage/>} path="/product/:id" default />
          <Route element= {<UpdateProduct/>} path="/product/edit/:id" default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
