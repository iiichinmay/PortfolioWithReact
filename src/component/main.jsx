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
    <div
      className="bg-black min-h-screen text-yellow-300  p-0 "
      id="about"
    >
      <h1 className="text-5xl font-Cinzel text-center py-5  ">Web Developer</h1>

      <section className="min-h-screen w-100vw flex justify-around">
        <leftpart className=" w-1/2  p-4 leading-snug mt-5 ">
          <h1 className="text-4xl mb-2">Hello, I'm Chinmay</h1>

          <h1 className="text-xl font-SGummy">
            I'm a <span className="text-white">{text}</span>
            <span style={{ color: "red" }}>
              <Cursor />
            </span>
          </h1>
          <p className="text-xl font-SGummy mt-8">
            A passionate web developer skilled in creating dynamic and
            responsive websites using HTML, CSS, JavaScript, React, and Tailwind
            CSS. I love turning creative ideas into functional digital
            experiences that are both visually appealing and user-friendly. My
            focus is on clean, efficient code and delivering high-quality
            solutions that enhance user engagement and meet business goals.
          </p>
        </leftpart>

        <rightpart>
          <img
            src="./images/meee.jpg"
            alt="propic"
            className="h-40 sm:h-64 md:h-80 lg:h-96 xl:h-[24rem] rounded-full mt-3  border border-black"
          />
        </rightpart>
      </section>
      <h1 className=" mt-[-14rem] text-white ">
        \/
        <br />
        \/
        <br />
        \/{" "}
      </h1>
    </div>
  );
};

export default Main;
