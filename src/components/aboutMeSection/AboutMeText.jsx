import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start items-center md:text-left text-center">
      <h1 className="text-6xl text-cyan-300 mb-10">About Me</h1>
      <p className="text-white md:text-left text-center p-1">
        <span className="font-bold text-2xl">
          👨‍💻 Full-Stack Developer | MERN Stack | AI Enthusiast
        </span>{" "}
        <br />
        <br />
        Passionate about building scalable web applications using MERN stack{" "}
        <br />
        and integrating AI-driven solutions. Experienced in REST APIs, database
        management
        <br />
        (MongoDB, Mongoose), state management(Zustand), and responsive UI
        (Tailwind, Chakra UI). <br />
        🔹<span className="font-bold text-lg"> Recent Projects:</span> Chat App,
        Product Store (CRUD), Resume Builder <br />
        🔹 <span className="font-bold text-lg">AI Focus:</span> Exploring AI
        integrations into web apps
        <br /> Eager to learn, build, and contribute to impactful projects!
      </p>
      <button
        className="border border-cyan-300 rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-cyan-300 transition-all duration-500 cursor-pointer md:self-start self-center text-white hover:text-black"
        onClick={() =>
          document
            .getElementById("projects")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
