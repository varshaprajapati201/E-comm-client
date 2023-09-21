import React from "react";
import { Hero } from "../../components/Hero/Hero";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProducts";
import { ItemDesc } from "../../components/ItemDesc/ItemDesc";

export const Home = () => {
    
    return (
      <div className="home">
       <Hero/>
        <FeaturedProducts type="Bestselling"/>
        <FeaturedProducts type="Trending"/>
        <ItemDesc />
      </div>
    );
  }