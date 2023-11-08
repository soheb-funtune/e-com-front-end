import React, { useEffect, useState } from "react";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";
import { useGetContext } from "../Context/ShopContext/ShopContext";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {
  const [product, setProduct] = useState();
  const { productID } = useParams();

  const { AllProducts } = useGetContext();
  useEffect(() => {
    let res = AllProducts?.find((item) => item?.id === Number(productID));
    setProduct(res);
  }, [productID, AllProducts]);
  return (
    <div>
      <Breadcrum {...product} />
      {product && <ProductDisplay product={product} />}
      <DescriptionBox />
    </div>
  );
};

export default Product;
