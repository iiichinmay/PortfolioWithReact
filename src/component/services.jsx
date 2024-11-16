import React from "react";

const services = () => {
  return (
    <div className="min-h-full h-100vh bg-yellow-300 text-black mt-2" id="service">
      <h1 className="text-center text-4xl font-Cinzel font-bold "><u>_</u><u> Services <u>_</u></u></h1>
      <section className="flex gap-10 justify-between  h-full">
        <left className=" m-5 p-5  grid grid-cols-2 gap-4 ml-[8rem]">
          <img
            src="./images/dev.png"
            alt="develope"
            class="w-52 h-52 object-cover border border-black rounded-full transform transition duration-500 hover:rotate-[-360deg] cursor-grab shadow-2xl shadow-black"
          />
          <img
            src="./images/design.jpg"
            alt="design"
            class="w-52 h-52 object-cover border border-black rounded-full transform transition duration-500 hover:rotate-[360deg] cursor-grab shadow-2xl shadow-black"
          />

          <img
            src="./images/edit.jpg"
            alt="editing"
            class="w-52 h-52 object-cover border border-black rounded-full transform transition duration-500 hover:rotate-[-360deg] cursor-grab shadow-2xl shadow-black"
          />
          <img
            src="./images/content.jpg"
            alt="content"
            class="w-52 h-52 object-cover border border-black rounded-full transform transition duration-500 hover:rotate-[360deg] cursor-grab shadow-2xl shadow-black"
          />
        </left>
        <right className="mr-[8rem] m-5 p-5 mt-[7rem]">
          <ul className="text-4xl font-SGummy -mt-16 leading-relaxed space-y-5 p-2">
            <li className="hover:text-blue-600 cursor-not-allowed transform hover:scale-105 transition duration-200 p-2 rounded-full shadow-2xl shadow-black "style={{ userSelect: "none" }}>* Web Development </li>
            <li className="hover:text-blue-600 cursor-not-allowed transform hover:scale-105 transition duration-200 p-2 rounded-full shadow-2xl shadow-black "style={{ userSelect: "none" }}>* Web Designing </li>
            <li className="hover:text-blue-600 cursor-not-allowed transform hover:scale-105 transition duration-200 p-2 rounded-full shadow-2xl shadow-black "style={{ userSelect: "none" }}>* Video Editing </li>
            <li className="hover:text-blue-600 cursor-not-allowed transform hover:scale-105 transition duration-200 p-2 rounded-full shadow-2xl shadow-black "style={{ userSelect: "none" }}>* Content Writting </li>
          </ul>
        </right>
      </section>
    </div>
  );
};

export default services;