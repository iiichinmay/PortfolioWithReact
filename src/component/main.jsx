import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Main = () => {
  const [text] = useTypewriter({
    words: [
      "FrontEnd Developer",
      "Web Designer",
      "Video Editor",
      "Content Writer",
    ],
    loop: true,
    typeSpeed: 25,
    deleteSpeed: 25,
  });

  return (
    <div className="bg-black min-h-screen text-yellow-300 py-8" id="about">
      <h1 className="text-3xl sm:text-5xl font-Cinzel text-center py-5">
        Web Developer
      </h1>

      <section className="flex flex-wrap items-center justify-around w-full px-4">
        {/* Left Section */}
        <div className="w-full sm:w-2/3 lg:w-1/2 p-4 leading-snug mt-5">
          <h1 className="text-2xl sm:text-4xl mb-2">Hello, I'm Chinmay</h1>

          <h1 className="text-lg sm:text-xl font-SGummy">
            I'm a <span className="text-white text-xl sm:text-2xl">{text}</span>
            <span style={{ color: "red" }}>
              <Cursor />
            </span>
          </h1>
          <p className="text-sm sm:text-lg font-SGummy mt-6">
            A passionate web developer skilled in creating dynamic and
            responsive websites using HTML, CSS, JavaScript, React, and Tailwind
            CSS. I love turning creative ideas into functional digital
            experiences that are both visually appealing and user-friendly. My
            focus is on clean, efficient code and delivering high-quality
            solutions that enhance user engagement and meet business goals.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/3 lg:w-1/4 flex justify-center mt-6 sm:mt-0">
  <div className="h-40 sm:h-64 md:h-80 lg:h-96 xl:h-[24rem] aspect-square rounded-full overflow-hidden border border-black">
    <img
      src="./images/meee.jpg"
      alt="propic"
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </section>

      {/* Arrow Section */}
      <div className="flex justify-center mt-10 sm:mt-16">
        <h1 className="text-white text-2xl">
          \/
          <br />
          \/
          <br />
          \/
        </h1>
      </div>
    </div>
  );
};

export default Main;
