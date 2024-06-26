"use client";

import ContactForm from "@/components/sections/ContactForm";

export default function ContactSection() {
  return (
    <div id="contact" className="flex h-screen justify-center items-center">
      <div className="flex items-center justify-between w-full max-w-screen-xl md:px-10 lg:px-32">
        <div className="mx-10 my-10 w-full mt-[-5rem] md:mt-[-10rem] lg:mx-40">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
