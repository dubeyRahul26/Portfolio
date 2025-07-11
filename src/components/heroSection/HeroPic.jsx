import { LuCircle } from "react-icons/lu"; 
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex justify-center items-center relative"
    >
      <img
        src="dp.jpg"
        alt="profile image"
        className="max-h-[290px] w-auto rounded-full object-cover"
      />
      <div className="absolute flex justify-center items-center animate-pulse z-0">
        <LuCircle className="h-[345px] w-[400px] text-cyan-300 animate-[spin_20s_linear_infinite] stroke-[0.5] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
