import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="w-full">
        <h2 className="text-[#00FFF6] text-3xl md:text-4xl mb-4 font-bold">
          Let's Connect!
        </h2>
        <p className="text-[#F5F5F5]">
          I'm open to freelance projects, collaborations, and exciting
          opportunities
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
