// import React from "react";

// const NavbarLogo = () => {
//   return (
//     <div>
//       <h1 className="text-white text-2xl hidden sm:block font-bold">
//         Rahul Dubey
//       </h1>
//       <h1 className="text-white text-2xl sm:hidden font-extrabold">RD</h1>
//     </div>
//   );
// };

// export default NavbarLogo;


import React from "react";

const NavbarLogo = () => (
  <button
    aria-label="Scroll to top"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="select-none focus:outline-none"
  >
    {/* full name on ≥ 640 px, initials on smaller screens */}
    <h1 className="hidden sm:block text-white font-extrabold text-2xl tracking-wide">
      Rahul&nbsp;Dubey
    </h1>
    <h1 className="sm:hidden text-white font-extrabold text-2xl">RD</h1>
  </button>
);

export default NavbarLogo;
