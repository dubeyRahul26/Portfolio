import React from "react";

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="-translate-y-10  hover:-translate-y-20 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative ">
        <div className="bg-white text-sky-400 h-[100px] w-[100px]  flex items-center justify-center rounded-full hover:text-gray-400 hover:scale-105 transform transition-all duration-500 text-6xl boder-4 border-cyan-300">
          {imgSvg}
        </div>
        <p className="text-white font-bold ">{text}</p>
      </div>
      <div className="w-[100px] h-[250px] bg-cyan-300 absolute top-[50px] -z-10"></div>
    </div>
  );
};

export default SingleSkill;
