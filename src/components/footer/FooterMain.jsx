import React from "react";

const Links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 px-6 md:px-12 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Name */}
        <p className="text-2xl font-semibold tracking-wide text-white">
          Rahul Dubey
        </p>

        {/* Center: Navigation */}
        <ul className="flex flex-wrap gap-6 text-sm md:text-base">
          {Links.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.section}`}
                className="hover:text-white transition duration-300"
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom: Copyright */}
      <div className="mt-6 text-center md:text-right text-xs text-gray-500">
        © {new Date().getFullYear()} Rahul Dubey. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterMain;
