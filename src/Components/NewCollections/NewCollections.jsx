import React, { useEffect, useState } from "react";
import "./new-collection.css";
import newCollections from "../Assets/new_collections";
import Item from "../Items/Item";
import axios from "axios";
import { useGetContext } from "../../Context/ShopContext/ShopContext";

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState(newCollections);
  const { setAllItems, allItems } = useGetContext();

  useEffect(() => {
    setNewCollection([...allItems.reverse()]);
  }, [allItems]);
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
