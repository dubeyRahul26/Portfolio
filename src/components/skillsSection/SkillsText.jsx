import React from "react";

const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[50px] md:mb-[55px]">
      <h2 className="text-6xl text-cyan-300 mb-10">My Skills</h2>
      <p className="text-lg text-center text-white lg:mb-72">
        <strong>Skills Summary</strong> <br />
        <br />
        💻 <strong>Full-Stack Development:</strong> MERN Stack (MongoDB,
        Express.js, React.js, Node.js) <br />
        🎨 <strong>Frontend:</strong> React.js, Tailwind CSS, Chakra UI, DaisyUI{" "}
        <br />
        🛠 <strong>Backend & APIs:</strong> Node.js, Express.js, Mongoose, JWT
        Authentication <br />
        🗄 <strong>Database:</strong> MongoDB, Mongoose, MongoDB Atlas <br />
        🌐 <strong>State Management:</strong> Zustand <br />
        🤖 <strong>AI & Cloud:</strong> Exploring AI integrations, Cloud
        Deployment (Render) <br />
        🔧 <strong>Problem-Solving:</strong> Algorithm optimization, Trie, Hash
        Tables, Recursion
      </p>
    </div>
  );
};

export default SkillsText;
