import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const FaqItem = ({ question, answer, index, activeIndex, setActiveIndex }) => {
  const isOpen = index === activeIndex;

  const toggleAccordion = () => {
    setActiveIndex(isOpen ? null : index);
  };

  return (
    <div className="border-2 border-faq rounded-lg mb-4">
      <div
        className="bg-faq text-white py-4 px-6 flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
      </div>
      {isOpen && (
        <div className=" py-4 px-6">
          <p className=" text-white text-base">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
