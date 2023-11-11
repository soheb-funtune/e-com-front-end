import React, { useEffect, useState } from "react";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";
import { useGetContext } from "../Context/ShopContext/ShopContext";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const [product, setProduct] = useState();
  const [restProducts, setRestProducts] = useState();
  const { productID } = useParams();

  const { AllProducts } = useGetContext();
  useEffect(() => {
    let res = AllProducts?.find((item) => item?.id === Number(productID));
    let restItem = AllProducts?.filter(
      (item) =>
        item?.id !== Number(productID) && res?.category == item?.category
    );
    setRestProducts(restItem);
    setProduct(res);
  }, [productID, AllProducts]);
  return (
    <div>
      <Breadcrum {...product} />
      {product && <ProductDisplay product={product} />}
      <DescriptionBox />
      <RelatedProducts restProducts={restProducts} />
    </div>
  );
};

export default Product;
