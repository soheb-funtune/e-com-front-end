import React, { useEffect, useState } from "react";
import CartList from "../../Components/CartList/CartList";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Cart.css";
import { useGetContext } from "../../Context/ShopContext/ShopContext";
const Cart = () => {
  const { user, cartItems } = useSelector((state) => state?.home);
  console.log({ user });
  const [total, setTotal] = useState();

  useEffect(() => {
    let total = 0;
    cartItems?.data?.forEach((item) => {
      total = total + item?.new_price * item?.quantity;
    });
    setTotal(total);
  }, [cartItems]);

  return (
    <div className="cart">
      <div className="heading-div">
        <h2>
          {" "}
          Cart Item List <hr />
        </h2>
        <div className="total-price-div">
          <span>
            Total Price : <b> ${total}</b>
          </span>
          <span>
            Total Quantity : <b>{cartItems?.totalCount}</b>
          </span>
        </div>
      </div>
      <CartList />
    </div>
  );
};

export default Cart;
