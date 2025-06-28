import HeroSection from "@/components/Home/HeroSection";
import MIniSlider from "@/components/Home/MIniSlider";
import React from "react";
import LifeStyleSection from "./LifeStyleSection";

const Homepage = () => {
  return (
    <div className="py-2 lg:mx-0 mx-4 space-y-6">
      <MIniSlider />
      <HeroSection />
      <LifeStyleSection />
    </div>
  );
};

export default Homepage;
