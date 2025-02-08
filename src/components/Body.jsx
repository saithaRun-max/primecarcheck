import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import CarInspection from "./CarInspection";
import Maintence from "./Maintence";
import ServicesOffer from "./ServicesOffer";
import ServiceBrands from "./ServiceBrands";
import BenfitsOfService from "./BenfitsOfService";
import WhyChoose from "./WhyChoose";
import NoteBottom from "./NoteBottom";

const Body = () => {
  return (
    <>
      <div className="h-screen w-screen box-border m-0 p-0 ">
        <Navbar />
        <Home />
        <CarInspection />
        <Maintence />
        <ServicesOffer />
        <ServiceBrands />
        <BenfitsOfService />
        <WhyChoose />
        <NoteBottom />
        <Footer />
      </div>
    </>
  );
};

export default Body;
