import React from "react";
import { FaDollarSign } from "react-icons/fa";
import ProblemCard from "./ProblemCard";

const Problems = () => {
  const data = [
    {
      title: "Inclusivity",
      icon: FaDollarSign,
      iconColor: "#BBEDF8",
      description:
        "We believe the blockchain can transform real-estate in Africa. Currently real estate is relatively illiquid as one can't readily convert it to cash or other assets. Kewaa can solve this!",
    },
    {
      title: "Secondary Market",
      icon: FaDollarSign,
      iconColor: "##D6BBF8",
      description:
        "Kewaa will provide secondary markets where real-estate can be exchanged. A property market!",
    },
    {
      title: "Low Capital Entrance",
      icon: FaDollarSign,
      iconColor: "#CEF8BB",
      description:
        "Real estate investment is capital intensive and small player cannot take advantage of larger deals ... Kewaa give the little guy a chance.",
    },
  ];
  return (
    <section className="mt-[108px]">
      <h3 className="text-white font-[500px] text-[40px]">Problems we solve</h3>
      <div className="mt-[74px] flex flex-wrap lg:flex-nowrap">
        {data.map((item, index) => (
          <ProblemCard
            title={item.title}
            Icon={item.icon}
            iconBgColor={item.iconColor}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Problems;
