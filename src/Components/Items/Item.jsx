import React from "react";
import "./Item.css";

const Item = ({ name, image, new_price, old_price }) => {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-new-price">{new_price}</div>
        <div className="item-old-price">{old_price}</div>
      </div>
    </div>
  );
};

export default Item;
