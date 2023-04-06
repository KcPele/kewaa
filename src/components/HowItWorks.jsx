import React from "react";
import { structureImg } from "../assets";

const HowItWorks = () => {
  return (
    <section className="">
      <h2 className="text-white text-[40px]">How does it work?</h2>
      <div className="mt-[44px] flex flex-1 gap-6 flex-col justify-between lg:flex-row">
        <p className="text-[#B8B9B9] max-w-[782px]">
          Kewaa enables fractional investment of rental real estate properties
          by utilizing the blockchain. Using an implementation of re-fungible
          token standard. every property is tokenized and represented as an NFT
          which is extended into a specific amount of ERC 20 tokens. the ERC20
          tokens are an extension of each NFT and represent fractional
          ownership. each investor earn dividend from the rent paid per
          property. You can now imagine the possibilities.
        </p>
        <div className="max-w-[611px] md:min-w-[450px] flex-1">
          <img src={structureImg} className="w-full" alt="home structure" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
