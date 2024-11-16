import React from "react";

const projects = () => {
  return (
    <div className="bg-black text-yellow-300 h-screen  " id="project">
      <h1 className="text-center text-4xl font-Cinzel font-bold mt-2">
        <u>_</u>
        <u>
          Projects <u>_</u>
        </u>
      </h1>

      <div className="flex justify-around m-40 mt-32 font-bold text-yellow-300">
        <sec
          className="projects  py-3 px-3 "
          style={{ boxShadow: "0 4px 10px rgba(255, 255, 255, 0.5)" }}
        >
          <img
            src="./images/projects.png"
            alt="img"
            className="w-fit h-52 cursor-pointer"
          />
          <h2 className="text-2xl ">Projects</h2>
        </sec>

        <line className="w-0.5 h-64 mt-1 bg-yellow-300"></line>

        <sec
          className="projects  py-3 px-3"
          style={{ boxShadow: "0 4px 10px rgba(255, 255, 255, 0.5)" }}
        >
          <img
            onClick={() => (window.location.href = "https://www.youtube.com/")}
            src="./images/tools.png"
            alt="img"
            className="h-52 cursor-pointer"
          />
          <h2 className="text-2xl ">ToolKit</h2>
        </sec>

        <line className="w-0.5 h-64 mt-1 bg-yellow-300"></line>

        <sec
          className="projects  py-3 px-3 shadow-lg shadow-white"
          style={{ boxShadow: "0 4px 10px rgba(255, 255, 255, 0.5)" }}
        >
          <img
            src="./images/games.png"
            alt="img"
            className="h-52 cursor-pointer"
          />
          <h2 className="text-2xl ">Games</h2>
        </sec>
      </div>
    </div>
  );
};

export default projects;
