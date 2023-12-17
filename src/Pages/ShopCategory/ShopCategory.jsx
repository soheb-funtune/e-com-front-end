import React, { useState, useEffect } from "react";
import "./ShopCategory.css";
import dropdown_icon from "../../Components/Assets/dropdown_icon.png";
import { useGetContext } from "../../Context/ShopContext/ShopContext";
import Item from "../../Components/Items/Item";
import { Link } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

const ShopCategory = ({ banner, category }) => {
  const [sortBy, setSortBy] = useState("");
  const { AllProducts } = useGetContext();
  const [categoryArray, setCategoryArray] = useState([]);
  const [remainingItems, setRemainingItems] = useState([]);

  useEffect(() => {
    setCategoryArray([]);

    const fetchData = async () => {
      await axios
        .get(`http://localhost:4000/getItems?sort=${category}`)
        .then((res) => res.data)
        .then((res) => {
          console.log({ res });
          const chunks = _.chunk(
            sortBy
              ? _.sortBy(res, [
                  function (o) {
                    return o?.[sortBy];
                  },
                ])
              : Array.from(new Set([...res])),
            8
          );

          setCategoryArray(chunks[0]);
          setRemainingItems(chunks[1]);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, [category]);
  useEffect(() => {
    if (sortBy) {
      const res = _.sortBy(categoryArray, [
        function (o) {
          return o?.[sortBy];
        },
      ]);
      setCategoryArray(res);
      console.log({ res });
    }
  }, [sortBy]);
  console.log({ sortBy, categoryArray });
  return (
    <div className="shop-category">
      <img src={banner} alt={banner} />
      <div className="sort-and-count">
        <div className="shpcategory-indexsort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="shopcategory-sort"
        >
          Sort by <option value={""}>Sort By</option>
          <option value={"name"}>By Name</option>
          <option value={"new_price"}>By Price</option>
        </select>
      </div>
      <div className="shopcategory-products">
        {categoryArray?.map((data, i) => {
          if (data?.category === category)
            return (
              <Item
                width={true}
                key={i}
                id={data.id || data?._id}
                name={data?.name}
                image={data?.image}
                new_price={data?.new_price}
                old_price={data?.old_price}
              />
            );
        })}
      </div>
      {remainingItems?.length > 0 && (
        <button
          className="shopcategory-loadmore"
          onClick={() => {
            setCategoryArray([...categoryArray, ...remainingItems]);
            setRemainingItems([]);
          }}
        >
          Explore More
        </button>
      )}
    </div>
  );
};

export default ShopCategory;
