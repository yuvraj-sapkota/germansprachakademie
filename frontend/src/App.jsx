import React from "react";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./features/aboutUs/AboutUs";
import HeroSection from "./features/heroSection/HeroSection";
import OurCourses from "./features/ourCourses/OurCourses";
import ChooseUs from "./features/chooseUs/ChooseUs";
import ContactUs from "./features/contactUs/ContactUs";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />

      <AboutUs />
      <OurCourses />
      <ChooseUs />
      <ContactUs />
      <Footer />

      {/* floating whstaspp button  */}
      <WhatsAppFloat />
    </>
  );
};

export default App;
