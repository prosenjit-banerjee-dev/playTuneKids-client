import React from "react";

import Banner from "./Banner";
import Cards from "./Cards";
import ShopCategory from "./ShopCategory";
import GallerySection from "./GallerySection";
import GalleryCard from "./GalleryCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GallerySection></GallerySection>
      <Cards></Cards>
      <ShopCategory></ShopCategory>
      <GalleryCard></GalleryCard>
    </div>
  );
};

export default Home;
