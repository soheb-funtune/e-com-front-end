import React, { useEffect, useState } from "react";
import "./popular.css";
import productData from "../Assets/data";
import Item from "../Items/Item";
import axios from "axios";
import { useGetContext } from "../../Context/ShopContext/ShopContext";
const Popular = () => {
  const [popularData, setPopularData] = useState(productData);
  const { allItems } = useGetContext();

  useEffect(() => {
    const res = allItems?.filter((item) => item?.category == "women");
    res && setPopularData(res);
  }, [allItems]);
  console.log({ popularData });
  return (
    <div className="popular">
      <h2>
        POPULAR IN WOMEN <hr />
      </h2>
      <div className="popular-items">
        {popularData?.map((item, i) => (
          <Item
            key={i}
            id={item?.id || item?._id}
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
