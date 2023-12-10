import React, { useEffect, useState } from "react";
import "./popular.css";
import productData from "../Assets/data";
import Item from "../Items/Item";
import axios from "axios";
const Popular = () => {
  const [popularData, setPopularData] = useState(productData);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:4000/getItems?sort=women")
        .then((res) => res.data)
        .then((res) => {
          console.log({ res, popularData });
          setPopularData([...res, ...popularData]);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);
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
