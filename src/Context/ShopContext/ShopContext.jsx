import React, { createContext, useContext, useEffect, useState } from "react";
import AllProducts from "../../Components/Assets/all_product";

const ShopContext = new createContext(null);

export const useGetContext = () => {
  return useContext(ShopContext);
};

const ShopContextProdider = ({ children }) => {
  const [cartItems, setCartItems] = useState({ totalCount: 0, data: [] });
  const [allItems, setAllItems] = useState([]);

  // remove card item from list
  const removeItem = (id) => {
    const res = cartItems?.data?.filter((item) => item?._id == id);
    const filteredArr = cartItems?.data?.filter((item) => item?._id != id);
    console.log("remove Item Called:", { res, filteredArr });
    setCartItems({
      totalCount: cartItems?.totalCount - res[0]?.quantity,
      data: filteredArr,
    });
  };
  // decresing the cart item Quantity
  const descreaseCartItem = (id) => {
    setCartItems({
      totalCount: cartItems?.totalCount == 0 ? 0 : cartItems?.totalCount - 1,
      data: cartItems?.data?.map((item) =>
        item?._id == id
          ? { ...item, quantity: item?.quantity == 0 ? 0 : item?.quantity - 1 }
          : item
      ),
    });
  };
  // adding item into cart and also increasing the cart item quantity
  const addToCartFun = (id) => {
    const res = allItems?.find((item) => item?._id === id);
    const quantityUpdate = cartItems?.data?.map((item) =>
      item?._id == id ? { ...item, quantity: item?.quantity + 1 } : item
    );

    const itemAlready = cartItems?.data?.filter((item) => item?._id === id);
    itemAlready[0]?._id == id
      ? setCartItems({
          totalCount: cartItems?.totalCount + 1,
          data: [...quantityUpdate],
        })
      : setCartItems({
          totalCount: cartItems?.totalCount + 1,
          data: [...cartItems?.data, { ...res, quantity: 1 }],
        });
    console.log({ cartItems });
  };

  return (
    <ShopContext.Provider
      value={{
        AllProducts,
        setAllItems,
        cartItems,
        setCartItems,
        addToCartFun,
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
