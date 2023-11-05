import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ProductCategory from "./Pages/ProductCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ProductCategory category="men" />} />
        <Route path="/womens" element={<ProductCategory category="women" />} />
        <Route path="/kids" element={<ProductCategory category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path="/product/:productID" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
