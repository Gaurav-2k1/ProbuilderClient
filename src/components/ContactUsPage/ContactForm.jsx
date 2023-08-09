import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="text-black rounded-xl p-7 lg:pb-6 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-black font-DMSans">
        Got a Idea? We&apos;ve got the skills. Let&apos;s <p className="text-red-500">team up</p>
      </h1>
      <p className="">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-3">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
