import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ImageHeader from "./components/ImageHeader/ImageHeader";
import OurWork from "./components/OurWork/OurWork";
import FAQ from "./components/FAQ/FAQ";
import ChooseService from "./components/ChooseService/ChooseService";
import Reviews from "./components/Reviews/Reviews";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import CallToClean from "./components/CallToClean/CallToClean";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ImageHeader />
      <OurWork />
      <FAQ />
      <ChooseService />
      <Reviews />
      <QuickLinks />
      <div className="callclean">
        <CallToClean />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
