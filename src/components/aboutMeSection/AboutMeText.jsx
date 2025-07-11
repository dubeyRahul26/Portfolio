import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start items-center md:text-left text-center">
      <h1 className="text-6xl text-cyan-300 mb-10">About Me</h1>
      <p className="text-white md:text-left text-center p-1 leading-relaxed max-w-3xl">
        <span className="font-bold text-2xl">
          👨‍💻 Full-Stack Developer | MERN Stack | AI Enthusiast
        </span>
        <br />
        <br />
        Hey! I'm Rahul Dubey, a computer science student who loves building real-world projects using the MERN stack. I'm especially interested in making apps that are fast, scalable, and easy to use. Recently, I've been experimenting with AI tools like the OpenAI API to make smarter web experiences.
        <br />
        <br />
        I’ve built projects like an e-commerce site with admin dashboards (FlexCart), a real-time chat app using Socket.io, and a resume builder — all focused on practical features and clean design.
        <br />
        <br />
        <span className="font-bold text-lg">Tech I use:</span> React.js, Node.js, Express, MongoDB, Tailwind CSS, Zustand, Socket.io
        <br />
        <span className="font-bold text-lg">Currently learning:</span> Advanced DSA, AI integrations, and writing better, cleaner code.
        <br />
        <br />
        I’m always up for learning new things, building useful tools, and collaborating with people who love tech as much as I do.
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
