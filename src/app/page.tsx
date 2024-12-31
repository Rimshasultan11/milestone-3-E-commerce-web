import React from "react";
import Hero from "./components/Home/Hero";
import Products from "./components/Home/Products";
import TopProduct from "./components/Home/TopProduct";
import Banner from "./components/Home/Banner";
import Subscribe from "./components/Home/Subscribe";
import Newpro from "./components/Home/Newpro";


export default function Home() {
  return (
    <div>
    <Hero/>
    <Products/>
    <TopProduct/>
    <Banner/>
    <Subscribe/>
    <Newpro/>
    </div>
  
  );
}
