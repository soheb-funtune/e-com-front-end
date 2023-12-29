import React, { useEffect, useState } from "react";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";
import { useGetContext } from "../Context/ShopContext/ShopContext";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import axios from "axios";
import { useSelector } from "react-redux";

const Product = () => {
  const { allItems } = useSelector((state) => state.home);
  const [product, setProduct] = useState();
  const [restProducts, setRestProducts] = useState();
  const { productID } = useParams();

  const { AllProducts } = useGetContext();
  useEffect(() => {
    if (productID && allItems) {
      setProduct(allItems?.find((item) => item?._id === productID));
    }
  }, [productID, allItems]);
  useEffect(() => {
    if (product && allItems) {
      setRestProducts(
        allItems?.filter(
          (item) =>
            product?._id !== item?._id && product?.category === item?.category
        )
      );
    }
  }, [product, allItems]);

  // useEffect(() => {
  //   let res = AllProducts?.find((item) => item?._id === Number(productID));
  //   let restItem = AllProducts?.filter(
  //     (item) =>
  //       item?.id !== Number(productID) && res?.category == item?.category
  //   );
  //   setRestProducts(restItem);
  //   setProduct(res);
  // }, [productID, AllProducts]);
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
