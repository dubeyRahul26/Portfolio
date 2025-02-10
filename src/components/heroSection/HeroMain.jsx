import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div id = "hero" className="pt-40 pb-16 sm:flex-row sm: justify-evenly flex flex-col items-center gap-14 ">
      <HeroText />
      <HeroPic/>
    </div>
  );
};

export default HeroMain;
