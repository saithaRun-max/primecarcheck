import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

const Body = () => {
  return (
    <div className="h-screen w-screen box-border">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Body;
