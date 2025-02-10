import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[60px] px-4 mb-10"
    >
      <h2 className="text-6xl text-cyan-300 mb-10 text-center">Contact Me</h2>
      <div
        className="flex justify-between gap-24 bg-[#16213E] border border-[#00ADB5] shadow-[inset_0_0_10px_#00ADB5,0_0_30px_#00ADB5] shadow-[#00ADB5]/50 p-8 rounded-2xl lg:flex-row flex-col items-center"
      >
        <ContactMeLeft />
        <ContactMeRight />
      </div>
      
    </div>
  );
};

export default ContactMain;
