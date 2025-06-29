import React from "react";

const AppointmentTwoSection = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://mdabdulkaiyum.in/assets/files/images/appointment/01.jpg")',
        }}
      />

      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-20">
        <h2 className="bangla-bold text-3xl lg:text-4xl pb-4">
          চিকিৎসার জন্য নাম লেখাতে আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
        </h2>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow font-semibold text-base transition">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 3a2 2 0 0 0-2 2v13l7-4 7 4V5a2 2 0 0 0-2-2H5z" />
          </svg>
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentTwoSection;
