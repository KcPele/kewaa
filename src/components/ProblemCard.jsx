import React from "react";

const ProblemCard = ({ title, Icon, iconBgColor, description }) => {
  return (
    <div className="w-[541px] px-[50px] py-[70px]">
      <div className="flex gap-2 items-center">
        <h4 className="text-[#979797] text-[32px] font-[500px]">{title}</h4>
        <div
          className="bg-[#9747FF] rounded-[10px] w-[47px] h-[48px] flex items-center justify-center"
          style={{ backgroundColor: iconBgColor }}
        >
          <Icon className="text-black" />
        </div>
      </div>
      <div className="mt-[19px]">
        <p className="text-[#B8B9B9]">{description}</p>
      </div>
    </div>
  );
};

export default ProblemCard;
