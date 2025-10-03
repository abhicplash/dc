import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Hero from "../components/Hero";
import Features from "../components/Features";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
