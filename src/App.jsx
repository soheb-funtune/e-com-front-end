import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart/Cart";
import RegisterPage from "./Pages/LoginSignUp/RegisterPage";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import { useGetContext } from "./Context/ShopContext/ShopContext";
import CreateItem from "./Pages/CreateItem/CreateItem";
import axios from "axios";
import Login from "./Pages/LoginSignUp/Login";

const Wrap = ({ children }) => {
  return <div style={{ minHeight: "65vh" }}>{children}</div>;
};

function App() {
  const { setAllItems } = useGetContext();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:4000/getItems")
        .then((res) => res.data)
        .then((res) => {
          console.log({ res });
          setAllItems(res);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Wrap>
        {" "}
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/create" element={<CreateItem />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path="/product/:productID" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Wrap>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
