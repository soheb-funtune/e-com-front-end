import React, { useState, useEffect } from "react";
import { useGetContext } from "../../Context/ShopContext/ShopContext";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { razorpayAPI } from "../../State/home.slice";
import "./CartList.css";

const CartList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.home);
  const { increaseCartItem, descreaseCartItem, removeItem } = useGetContext();
  console.log(cartItems?.data);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRezorpay = async (singleItem) => {
    console.log("displayRezorpay");
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Rezorpay SKD Failed to load, Are you online ?");
      return;
    }
    const resData = await razorpayAPI(singleItem);
    console.log({ resData });
    const options = {
      key: resData?.data?.key, // Enter the Key ID generated from the Dashboard
      amount: resData?.data?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "SHOPPER", //your business name
      description: "Buying Some Clothes from Soheb's SHOPPER",
      image: "http://localhost:4000/Images/image_1702144533935.jpg",
      order_id: resData?.data?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      id: resData?.data?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Sayyad Soheb", //your customer's name
        email: "sohebs5050@gmail.com",
        contact: "9604376207", //Provide the customer's phone number for better conversion rates
      },
      handler: function (response) {
        console.log(response);
        // Handle the successful payment response
        navigate("/");
      },
      // notes: {
      //   address: "Razorpay Corporate Office",
      // },
      // theme: {
      //   color: "#3399cc",
      // },
    };
    // if (resData?.data) {
    var paymentOption = new window.Razorpay(options);
    paymentOption.open();
    // }
  };

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
                      disabled={quantity == 1}
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
                <div className="button-div">
                  <button
                    onClick={() =>
                      displayRezorpay({
                        image,
                        new_price,
                        quantity,
                        name,
                        product_id,
                        _id,
                      })
                    }
                  >
                    Buy Now
                  </button>
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
