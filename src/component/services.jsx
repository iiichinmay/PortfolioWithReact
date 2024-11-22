import React from "react";

const services = () => {
  return (
    <div className="min-h-full bg-yellow-300 text-black mt-2" id="service">
      <h1 className="text-center text-4xl font-Cinzel font-bold "><u>_</u><u> Services <u>_</u></u></h1>
      <section className="flex gap-10 justify-between  h-full">
        <left className=" m-5 p-5  grid grid-cols-2 gap-4 ml-[8rem]">
          <img
            src="./images/dev.png"
            alt="develope"
            class="services-img"
          />
          <img
            src="./images/design.jpg"
            alt="design"
            class="services-img"
          />

          <img
            src="./images/edit.jpg"
            alt="editing"
            class="services-img"
          />
          <img
            src="./images/content.jpg"
            alt="content"
            class="services-img"
          />
        </left>
        <right className="mr-[8rem] m-5 p-5 mt-[7rem]">
          <ul className="text-4xl font-SGummy -mt-16 leading-relaxed space-y-5 p-2">
            <li className="style-services">* Web Development </li>
            <li className="style-services">* Web Designing </li>
            <li className="style-services">* Video Editing </li>
            <li className="style-services">* Content Writting </li>
          </ul>
        </right>
      </section>
    </div>
  );
};

export default services;