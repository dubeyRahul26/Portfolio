import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex overflow-x-hidden md:flex-row flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[50px] justify-between items-center mb-5 md:p-10"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
