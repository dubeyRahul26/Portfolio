import { LuCircle } from "react-icons/lu";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex items-center justify-center w-full h-full"
    >
      {/* Profile Image */}
      <img
        src="dp.jpeg"
        alt="profile image"
        className="
          rounded-full object-cover z-10
          w-[160px] h-[160px]
          sm:w-[200px] sm:h-[200px]
          md:w-[240px] md:h-[240px]
          lg:w-[280px] lg:h-[280px]
          xl:w-[320px] xl:h-[320px]
        "
      />

      {/* Animated Circle */}
      <div className="absolute flex items-center justify-center animate-pulse z-0">
        <LuCircle
          className="
            text-cyan-300 stroke-[0.5]
            animate-[spin_20s_linear_infinite]
            w-[200px] h-[200px]
            sm:w-[260px] sm:h-[260px]
            md:w-[320px] md:h-[320px]
            lg:w-[380px] lg:h-[380px]
            xl:w-[440px] xl:h-[440px]
          "
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;

