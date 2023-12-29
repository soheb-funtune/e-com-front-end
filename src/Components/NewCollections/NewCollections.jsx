import React, { useEffect, useState } from "react";
import "./new-collection.css";
import newCollections from "../Assets/new_collections";
import Item from "../Items/Item";
import { useSelector } from "react-redux";
import _ from "lodash";

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState(newCollections);
  const { allItems } = useSelector((state) => state?.home);

  useEffect(() => {
    if (allItems && allItems.length > 0) {
      console.log("allItems");
      let reversedItems = [...allItems].reverse(); // Create a copy before reversing
      let res = _.chunk(reversedItems, 8)?.[0];
      setNewCollection(res?.length > 0 ? res : allItems);
    }
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
