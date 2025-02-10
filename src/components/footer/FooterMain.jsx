import React from "react";

const Links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className="px-8">
      <div className="md:flex hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-gray-400 hidden md:block">Rahul Dubey</p>
        <ul className="flex gap-4 text-gray-400 text-xl">
          {Links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={`#${item.section}`}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-center md:text-right text-gray-400 text-sm mt-2 mb-2">
        © {new Date().getFullYear()} Rahul Dubey. All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
