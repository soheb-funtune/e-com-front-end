import React, { useState, useEffect } from "react";
import { useGetContext } from "../../Context/ShopContext/ShopContext";
import { useSelector } from "react-redux";
import "./CartList.css";

const CartList = () => {
  const { cartItems } = useSelector((state) => state.home);
  const [cartData, setCartData] = useState([]);
  const { increaseCartItem, descreaseCartItem, removeItem } = useGetContext();
  console.log(cartItems?.data);
  // useEffect(() => {
  //   const cartRes = [];
  //   cartItems?.data?.forEach((item) => {
  //     if (cartRes?.find((i) => i?._id === item?._id)?._id) {
  //       cartRes?.map((e) =>
  //         e?._id === item?.id ? { ...e, quantity: e?.quantity + 1 } : e
  //       );
  //     } else {
  //       cartRes?.push(item);
  //     }
  //     setCartData(cartRes);
  //   });
  // }, [cartItems]);
  console.log(cartItems?.data);
  return (
    <div className="cart-list-items">
      {cartItems?.data?.map(
        ({ image, new_price, quantity, name, product_id, _id }) => {
          // const { image, new_price, quantity, name, product_id, _id } = item;
          return (
            <div key={_id} className="cart-item">
              <button
                onClick={() => removeItem(product_id)}
                className="remove-item"
              >
                X
              </button>
              <img src={image} alt={name} />
              <div className="content-container">
                <h3>{name}</h3>
                <div className="right-div">
                  <div className="prices">
                    <span>
                      Price : <b>${new_price}</b>
                    </span>
                    <span>
                      Total Price : <b> ${new_price * quantity}</b>
                    </span>
                    <span>
                      Total Quantity : <b>{quantity}</b>
                    </span>
                  </div>
                  <div className="quantity-handler">
                    <button
                      disabled={quantity <= 1}
                      onClick={() =>
                        quantity != 0 && descreaseCartItem(product_id)
                      }
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseCartItem(product_id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default CartList;
