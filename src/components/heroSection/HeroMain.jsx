import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div
      id="hero"
      className="
        pt-32 pb-16
        flex flex-col
        sm:flex-row
        items-center
        justify-center
        sm:justify-evenly
        gap-14
        max-w-7xl
        mx-auto
        px-6
      "
    >
      <HeroText />
      <HeroPic />
    </div>
  );
};

export default HeroMain;

