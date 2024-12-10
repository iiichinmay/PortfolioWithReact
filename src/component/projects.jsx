import React from "react";

const Projects = () => {
  return (
    <div className="bg-black text-yellow-300 min-h-screen py-5 mt-1" id="project">
      {/* Header */}
      <h1 className="text-center text-4xl font-Cinzel font-bold mt-2">
        <u>_</u>
        <u>
          Projects <u>_</u>
        </u>
      </h1>
      <p className="text-[#79ffd2] flex justify-center mx-auto w-fit shadow-md shadow-white bg-[#50505000] rounded-lg p-2 mt-4">Projects are coming soon...</p>

      {/* Project Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-10 space-y-10 sm:space-y-0 mt-16 px-5">
        {/* Project 1 */}
        <div
          className="flex flex-col items-center py-5 px-5 shadow-lg shadow-white w-full sm:w-1/3"
          style={{ boxShadow: "0 4px 10px rgba(255, 255, 255, 0.5)" }}
        >
          <img
            src="./images/projects.png"
            alt="Projects"
            className="w-fit max-w-[300px] h-52 object-cover cursor-pointer"
          />
          <h2 className="text-2xl mt-4">Projects</h2>
        </div>

        {/* Vertical Line for Larger Screens */}
        <div className="hidden sm:block w-0.5 h-64 bg-yellow-300"></div>

        {/* Project 2 */}
        <div
          className="flex flex-col items-center py-5 px-5 shadow-lg shadow-white w-full sm:w-1/3"
          style={{ boxShadow: "0 4px 10px rgba(255, 255, 255, 0.5)" }}
        >
          <img
            onClick={() => (window.location.href = "")}
            src="./images/tools.png"
            alt="ToolKit"
            className="w-fit max-w-[300px] h-52 object-cover cursor-pointer"
          />
          <h2 className="text-2xl mt-4">ToolKit</h2>
        </div>

        {/* Vertical Line for Larger Screens */}
        <div className="hidden sm:block w-0.5 h-64 bg-yellow-300"></div>

        {/* Project 3 */}
        <div
          className="flex flex-col items-center py-5 px-5 shadow-lg shadow-white w-full sm:w-1/3"
          style={{ boxShadow: "0 4px 10px rgba(255, 255, 255, 0.5)" }}
        >
          <img
            src="./images/games.png"
            alt="Games"
            className="w-fit max-w-[300px] h-52 object-cover cursor-pointer"
          />
          <h2 className="text-2xl mt-4">Games</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
