// import React from "react";
// import {Link} from "react-scroll" ;

// const Links = [
//   { link: "About Me", section: "about" },
//   { link: "Skills", section: "skills" },
//   { link: "Projects", section: "projects" },
//   { link: "Contact", section: "contact" },
// ];

// const NavbarLink = () => {
//   return (
//     <ul
//       className="flex gap-6 text-white font-bold text-center py-4 
//            lg:flex-row flex-col 
//            absolute top-[120%] w-full bg-cyan-300/30 
//            backdrop-blur-lg 
//            lg:static lg:bg-transparent lg:w-auto lg:translate-x-0 
//            left-[50%] -translate-x-[50%] shadow-lg border border-cyan-300/50 lg:border-none lg:shadow-none"
//     >
//       {Links.map((link, index) => (
//         <li key={index} className="group">
//           <Link
//             to={link.section}
//             smmoth = {true}
//             spy={true}
//             duration={500}
//             offset={-130}
//             className="cursor-pointer text-white hover:text-cyan-200 transition-all duration-500"
//           >
//             {link.link}
//           </Link>
//           <div className="mx-auto bg-cyan-300 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default NavbarLink;


import React from "react";
import { Link } from "react-scroll";

/**
 * Optional onLinkClick prop lets the parent (mobile menu) close itself
 * after a navigation item is chosen.
 */
const navItems = [
  { label: "About Me", section: "about" },
  { label: "Skills", section: "skills" },
  { label: "Projects", section: "projects" },
  { label: "Contact", section: "contact" },
];

const NavbarLink = ({ onLinkClick = () => {} }) => (
  <ul className="flex flex-col lg:flex-row items-center gap-6 text-white font-semibold">
    {navItems.map(({ label, section }) => (
      <li key={section} className="group">
        <Link
          to={section}
          smooth={true}
          spy={true}
          duration={500}
          offset={-100}           /* keep header height clear */
          onClick={onLinkClick}   /* closes mobile menu */
          className="cursor-pointer transition-colors duration-300 hover:text-cyan-300"
        >
          {label}
        </Link>
        <span
          className="block h-[1px] w-0 bg-cyan-300 transition-[width] duration-300
                     group-hover:w-full"
        />
      </li>
    ))}
  </ul>
);

export default NavbarLink;
