// import { BsArrowDownRight } from "react-icons/bs";
// import React from "react";

// const NavbarBtn = () => {
//   return (
//     <button
//       className="px-4 py-2 rounded-full text-xs font-bold text-white
//     bg-gradient-to-br from-[#00C2FF] to-[#2978B5]
//     border border-cyan-400 shadow-lg shadow-cyan-500/30
//     flex items-center gap-2 transition-all duration-300
//     hover:scale-105 hover:shadow-cyan-500/50"
//       onClick={() =>
//         document
//           .getElementById("contact")
//           .scrollIntoView({ behavior: "smooth" })
//       }
//     >
//       Hire Me
//       <div>
//         <BsArrowDownRight />
//       </div>
//     </button>
//   );
// };

// export default NavbarBtn;
import { BsArrowDownRight } from "react-icons/bs";
import React from "react";

const NavbarBtn = () => (
  <button
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
    className="flex w-full sm:w-auto items-center justify-center sm:justify-start gap-2
               rounded-full px-6 py-3 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold
               text-white bg-gradient-to-br from-[#00C2FF] to-[#2978B5]
               border border-cyan-400 shadow-lg shadow-cyan-500/30
               transition-transform duration-200 hover:scale-105
               focus:outline-none focus:ring-2 focus:ring-cyan-300"
  >
    <span className="ml-4">Hire&nbsp;Me</span>
    <BsArrowDownRight className="text-base" />
  </button>
);

export default NavbarBtn;
