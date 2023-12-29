import React, { useState, useEffect } from "react";
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
  Navigate,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import { useGetContext } from "./Context/ShopContext/ShopContext";
import CreateItem from "./Pages/CreateItem/CreateItem";
import axios from "axios";
import Login from "./Pages/LoginSignUp/Login";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "./State/home.slice";
import { getItems, getCartItems, userData } from "./State/home.slice";
import NotFound from "./Components/PageNotFound/NotFound";
import ContactPage from "./Pages/ContactPage/ContactPage";

const Wrap = ({ children }) => {
  return <div style={{ minHeight: "65vh" }}>{children}</div>;
};

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.home);
  const [apiCartData, setApiCartData] = useState([]);
  // const { setAllItems, addToCartFun } = useGetContext();

  // useEffect(() => {
  //   if (apiCartData?.length > 0) {
  //     const res = apiCartData?.reduce((acc, cur) => {
  //       return acc + cur?.quantity;
  //     }, 0);
  //     console.log("all cart data :", apiCartData, res);
  //     res &&
  //       dispatch(
  //         setCartItems({
  //           totalCount: res,
  //           data: apiCartData,
  //         })
  //       );
  //   }
  // }, [apiCartData]);

  useEffect(() => {
    // const fetchData = async () => {
    //   await axios
    //     .get(`http://localhost:4000/user/cart-items?user_id=${user?._id}`)
    //     .then((res) => {
    //       console.log(res.data);
    //       setApiCartData(res?.data?.data);
    //     })
    //     .catch((err) => console.log({ err }));
    // };
    if (localStorage?.getItem("token") == user?.token) {
      dispatch(getItems());
      dispatch(getCartItems(user?._id));
      // fetchData();
    } else {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    // const fetchData = async () => {
    //   await axios
    //     .get("http://localhost:4000/getItems")
    //     .then((res) => res.data)
    //     .then((res) => {
    //       console.log({ res });
    //       setAllItems(res);
    //     })
    //     .catch((err) => console.error(err));
    // };
    // fetchData();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      dispatch(userData(user));
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Wrap>
        {" "}
        <Routes>
          {localStorage?.getItem("token") &&
          localStorage?.getItem("token") === user?.token ? (
            <>
              <Route path="/" element={<Shop />} />
              ...(
              {user?.email === "sohebs5050@gmail.com" && (
                <Route path="/create" element={<CreateItem />} />
              )}
              )
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
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/*" element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/*" element={<NotFound />} />
            </>
          )}
        </Routes>
      </Wrap>

      {localStorage?.getItem("token") &&
        localStorage?.getItem("token") === user?.token && <Footer />}
    </React.Fragment>
  );
}

export default App;
