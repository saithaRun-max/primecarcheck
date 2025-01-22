import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import CarInspection from "./CarInspection";
import Maintence from "./Maintence";
import ServicesOffer from "./ServicesOffer";
import ServiceBrands from "./ServiceBrands";
import BenfitsOfService from "./BenfitsOfService";

const Body = () => {
  return (
    <>
      <div className="h-screen w-screen box-border ">
        <Navbar />
        <Home />
        <CarInspection />
        <Maintence />
        <ServicesOffer />
        <ServiceBrands />
        <BenfitsOfService />
        <Footer />
      </div>
    </>
  );
};

export default Body;
