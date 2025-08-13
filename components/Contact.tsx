// Inside Contact.tsx
"use client";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { useReducer, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { sendMail } from "@/lib/actions";

// ContactForm code here...
// (paste everything from your ContactForm snippet)

const Contact = () => {
  return (
    <section className="w-full py-20 sm:py-40 justify-center flex items-center z-20" id="contact">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h2>
            Contact <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">me.</span>
          </h2>
        </Reveal>

        <p className="max-w-[700px] mt-10">
          Want to work together or have a question? Drop me a message below.
        </p>

        <div className="mt-10 w-full max-w-xl">
          <ContactForm currentEmail="info@atzinescandia.dev" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
