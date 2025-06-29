"use client";

import React, { useEffect, useState } from "react";
import Heading from "../Heading";

const reviews = [
  {
    id: 1,
    name: "সাদিকুর রহমান",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "আমার বাবা একজন হার্টের রোগী ছিলেন। এই প্ল্যাটফর্মের মাধ্যমে সঠিক চিকিৎসা ও পরামর্শ পেয়ে তিনি এখন অনেক ভালো আছেন। আমরা পরিবারের সবাই খুবই কৃতজ্ঞ।",
  },
  {
    id: 2,
    name: "নাসরিন আক্তার",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "এই প্ল্যাটফর্মটি আমাকে অনেক সাহায্য করেছে। ধন্যবাদ আপনাদের টিমকে।",
  },
  {
    id: 3,
    name: "জাহিদ হাসান",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "রিভিউ লিখছি কারণ আমি সত্যিই মুগ্ধ। এইরকম সার্ভিস সচরাচর পাওয়া যায় না।",
  },
];

const HistorySection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[index];

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900 text-center transition-all duration-500">
      <Heading level={3} center>
        সুখী হওয়ার গল্প
      </Heading>

      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center transition duration-500 ease-in-out">
        <p className="bangla-italic text-2xl text-gray-700 dark:text-gray-300 mb-4 transition bangla ">
          {review.text}
        </p>
        <img
          src={review.image}
          alt={review.name}
          className="w-20 h-20 rounded-full mb-4 border-2 border-blue-500 object-cover"
        />
        <h1 className="bangla-bold font-bold text-sm transition">
          {review.name}
        </h1>
      </div>
    </section>
  );
};

export default HistorySection;
