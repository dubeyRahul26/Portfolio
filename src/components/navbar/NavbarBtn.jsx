import { BsArrowDownRight } from "react-icons/bs";
import React from "react";

const NavbarBtn = () => {
  return (
    <button
      className="px-4 py-2 rounded-full text-xs font-bold text-white 
    bg-gradient-to-br from-[#00C2FF] to-[#2978B5] 
    border border-cyan-400 shadow-lg shadow-cyan-500/30 
    flex items-center gap-2 transition-all duration-300 
    hover:scale-105 hover:shadow-cyan-500/50"
      onClick={() =>
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" })
      }
    >
      Hire Me
      <div>
        <BsArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
