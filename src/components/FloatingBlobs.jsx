// import { motion } from "framer-motion";

// const FloatingBlobs = () => {
//   const blobs = [
//     {
//       color: "bg-[#2978B5]",
//       size: "w-52 h-52",
//       start: { top: "10%", left: "10%" },
//       path: ["10%", "15%", "12%", "10%"],
//       delay: 0,
//       speed: 28,
//     },
//     {
//       color: "bg-[#4D96FF]",
//       size: "w-44 h-44",
//       start: { top: "20%", left: "80%" },
//       path: ["20%", "25%", "18%", "20%"],
//       delay: 3,
//       speed: 26,
//     },
//     {
//       color: "bg-[#00C2FF]",
//       size: "w-60 h-60",
//       start: { top: "70%", left: "10%" },
//       path: ["70%", "75%", "72%", "70%"],
//       delay: 5,
//       speed: 32,
//     },
//     {
//       color: "bg-[#74C0FC]",
//       size: "w-36 h-36",
//       start: { top: "75%", left: "85%" },
//       path: ["75%", "80%", "78%", "75%"],
//       delay: 7,
//       speed: 30,
//     },
//     {
//       color: "bg-[#38BDF8]",
//       size: "w-48 h-48",
//       start: { top: "35%", left: "20%" },
//       path: ["35%", "40%", "38%", "35%"],
//       delay: 2,
//       speed: 29,
//     },
//     {
//       color: "bg-[#0EA5E9]",
//       size: "w-40 h-40",
//       start: { top: "40%", left: "70%" },
//       path: ["40%", "45%", "42%", "40%"],
//       delay: 4,
//       speed: 31,
//     },
//     {
//       color: "bg-[#60A5FA]",
//       size: "w-56 h-56",
//       start: { top: "60%", left: "35%" },
//       path: ["60%", "63%", "61%", "60%"],
//       delay: 6,
//       speed: 35,
//     },
//     {
//       color: "bg-[#3B82F6]",
//       size: "w-32 h-32",
//       start: { top: "25%", left: "50%" },
//       path: ["25%", "30%", "28%", "25%"],
//       delay: 1,
//       speed: 27,
//     },
//   ];

//   return (
//     <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//       {blobs.map((blob, index) => (
//         <motion.div
//           key={index}
//           className={`absolute rounded-full ${blob.color} ${blob.size} opacity-25 blur-xl mix-blend-screen`}
//           initial={{
//             top: blob.start.top,
//             left: blob.start.left,
//             opacity: 0,
//             scale: 0.8,
//           }}
//           animate={{
//             top: blob.path,
//             left: blob.path.map((_, i) => {
//               const base = parseInt(blob.start.left);
//               return `${(base + i * 3) % 100}%`;
//             }),
//             rotate: [0, 90, 180, 270, 360],
//             opacity: [0, 0.25, 0.25],
//             scale: [0.8, 1, 0.9, 1],
//           }}
//           transition={{
//             duration: blob.speed,
//             ease: "easeInOut",
//             repeat: Infinity,
//             delay: blob.delay,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default FloatingBlobs;


import { motion } from "framer-motion";
import { useMemo } from "react";

const randomPerc = (min = 0, max = 100) =>
  `${Math.floor(Math.random() * (max - min) + min)}%`;

const useBlobs = () =>
  useMemo(
    () =>
      [
        { color: "bg-[#2978B5]", size: "w-52 h-52", delay: 0, speed: 30 }, // was 20
        { color: "bg-[#4D96FF]", size: "w-44 h-44", delay: 3, speed: 27 }, // was 18
        { color: "bg-[#00C2FF]", size: "w-60 h-60", delay: 5, speed: 33 }, // was 22
        { color: "bg-[#74C0FC]", size: "w-36 h-36", delay: 7, speed: 32 }, // was 21
        { color: "bg-[#38BDF8]", size: "w-48 h-48", delay: 2, speed: 29 }, // was 19
        { color: "bg-[#0EA5E9]", size: "w-40 h-40", delay: 4, speed: 30 }, // was 20
        { color: "bg-[#60A5FA]", size: "w-56 h-56", delay: 6, speed: 36 }, // was 24
        { color: "bg-[#3B82F6]", size: "w-32 h-32", delay: 1, speed: 27 }, // was 18
      ].map((b) => {
        const frames = Array.from({ length: 6 }, () => ({
          top: randomPerc(-10, 90),
          left: randomPerc(-10, 90),
        }));
        return {
          ...b,
          initial: frames[0],
          tops: frames.map((f) => f.top),
          lefts: frames.map((f) => f.left),
        };
      }),
    []
  );

const FloatingBlobs = () => {
  const blobs = useBlobs();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${blob.color} ${blob.size} opacity-20 blur-xl mix-blend-screen`}
          initial={{ ...blob.initial, scale: 0.8, opacity: 0 }}
          animate={{
            top: blob.tops,
            left: blob.lefts,
            rotate: [0, 120, 240, 360],
            opacity: [0, 0.2, 0.2],
            scale: [0.8, 1, 0.9, 1],
          }}
          transition={{
            duration: blob.speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
            delay: blob.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBlobs;
