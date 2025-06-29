import React, { useState } from "react";
import Heading from "../Heading";

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submitted!");
  };

  return (
    <>
      <Heading level={3} center>
        অনুসন্ধান করুন
      </Heading>
      <div className="bangla text-sm lg:flex justify-between items-center flex-row w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden ">
        <div className="flex-1 flex items-center justify-center bg-blue-50 ">
          <img
            src="https://mdabdulkaiyum.in/assets/files/images/gifs/contact.gif"
            alt="Contact"
            className="w-full h-auto block"
          />
        </div>
        <form
          className="flex-1 p-8 flex flex-col gap-4 w-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-md text-center">মেসেজ পাঠান</h1>
          <span className="lg:flex justify-between gap-3">
            <label className="flex flex-col text-sm text-gray-800 w-full">
              নাম
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="আপনার নাম"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600"
              />
            </label>
            <label className="flex flex-col text-sm text-gray-800 w-full">
              মোবাইল নাম্বার
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                placeholder="মোবাইল নাম্বার"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600"
              />
            </label>
          </span>
          <label className="flex flex-col text-sm text-gray-800">
            ইমেইন
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="আপনার ইমেইল"
              className="mt-2 p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600"
            />
          </label>
          <label className="flex flex-col text-sm text-gray-800">
            মেসেজ
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="আপনার মেসেজ"
              rows={4}
              className="mt-2 p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600"
            />
          </label>
          <button
            type="submit"
            className="mt-4 p-3 bg-blue-700 text-white rounded-md text-lg font-medium hover:bg-blue-800 transition-colors"
          >
            পাঠান
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactSection;
