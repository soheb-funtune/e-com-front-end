import React, { useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useGetContext } from "../../Context/ShopContext/ShopContext";
import styled from "styled-components";

const RedioButtons = ({ name, value, setRadioButton, defaultChecked }) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={(e) => setRadioButton(e.target.value)}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={value}>{value}</label>
    </>
  );
};

const ProductDisplay = ({ product }) => {
  const [radioButton, setRadioButton] = useState();
  const { addToCartFun } = useGetContext();
  const { image, name, description, new_price, old_price, _id } = product;
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
        <p>{description || "Descirption"} </p>
        <div className="sizes">
          <h3>Select Size</h3>
          <Radio style={{ display: "flex", flexWrap: "wrap" }}>
            <RedioButtons
              name={"sizes"}
              value={"S"}
              setRadioButton={setRadioButton}
              defaultChecked={true}
            />
            <RedioButtons
              name={"sizes"}
              value={"M"}
              setRadioButton={setRadioButton}
            />
            <RedioButtons
              name={"sizes"}
              value={"L"}
              setRadioButton={setRadioButton}
            />
            <RedioButtons
              name={"sizes"}
              value={"XL"}
              setRadioButton={setRadioButton}
            />
            <RedioButtons
              name={"sizes"}
              value={"XXL"}
              setRadioButton={setRadioButton}
            />
          </Radio>
        </div>
        <button className="add-to-cart" onClick={() => addToCartFun(_id)}>
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

export const Radio = styled.div`
  input[type="radio"] {
    appearance: none;
    display: none;
  }

  label {
    min-width: 40px;
    min-height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    overflow: hidden;
    transition: linear 0.3s;
    cursor: pointer;
    border: 1px solid #999;
    margin-right: 10px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      margin-top: 5px;
    }
  }

  input[type="radio"]:checked + label {
    background-color: orange;
    color: white;
    transition: 0.3s;
  }
  input[type="radio"] + label {
    /* @media screen and (max-width: 767px) {
      width: 50%;
    } */
  }
`;
