import React from "react";
import FaqItem from "./FaqItem";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const faqItems = [
    {
      question: "Why should I join Kewaa?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that makes it easy to create custom designs without writing any CSS.",
    },
    {
      question: "How can I invest on Kewaa?",
      answer:
        "You can install Tailwind CSS using npm or yarn. First, create a new project and navigate to the project directory in your terminal. Then, run the command `npm install tailwindcss` or `yarn add tailwindcss`.",
    },
    {
      question: "Is there a limit to the amount I can invest on Kewaa?",
      answer:
        "Tailwind CSS supports all modern browsers, including Chrome, Firefox, Safari, and Edge.",
    },
  ];

  return (
    <section className="mt-[185px]">
      <h3 className="text-white font-[500px] text-[40px]">FAQ</h3>
      <div className="mt-[80px]">
        {faqItems.map((faq, index) => (
          <FaqItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
