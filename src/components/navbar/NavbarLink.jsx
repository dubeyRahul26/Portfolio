import React from "react";
import {Link} from "react-scroll" ;

const Links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLink = () => {
  return (
    <ul
      className="flex gap-6 text-white font-bold text-center py-4 
           lg:flex-row flex-col 
           absolute top-[120%] w-full bg-cyan-300/30 
           backdrop-blur-lg 
           lg:static lg:bg-transparent lg:w-auto lg:translate-x-0 
           left-[50%] -translate-x-[50%] shadow-lg border border-cyan-300/50 lg:border-none lg:shadow-none"
    >
      {Links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            smmoth = {true}
            spy={true}
            duration={500}
            offset={-130}
            className="cursor-pointer text-white hover:text-cyan-200 transition-all duration-500"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan-300 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLink;
