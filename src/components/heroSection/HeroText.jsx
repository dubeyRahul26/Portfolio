import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left text-center p-4">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl text-xl uppercase text-cyan-300"
      >
        Full Stack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.rem] lg:text-6xl text-4xl font bold text-white"
      >
        Rahul Dubey
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-gray-200 text-lg "
      >
        A Passionate Full Stack Developer <br />
        Focused on building responsive, scalable, <br />
        and user-friendly web applications
      </motion.p>
    </div>
  );
};

export default HeroText;
