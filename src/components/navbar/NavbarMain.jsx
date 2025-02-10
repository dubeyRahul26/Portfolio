import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLink from "./NavbarLink";
import NavbarBtn from "./NavbarBtn";
import { useState } from "react";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="max-w-[1300px] mx-auto px-6 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 ">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-[#34495E] items-center py-1 px-4 rounded-r-full rounded-l-full border-[0.5px] border-[#BDC3C7]">
        <NavbarLogo />
        <div className="flex items-center gap-5">
          <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
            <NavbarLink />
          </div>
        <NavbarBtn />
        </div>
      </div>
      <div className="flex lg:hidden p-4 items-center justify-center rounded-full border border-cyan-300 bg-black">
        <button
          className="text-2xl p-3 border border-cyan-300 rounded-full text-white aspect-square"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
