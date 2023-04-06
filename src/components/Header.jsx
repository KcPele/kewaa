import React from "react";
import Button from "./Button";
import { headerImg, testImg } from "../assets";
const Header = () => {
  return (
    <div className="mt-[61px] flex flex-col gap-5 md:flex-row justify-between items-center text-white ">
      <div className="flex-1">
        <h1 className="text-[44px]  sm:leading-[50px] lg:leading-[99px] lg:text-[82px]">
          <span className="text-[#979797] block ">Don't Just pay rent</span>{" "}
          Earn Dividendend<span className="text-[32px] text-[#9747FF]">s</span>
        </h1>
        <p className="mt-5 md:text-[28px]">
          Kewaa Provides a fractional investment platform for investors in
          real-estate on the blockchain.
        </p>
        <div className="mt-12 p-0">
          <Button text="Go to Marketplace" bg="[#9747FF]" />
        </div>
      </div>
      <div className="flex-1">
        <div className="max-w-[600px] mx-auto  w-full max-h-[587px]">
          <img className=" rounded-full" src={headerImg} alt="header" />
        </div>
      </div>
    </div>
  );
};

export default Header;
