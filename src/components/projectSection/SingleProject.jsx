import { FiExternalLink } from "react-icons/fi";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full flex-col-reverse items-center gap-10 mb-10 ${
        align == "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="md:text-3xl text-2xl text-cyan-300 font-extrabold">
          {name}
        </h2>
        <h2
          className={`text-xl font-thin text-white text-center ${
            align == "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link}
          target="_blank"
          className={`text-lg flex gap-2 items-center text-cyan-300 hover:scale-110 hover:text-sky-500 transition-all duration-500 cursor-pointer justify-self-center ${
            align == "left" ? "md:justify-self-end" : "justify-self-start"
          }`}
        >
          Visit My Website
          <FiExternalLink />
        </a>
      </div>
      <div className="max-h-[200px] max-w-[400px] rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block hidden"></div>
        <img
          src={image}
          alt="Project-1"
          className="w-full h-full object-cover "
        />
      </div>
    </motion.div>
  );
};

export default SingleProject;
