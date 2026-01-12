import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div
      className="
        flex flex-col gap-4
        justify-center
        text-center md:text-left
        max-w-xl
      "
    >
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-cyan-300 uppercase text-lg lg:text-2xl"
      >
        Full Stack Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-white font-bold text-4xl md:text-5xl lg:text-6xl"
      >
        Rahul Dubey
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-gray-200 text-base md:text-lg leading-relaxed"
      >
        A passionate Full Stack Developer dedicated to building responsive,
        scalable, and user-focused web applications that deliver exceptional
        user experiences across modern platforms.
      </motion.p>
    </div>
  );
};

export default HeroText;
