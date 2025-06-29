"use client";
import HeroSection from "@/components/Home/HeroSection";
import MIniSlider from "@/components/Home/MIniSlider";
import React from "react";
import LifeStyleSection from "./LifeStyleSection";

import AppointmentSection from "./AppointmentSection";
import ServicesSection from "./ServicesSection";
import VideoSection from "./VideoSection";
import HistorySection from "./HistorySection";
import AboutSection from "./AboutSection";
import AppointmentTwoSection from "./AppointmentTwoSection";
import ContactSection from "./ContactSection";
import MapSection from "./MapSection";

const Homepage = () => {
  return (
    <div className="py-2 lg:mx-0 mx-4 space-y-6">
      <MIniSlider />
      <HeroSection />
      <LifeStyleSection />
      <AppointmentSection />
      <ServicesSection />
      <VideoSection />
      <HistorySection />
      <AboutSection />
      <AppointmentTwoSection />
      <ContactSection />
      <MapSection />
    </div>
  );
};

export default Homepage;
