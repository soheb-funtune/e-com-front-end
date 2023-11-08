import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ name, image, new_price, id, old_price, width }) => {
  return (
    <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
      <div className={`item ${width ? "item-width" : ""}`}>
        <img src={image} alt={name} />
        <p>{name}</p>
        <div className="item-prices">
          <div className="item-new-price">${new_price}</div>
          <div className="item-old-price">${old_price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
