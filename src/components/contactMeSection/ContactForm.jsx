import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gj9npau", "template_tt30r3r", form.current, {
        publicKey: "angyQr2zeKKhZz-4J",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent Successfully ✅");

          // Set timeout to clear success message after 15 seconds
          setTimeout(() => {
            setSuccess("");
          }, 10000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      {success && (
        <p className="text-xl text-green-400 font-bold mb-2 text-center">
          {success}
        </p>
      )}
      <form
        className="flex flex-col gap-4 p-6 rounded-lg bg-[#16213E] border border-[#00ADB5] shadow-md"
        ref={form}
        onSubmit={sendEmail}
      >
        {/* Name Input */}
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          autoComplete="off"
          className="h-12 rounded-md bg-[#1A1A2E] px-4 text-white placeholder-gray-400 outline-none border border-[#00ADB5] 
               focus:ring-2 focus:ring-[#00ADB5]/50 transition-all duration-200"
          value={name}
          onChange={handleName}
        />

        {/* Email Input */}
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          autoComplete="off"
          className="h-12 rounded-md bg-[#1A1A2E] px-4 text-white placeholder-gray-400 outline-none border border-[#00ADB5] 
               focus:ring-2 focus:ring-[#00ADB5]/50 transition-all duration-200"
          value={email}
          onChange={handleEmail}
        />

        {/* Message Input */}
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          required
          className="rounded-md bg-[#1A1A2E] p-4 text-white placeholder-gray-400 outline-none resize-none 
               scrollbar-thin scrollbar-thumb-[#00ADB5]/80 scrollbar-track-[#0F3460] border border-[#00ADB5] 
               focus:ring-2 focus:ring-[#00ADB5]/50 transition-all duration-200"
          value={message}
          onChange={handleMessage}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md border border-[#00ADB5] text-white h-12 font-medium text-lg bg-[#00ADB5] 
               hover:bg-transparent hover:text-[#00ADB5] transition-all duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
