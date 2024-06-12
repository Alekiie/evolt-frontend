import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
