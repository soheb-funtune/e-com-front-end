import React, { createContext, useContext } from "react";
import AllProducts from "../../Components/Assets/all_product";

const ShopContext = new createContext(null);

export const useGetContext = () => {
  return useContext(ShopContext);
};

const ShopContextProdider = ({ children }) => {
  return (
    <ShopContext.Provider value={{ AllProducts }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProdider;
