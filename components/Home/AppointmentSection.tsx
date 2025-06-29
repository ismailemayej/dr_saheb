import React from "react";
import Button from "../button";

const AppointmentSection = () => {
  return (
    <div className="lg:flex items-center justify-between w-full py-8 bg-white dark:bg-gray-900">
      <div>
        <h1 className="text-4xl text-black dark:text-white font-bold bangla">
          চিকিৎসার জন্য আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
        </h1>
        <p className="bangla text-gray-700 dark:text-gray-300">
          • ঔষধ মুক্ত জীবন সুস্থ জীবন, আর এর জন্য প্রয়োজন স্বাস্থ্যকর লাইফ
          স্টাইল।
        </p>
      </div>
      <Button className="hover:bg-red-500 hover:text-white hover:scale-105 px-6 flex items-center gap-2 dark:bg-gray-800 dark:text-white dark:hover:bg-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 5v14l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
          />
        </svg>
        Book Appointment
      </Button>
    </div>
  );
};

export default AppointmentSection;
