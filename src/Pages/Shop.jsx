import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offres from "../Components/Offers/Offres";
import NewCollections from "../Components/NewCollections/NewCollections";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offres />
      <NewCollections />
    </div>
  );
};

export default Shop;
