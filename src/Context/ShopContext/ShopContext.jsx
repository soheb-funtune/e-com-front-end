import React, { createContext, useContext, useEffect, useState } from "react";
import AllProducts from "../../Components/Assets/all_product";
import { useSelector } from "react-redux";
import axios from "axios";

const ShopContext = new createContext(null);

export const useGetContext = () => {
  return useContext(ShopContext);
};

const ShopContextProdider = ({ children }) => {
  const { user } = useSelector((state) => state?.home);
  const [cartItems, setCartItems] = useState({ totalCount: 0, data: [] });
  const [allItems, setAllItems] = useState([]);
  console.log(cartItems);

  // remove card item from list
  const removeCartAPI = async (_id) => {
    return await axios.delete(
      `http://localhost:4000/user/cart-items?user_id=${user?._id}`,
      { product_id: _id }
    );
  };

  const removeItem = (id) => {
    const apiRes = removeCartAPI(id);
    const res = cartItems?.data?.find((item) => item?.product_id == id);
    const filteredArr = cartItems?.data?.filter(
      (item) => item?.product_id !== id
    );
    console.log("remove Item Called:", { res, filteredArr });
    setCartItems({
      totalCount: cartItems?.totalCount - res?.quantity,
      data: [...filteredArr],
    });
  };

  const updateQuantity = async (_id, quantity) => {
    return await axios.put(
      `http://localhost:4000/user/cart-items?user_id=${user?._id}`,
      { product_id: _id, quantity }
    );
  };
  // decresing the cart item Quantity
  const descreaseCartItem = (id) => {
    setCartItems({
      totalCount: cartItems?.totalCount == 0 ? 0 : cartItems?.totalCount - 1,
      data: cartItems?.data?.map((item) => {
        if (item?.product_id == id) {
          updateQuantity(id, item?.quantity == 0 ? 0 : item?.quantity - 1);
          return {
            ...item,
            quantity: item?.quantity == 0 ? 0 : item?.quantity - 1,
          };
        } else {
          return item;
        }
      }),
    });
  };
  // increase the cart item Quantity
  const increaseCartItem = (_id) => {
    setCartItems({
      totalCount: cartItems?.totalCount + 1,
      data: cartItems?.data?.map((item) => {
        if (item?.product_id === _id) {
          updateQuantity(_id, item?.quantity + 1);
          return { ...item, quantity: item?.quantity + 1 };
        } else {
          return item;
        }
      }),
    });
  };

  const addToCartAPI = async (singleItem) => {
    const { _id, ...rest } = singleItem;
    return await axios.post(
      `http://localhost:4000/user/cart-items?user_id=${user?._id}`,
      { ...rest, product_id: _id }
    );
  };

  // const itemAlready = (prev, id) => {
  //   prev?.data?.map((item) => {
  //     if (JSON.stringify(item?._id) === JSON.stringify(id)) {
  //       console.log(item?._id, "===", id);
  //       return true;
  //     }
  //   });
  // };

  // adding item into cart and also increasing the cart item quantity
  const addToCartFun = (singleItem) => {
    const { _id: id, sizes } = singleItem;
    console.log(
      "find:",
      cartItems?.data?.find((i) => i?.product_id === singleItem?._id)
    );
    if (cartItems?.data?.find((i) => i?.product_id === singleItem?._id)) {
      increaseCartItem(id);
    } else {
      const apiRes = addToCartAPI(singleItem);
      if (id) {
        const res = allItems?.find((item) => item?._id == id);
        const { _id, ...rest } = res;
        console.log(res);

        const resF = cartItems?.data?.map((item) => item);
        console.log(cartItems);
        setCartItems((prev) => ({
          totalCount: prev?.totalCount + 1,
          data: [
            ...prev?.data,
            { ...rest, product_id: _id, sizes, quantity: 1 },
          ],
        }));
      }
    }
  };

  const handleAPICart = (apiCartData) => {
    apiCartData?.map((item) => {
      console.log("ID", item?.product_id);
      // addToCartFun(item?.product_id, true);
    });
  };

  return (
    <ShopContext.Provider
      value={{
        AllProducts,
        setAllItems,
        cartItems,
        setCartItems,
        handleAPICart,
        addToCartFun,
        increaseCartItem,
        descreaseCartItem,
        removeItem,
        allItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProdider;
