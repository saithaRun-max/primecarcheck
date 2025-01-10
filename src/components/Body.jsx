import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import CarInspection from "./CarInspection";
import Maintence from "./Maintence";
import ServicesOffer from "./ServicesOffer";

const Body = () => {
  return (
    <div className="h-screen w-screen box-border">
      <Navbar />
      <Home />
      <CarInspection />
      <Maintence />
      <ServicesOffer />
      <Footer />
    </div>
  );
};

export default Body;
