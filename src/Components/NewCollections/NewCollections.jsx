import React from "react";
import "./new-collection.css";
import newCollection from "../Assets/new_collections";
import Item from "../Items/Item";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>
        NEW COLLECTIONS <hr />
      </h1>

      <div className="collections">
        {newCollection?.map((item, i) => (
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

export default NewCollections;
