import React from "react";
import "./popular.css";
import productData from "../Assets/data";
import Item from "../Items/Item";
const Popular = () => {
  return (
    <div className="popular">
      <h2>
        POPULAR IN WOMEN <hr />
      </h2>
      <div className="popular-items">
        {productData?.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item?.name}
            image={item?.image}
            new_price={item?.new_price}
            old_price={item?.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
