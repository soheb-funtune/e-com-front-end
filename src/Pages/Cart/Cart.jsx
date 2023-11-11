import React, { useEffect, useState } from "react";
import CartList from "../../Components/CartList/CartList";
import "./Cart.css";
import { useGetContext } from "../../Context/ShopContext/ShopContext";
const Cart = () => {
  const [total, setTotal] = useState();
  const { cartItems } = useGetContext();
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
