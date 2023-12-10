import React, { useEffect, useState } from "react";
import "./new-collection.css";
import newCollections from "../Assets/new_collections";
import Item from "../Items/Item";
import axios from "axios";

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState(newCollections);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:4000/getItems")
        .then((res) => res.data)
        .then((res) => {
          console.log({ res, newCollection });
          setNewCollection([...res.reverse(), ...newCollection]);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);
  return (
    <div id="newcollection" className="new-collections">
      <h1>
        NEW COLLECTIONS <hr />
      </h1>

      <div className="collections">
        {newCollection?.map((item, i) => (
          <Item
            width={true}
            key={i}
            id={item.id || item?._id}
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

export default NewCollections;
