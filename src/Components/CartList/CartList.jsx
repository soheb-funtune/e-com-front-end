import React from "react";
import { useGetContext } from "../../Context/ShopContext/ShopContext";
import "./CartList.css";
const CartList = () => {
  const { cartItems, addToCartFun, descreaseCartItem, removeItem } =
    useGetContext();
  return (
    <div className="cart-list-items">
      {cartItems?.data?.map(({ name, image, new_price, quantity, _id }) => (
        <div key={_id} className="cart-item">
          <button onClick={() => removeItem(_id)} className="remove-item">
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
                <button onClick={() => quantity != 0 && descreaseCartItem(_id)}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => addToCartFun(_id)}>+</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
