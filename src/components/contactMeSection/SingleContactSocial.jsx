import React from "react";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div
      className="text-2xl h-12 w-12 border border-cyan-300 text-cyan-300 rounded-full p-3 flex items-center justify-center 
    transition duration-300 hover:shadow-[0_0_15px_4px] hover:shadow-cyan-300"
    >
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
