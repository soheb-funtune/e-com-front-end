import React, { useEffect, useState } from "react";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";
import { useGetContext } from "../Context/ShopContext/ShopContext";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState();
  const [restProducts, setRestProducts] = useState();
  const { productID } = useParams();

  const { AllProducts } = useGetContext();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:4000/getItems?_id=${productID}`)
        .then((res) => res.data)
        .then((res) => {
          console.log({ res });
          setProduct(res);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);

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
