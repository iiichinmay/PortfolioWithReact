import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const datas = [
    {
      question: "Q : How did I create this portfolio ?",
      answer: `I developed my portfolio using a combination of React.js, Tailwind CSS, JavaScript logic, CSS, and Vercel. Each of these technologies played a crucial role in enhancing the look, feel, and functionality and helped me to share it with friends for more suggestions of the site.`,
    },
    {
      question: "Q : What Can React Do ?",
      answer:
        "React is important because it enables efficient, dynamic UIs with its component-based structure and Virtual DOM. It improves performance by updating only necessary parts of the page and promotes code reusability, making development scalable and maintainable.",
    },
    {
      question: "Q : What Can Tailwind Do ?",
      answer:
        "Tailwind is important because it speeds up styling with utility-first classes, making the design process efficient. It ensures a clean, consistent, and responsive layout while reducing the need for custom CSS, streamlining development and maintenance.",
    },
    {
      question: "Q : What Can JavaScript Do ?",
      answer:
        "JavaScript logic is crucial for adding interactivity and functionality, like handling user inputs and dynamic content updates. It powers essential features, making the website responsive and engaging for users.",
    },
    {
      question: "Q : What can logic do ?",
      answer:
        "Logics in coding control behavior, repeat tasks, handle conditions, and optimize performance. They create interactive features, ensure data accuracy, and automate repetitive processes. Logics help in decision-making, improving user experience, and enhancing system functionality. They also enable problem-solving capabilities, making code more adaptable, efficient, and smart.",
    },
    {
      question: "Q : Why Does Component Important?",
      answer:
        "Components in React enable reusability and modularity by breaking UIs into smaller parts. They separate UI, logic, and state, making code easier to manage.Components allow efficient rendering by updating only changed parts. This improves maintainability, scalability, and performance.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen py-5 mt-1" id="faq">
      <div>
        <h1 className="text-center text-yellow-300 text-2xl sm:text-4xl font-Cinzel mt-4 font-bold">
          <u>FAQ</u>
        </h1>

        <div className=" p-5 flex flex-col items-center justify-center mt-10">
          {datas.map((data, index) => (
            <div
              key={index}
              className="text-sm sm:text-lg flex flex-col items-center mb-4 border border-white w-full sm:w-11/12 md:w-3/4 xl:w-2/3"
            >
              <h1
                className="text-yellow-300 mb-2 font-SGummy cursor-pointer text-center px-2"
                onClick={() => toggleAccordion(index)}
              >
                {data.question}
              </h1>
              {activeIndex === index && (
                <p className="font-SGummy px-4 py-4 text-center text-xs sm:text-base">
                  {data.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;
