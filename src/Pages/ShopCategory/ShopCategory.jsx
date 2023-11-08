import React from "react";
import "./ShopCategory.css";
import dropdown_icon from "../../Components/Assets/dropdown_icon.png";
import { useGetContext } from "../../Context/ShopContext/ShopContext";
import Item from "../../Components/Items/Item";
import { Link } from "react-router-dom";

const ShopCategory = ({ banner, category }) => {
  const { AllProducts } = useGetContext();
  console.log({ AllProducts });

  return (
    <div className="shop-category">
      <img src={banner} alt={banner} />
      <div className="sort-and-count">
        <div className="shpcategory-indexsort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
        </div>
        <div className="shopcategory-sort">
          Sort by{" "}
          <img
            className="drop-icon"
            src={dropdown_icon}
            style={{ width: "13px", height: "10px" }}
            alt="dropdown_icon"
          />
        </div>
      </div>
      <div className="shopcategory-products">
        {AllProducts?.map((data, i) => {
          if (category === data?.category) {
            return (
              <Item
                width={true}
                key={i}
                id={data.id}
                name={data?.name}
                image={data?.image}
                new_price={data?.new_price}
                old_price={data?.old_price}
              />
            );
          }
        })}
      </div>
      <button className="shopcategory-loadmore">Explore More</button>
    </div>
  );
};

export default ShopCategory;
