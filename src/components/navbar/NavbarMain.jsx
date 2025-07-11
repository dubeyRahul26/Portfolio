// import { GiHamburgerMenu } from "react-icons/gi";
// import React from "react";
// import NavbarLogo from "./NavbarLogo";
// import NavbarLink from "./NavbarLink";
// import NavbarBtn from "./NavbarBtn";
// import { useState } from "react";

// const NavbarMain = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="max-w-[1300px] mx-auto px-6 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 ">
//       <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-[#34495E] items-center py-1 px-4 rounded-r-full rounded-l-full border-[0.5px] border-[#BDC3C7]">
//         <NavbarLogo />
//         <div className="flex items-center gap-5">
//           <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
//             <NavbarLink />
//           </div>
//         <NavbarBtn />
//         </div>
//       </div>
//       <div className="flex lg:hidden p-4 items-center justify-center rounded-full border border-cyan-300 bg-black">
//         <button
//           className="text-2xl p-3 border border-cyan-300 rounded-full text-white aspect-square"
//           onClick={toggleMenu}
//         >
//           <GiHamburgerMenu />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default NavbarMain;

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import NavbarLogo from "./NavbarLogo";
import NavbarLink from "./NavbarLink";
import NavbarBtn from "./NavbarBtn";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#34495E]/90  /* translucent slate */
                 border-b border-[#BDC3C7]/20 shadow-lg py-3 px-2"
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6 py-2">
        <NavbarLogo />
        <div className="hidden lg:flex items-center gap-8">
          <NavbarLink />
          <NavbarBtn />
        </div>
        <button
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-full text-[#ECF0F1] hover:bg-white/10 transition"
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden overflow-hidden bg-[#34495E]/95 backdrop-blur-md border-t border-[#BDC3C7]/20">
          <div className="px-6 py-4 flex flex-col gap-6 text-center">
            <NavbarLink onClick={() => setMenuOpen(false)} />
            <NavbarBtn />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
