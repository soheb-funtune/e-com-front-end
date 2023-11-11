import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useGetContext } from "../../Context/ShopContext/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCartFun } = useGetContext();
  const { image, name, new_price, old_price, id } = product;
  console.log({ product });
  return (
    <div className="product-display">
      <div className="left">
        <img className="big-poster" src={image} alt={image} />
        <div className="images">
          <img src={image} alt={image} />
          <img src={image} alt={image} />
          <img src={image} alt={image} />
          <img src={image} alt={image} />
        </div>
      </div>

      <div className="right">
        <h1>{name}</h1>
        <div className="rating-div">
          <img src={star_icon} alt={star_icon} />
          <img src={star_icon} alt={star_icon} />
          <img src={star_icon} alt={star_icon} />
          <img src={star_icon} alt={star_icon} />
          <img src={star_dull_icon} alt={star_dull_icon} />
        </div>

        <div className="price">
          <span>${old_price}</span>
          <span>${new_price}</span>
        </div>
        <p>Descirption </p>
        <div className="sizes">
          <h3>Select Size</h3>
          <div className="size-div">
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>Xl</span>
            <span>XXl</span>
          </div>
        </div>
        <button className="add-to-cart" onClick={() => addToCartFun(id)}>
          Add to Cart
        </button>
        <div className="category-div">
          <b>Category : </b>
          <span>Women</span>
          <span>T-shirt</span>
        </div>
        <div className="tags-div">
          <b>Tags :</b>
          <span>Modern</span>
          <span>Latest</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
