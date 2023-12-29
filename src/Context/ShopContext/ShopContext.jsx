import React, { createContext, useContext, useEffect, useState } from "react";
import AllProducts from "../../Components/Assets/all_product";
import { useSelector, useDispatch } from "react-redux";
import {
  setCartItems,
  removeCartItemAPI,
  addCartItemAPI,
  updateCartQuantityAPI,
} from "../../State/home.slice";

const ShopContext = new createContext(null);

export const useGetContext = () => {
  return useContext(ShopContext);
};

const ShopContextProdider = ({ children }) => {
  const { user, allItems, cartItems } = useSelector((state) => state?.home);
  const dispatch = useDispatch();

  console.log(cartItems);

  const removeItem = (id) => {
    dispatch(removeCartItemAPI(id));
    const res = cartItems?.data?.find((item) => item?.product_id == id);
    const filteredArr = cartItems?.data?.filter(
      (item) => item?.product_id !== id
    );
    console.log("remove Item Called:", { res, filteredArr });
    dispatch(
      setCartItems({
        totalCount: cartItems?.totalCount - res?.quantity,
        data: [...filteredArr],
      })
    );
  };

  // decresing the cart item Quantity
  const descreaseCartItem = (id) => {
    dispatch(
      setCartItems({
        totalCount: cartItems?.totalCount == 0 ? 0 : cartItems?.totalCount - 1,
        data: cartItems?.data?.map((item) => {
          if (item?.product_id == id) {
            dispatch(
              updateCartQuantityAPI(
                id,
                item?.quantity == 0 ? 0 : item?.quantity - 1
              )
            );
            return {
              ...item,
              quantity: item?.quantity == 0 ? 0 : item?.quantity - 1,
            };
          } else {
            return item;
          }
        }),
      })
    );
  };
  // increase the cart item Quantity
  const increaseCartItem = (_id) => {
    dispatch(
      setCartItems({
        totalCount: cartItems?.totalCount + 1,
        data: cartItems?.data?.map((item) => {
          if (item?.product_id === _id) {
            dispatch(updateCartQuantityAPI(_id, item?.quantity + 1));
            return { ...item, quantity: item?.quantity + 1 };
          } else {
            return item;
          }
        }),
      })
    );
  };

  // adding item into cart and also increasing the cart item quantity
  const addToCartFun = (singleItem) => {
    const { _id: id, sizes } = singleItem;

    if (cartItems?.data?.find((i) => i?.product_id === singleItem?._id)) {
      increaseCartItem(id);
    } else {
      dispatch(addCartItemAPI(singleItem));
      if (id) {
        const res = allItems?.find((item) => item?._id == id);
        const { _id, ...rest } = res;
        console.log(res);

        const resF = cartItems?.data?.map((item) => item);
        console.log(cartItems);
        dispatch(
          setCartItems({
            totalCount: cartItems?.totalCount + 1,
            data: [
              ...cartItems?.data,
              { ...rest, product_id: _id, sizes, quantity: 1 },
            ],
          })
        );
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
        cartItems,

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
