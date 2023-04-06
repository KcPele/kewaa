import React from "react";

const Button = ({ text, bg }) => {
  return (
    <button
      className={`bg-[#9747FF] inline-flex items-center px-[49px] py-[18px] border border-purple-500 text-base font-medium rounded-md `}
      style={{ borderColor: "#9747FF" }}
    >
      {text}
    </button>
  );
};

export default Button;
