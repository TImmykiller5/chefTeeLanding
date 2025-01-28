"use client";
import axios from "axios";
import React from "react";
import { toast } from "sonner";

const ContactUsSection = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submitForm = async () => {
    try {
      const url = `https://docs.google.com/forms/d/e/1FAIpQLSdok6QtzcfR99765dijrGH9rBhqc1aWLOlAUdz-fFDgEldKfg/formResponse?&submit=Submit?usp=pp_url&entry.2005620554=${firstName}&entry.1148638692=${lastName}&entry.1045781291=${email}&entry.1166974658=${phoneNo}&entry.839337160=${message}`
      const resp = await axios.get(url)
      console.log(resp) 
      toast.success("Message Sent Successfully")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }
  
  return (
    <section
      id="contact-us"
      style={{ fontFamily: "var(--font-noto-sans)" }}
      className="w-full text-white  md:px-20 px-4 py-10 md:py-16 pb-20 flex flex-col  relative bg-black"
    >
      <div className="flex flex-col gap-4 md:flex-row w-full">
        <div className="flex-1 my-auto text-center">
          <h3 className="font-semibold text-2xl md:text-4xl">Contact Us</h3>
          <p className="text-lg mt-4">
            Got questions or need help? Reach out to us—we’d love to hear from
            you!
          </p>
          <a href="mailto:chefteespot01@gmail.com">
            <span className="underline underline-offset-4">
              chefteespot01@gmail.com
            </span>
          </a>
        </div>
        <div className="relative flex-1 p-6 overflow-hidden border border-gray-400/20">
          <div className=" inset-0 z-10 blur-sm bg-gray-400/10 absolute" />
          <div className="z-50 relative">
            <div className="space-y-1 my-2">
              <h3 className="font-semibold text-xl md:text-2xl">Get in Touch</h3>
              <h4 className=" text-lg">We would love to hear from you</h4>
            </div>
            <form className="flex w-full flex-col gap-4" onSubmit={(e) => {e.preventDefault(); submitForm()}}>
              <div className="flex  gap-4">
                <input className="w-full p-3 rounded bg-white/10" type="text" placeholder="First name" required value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
                <input className="w-full p-3 rounded bg-white/10" type="text" placeholder="Last name" required value={lastName} onChange={(e) => setLastName(e.target.value)}  />
              </div>
              <div>
                <input className="w-full p-3 rounded bg-white/10" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}  />
              </div>
              <div>
                <input className="w-full p-3 rounded bg-white/10" type="tel" placeholder="Phone number" required value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}  />
              </div>
              <div>
                <textarea className="w-full p-3 rounded bg-white/10" placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)}  />
              </div>
              <div className="flex justify-end">
                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
