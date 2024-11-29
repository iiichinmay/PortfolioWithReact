import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-yellow-300 text-black py-5 mt-1" id="service">
      <h1 className="text-center text-2xl sm:text-4xl font-Cinzel font-bold">
        <u>_</u>
        <u> Services <u>_</u></u>
      </h1>
      <section className="flex flex-wrap gap-10 justify-center items-center h-full mt-10 px-6">
        {/* Left Side - Images */}
        <div className="grid grid-cols-2 sm:gap-6 lg:gap-10 w-full sm:w-3/4 lg:w-1/2 ">
  <img
    src="./images/dev.png"
    alt="development"
    className="services-img h-24 w-full max-w-xs h-32 sm:h-40  lg:h-48 mx-auto object-cover"
  />
  <img
    src="./images/design.jpg"
    alt="design"
    className="services-img w-full max-w-xs h-32 sm:h-40 lg:h-48 mx-auto object-cover ml-8"
  />
  <img
    src="./images/edit.jpg"
    alt="editing"
    className="services-img w-full max-w-xs h-32 sm:h-40 lg:h-48 mx-auto object-cover"
  />
  <img
    src="./images/content.jpg"
    alt="content"
    className="services-img w-full max-w-xs h-32 sm:h-40 lg:h-48 mx-auto object-cover ml-8"
  />
</div>


        {/* Right Side - Services List */}
        <div className="w-full sm:w-3/4 lg:w-1/3 mt-10 sm:mt-0">
          <ul className="text-lg sm:text-2xl lg:text-4xl font-SGummy leading-relaxed space-y-5">
            <li className="style-services">* Web Development</li>
            <li className="style-services">* Web Designing</li>
            <li className="style-services">* Video Editing</li>
            <li className="style-services">* Content Writing</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;
