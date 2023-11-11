import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Item from "../Items/Item";
const RelatedProducts = ({ restProducts }) => {
  return (
    <div className="related-product">
      <h1>
        Related Products <hr />
      </h1>
      <div className="items-container">
        {restProducts?.map((item, i) => (
          <Item
            width={true}
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

export default RelatedProducts;
