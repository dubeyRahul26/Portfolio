import React from "react";

const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative mb-10 flex flex-row justify-center ">
      {/* Background Shape */}
      <div className="h-[500px] w-[200px]  bg-cyan-300 absolute bottom-[-30px] left-[-10px] md:left-[-40px] lg:left-[-5px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] z-[0] "></div>
      
      {/* Image Container */}
      <div className="h-[500px] w-[250px] rounded-[100px] absolute overflow-hidden z-1">
        <img
          src="about-me.jpg"
          alt="About Me Image"
          className="h-full w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMeImage;

