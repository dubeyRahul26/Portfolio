import React from "react";
import { motion } from "framer-motion";

const AboutMeImage = ({ src = "/aboutimg.jpg", alt = "Portrait of the author" }) => {
  return (
    <motion.div
      className="relative mx-auto mb-12 flex justify-center items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Ambient glow (blurred radial gradient) */}
      <div aria-hidden className="absolute inset-0 flex justify-center items-center -z-20">
        <div className="h-80 w-80 bg-gradient-to-br from-purple-400 via-cyan-400 to-indigo-500 dark:from-purple-700 dark:via-cyan-700 dark:to-indigo-900 rounded-full blur-3xl opacity-60 rotate-6" />
      </div>

      {/* Glass‑card backdrop */}
      <div
        aria-hidden
        className="absolute bottom-4 sm:bottom-6 h-[62%] w-[88%] bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-[2.5rem] shadow-xl -z-10"
      />

      {/* Portrait image */}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="relative z-10 aspect-[3/4] w-[70vw] max-w-[260px] md:max-w-[320px] lg:max-w-[380px] rounded-[2rem] object-cover shadow-2xl ring-4 ring-white/40 dark:ring-white/10 select-none"
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
      />
    </motion.div>
  );
};

export default AboutMeImage;

