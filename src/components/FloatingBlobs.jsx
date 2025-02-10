import { motion } from "framer-motion";

const FloatingBlobs = () => {
  const blobs = [
    { color: "bg-[#2978B5]", size: "w-52 h-52", start: { top: "0%", left: "0%" }, delay: 0, speed: 15 },   // Top-left  
    { color: "bg-[#4D96FF]", size: "w-44 h-44", start: { top: "0%", left: "100%" }, delay: 3, speed: 18 },  // Top-right  
    { color: "bg-[#00C2FF]", size: "w-60 h-60", start: { top: "100%", left: "0%" }, delay: 6, speed: 20 },  // Bottom-left  
    { color: "bg-[#74C0FC]", size: "w-32 h-32", start: { top: "100%", left: "100%" }, delay: 9, speed: 25 }, // Bottom-right  
  ];

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${blob.color} ${blob.size} opacity-100 blur-xl`}
          initial={{
            top: blob.start.top,
            left: blob.start.left,
            opacity: 0,   // Start invisible
            scale: 0.5,   // Start smaller
            filter: "blur(20px)", // Start with less blur
          }}
          animate={{
            top: ["0%", "50%", blob.start.top],  // Move to center then back
            left: ["0%", "50%", blob.start.left],
            rotate: [0, 180, 360, 0], // Smooth rotation
            opacity: [0, 0.3, 0.3],   // Fade-in smoothly
            scale: [0.5, 1, 1],       // Grow naturally
            filter: ["blur(20px)", "blur(40px)", "blur(45px)"], // Increase blur
          }}
          transition={{
            duration: blob.speed, // Different speeds for each blob
            ease: "easeInOut",
            repeat: Infinity,
            delay: blob.delay, // Staggered movement
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default FloatingBlobs;


