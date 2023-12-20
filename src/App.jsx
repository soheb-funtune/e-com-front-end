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
import { useDispatch } from "react-redux";
import { userData } from "./State/home.slice";

const Wrap = ({ children }) => {
  return <div style={{ minHeight: "65vh" }}>{children}</div>;
};

function App() {
  const dispatch = useDispatch();
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
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      dispatch(userData(user));
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Wrap>
        {" "}
        <Routes>
          {!localStorage?.getItem("token") ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Shop />} />
              <Route path="/create" element={<CreateItem />} />
              <Route
                path="/mens"
                element={<ShopCategory banner={men_banner} category="men" />}
              />
              <Route
                path="/womens"
                element={
                  <ShopCategory banner={women_banner} category="women" />
                }
              />
              <Route
                path="/kids"
                element={<ShopCategory banner={kid_banner} category="kid" />}
              />
              <Route path="/product" element={<Product />}>
                <Route path="/product/:productID" element={<Product />} />
              </Route>
              <Route path="/cart" element={<Cart />} />
            </>
          )}
        </Routes>
      </Wrap>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
