import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Campus Connect",
    year: "JAN2026",
    align: "right",
    image: "campus_connect.png",
    link: "https://campus-connect-dn07.onrender.com",
  },
  {
    name: "PrepWise",
    year: "July2025",
    align: "left",
    image: "prepwise.png",
    link: "https://prep-wise-n0gs.onrender.com",
  },
  {
    name: "FlexCart",
    year: "Jan2025",
    align: "right",
    image: "flexcart.png",
    link: "https://flex-cart.onrender.com",
  },
  {
    name: "ChatApp",
    year: "Nov2024",
    align: "left",
    image: "chatapp.png",
    link: "https://chat-app-tu33.onrender.com",
  },
  
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="px-5">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div>
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
