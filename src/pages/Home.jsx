import React from "react";
import {
  Navbar,
  Header,
  HowItWorks,
  Problems,
  LatestCollection,
  FAQ,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-10">
      <Navbar />
      <Header />
      <HowItWorks />
      <Problems />
      <LatestCollection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
