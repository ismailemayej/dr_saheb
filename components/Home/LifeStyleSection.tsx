import React from "react";
import Heading from "../Heading";

const LifeStyleSection = () => {
  return (
    <div className="w-full py-8">
      <Heading level={4} center bold className="font-bold mb-6">
        স্বাস্থ্যকর লাইফস্টাইল
      </Heading>
      <div className="text-xs flex flex-col md:flex-row gap-8 mx-auto">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-lg font-semibold">
            কি আছে আমাদের লাইফ স্টাইলে? কেন ভাল হয়ে যায় লাইফ স্টাইল ও লাইফ
            টাইম ডিসিস গুলো। <br />
            <span className="font-bold">
              {" "}
              (সুস্থতার মূল মন্ত্রে সবচেয়ে গুরুত্বপূর্ণ যে বিষয়টি তা হল
              খাদ্যাভ্যাস)
            </span>
          </p>
          <ul className="list-decimal list-inside space-y-2 text-base">
            <li>আমরা স্বাস্থ্যকর খাদ্য খেতে বলি।</li>
            <li>আমরা রোযা রাখতে বলি।</li>
            <li>আমরা ভালো ঘুমাতে বলি।</li>
            <li>আমরা দৈনিক ব্যায়াম করতে বলি।</li>
            <li>আমরা মানসিক প্রশান্তির চর্চা করতে বলি।</li>
          </ul>
          <p className="italic text-black font-medium">
            ‘সুস্থতা সৃষ্টিকর্তার নেয়ামত সুতরাং তাকে ধরে রাখুন’
          </p>
        </div>
        {/* Right Section */}
        <div className=" text-xs shadow-2xl md:w-1/2 space-y-4 bg-gray-50 rounded-lg p-4 bangla">
          <Heading level={3} bold className="font-bold mb-6">
            স্বাস্থ্যকর লাইফস্টাইল
          </Heading>
          <p className="font-bold">
            কি আছে আমাদের লাইফ স্টাইলে? কেন ভাল হয়ে যায় লাইফ স্টাইল ও লাইফ
            টাইম ডিসিস গুলো। (সুস্থতার মূল মন্ত্রে সবচেয়ে গুরুত্বপূর্ণ যে
            বিষয়টি তা হল খাদ্যাভ্যাস)
          </p>
          <ul className="list-decimal list-inside space-y-0.5 text-base">
            <p>১) আমরা স্বাস্থ্যকর খাদ্য খেতে বলি।</p>
            <p>২) আমরা রোযা রাখতে বলি।</p>
            <p>৩) আমরা ভালো ঘুমাতে বলি।</p>
            <p>৪) আমরা দৈনিক ব্যায়াম করতে বলি।</p>
            <p>৫) আমরা মানসিক প্রশান্তির চর্চা করতে বলি।</p>
          </ul>
          <p className="italic text-black font-bold">
            ‘সুস্থতা সৃষ্টিকর্তার নেয়ামত সুতরাং তাকে ধরে রাখুন’
          </p>
          <p className="font-bold text-blue-700">জেনে রাখবেন</p>
          <p className="text-base">
            “দুর্বল মুমিনের চেয়ে শক্তিশালী মুমিন উত্তম”
            <br />
            “মানুষ বড়ই আশ্চর্যজনক ও বোকা”
            <br />
            সে সম্পদ অর্জন করতে গিয়ে স্বাস্থ্য হারায়।
            <br />
            তারপর আবার সেই স্বাস্থ্য ফিরে পেতে সম্পদ নষ্ট করে।
          </p>
          <p className="text-base">
            নিজেকে ভালোবাসুন, নিজেকে সময় দিন। আপনার স্বাস্থ্য‌ই আপনার সম্পদ,
            একথা বুঝে নিন।
          </p>
          <p className="font-semibold text-green-800">
            “স্বাস্থ্যকর লাইফস্টাইল সুস্থ জীবন” “হয়তো ডিসিপ্লিন নয়তো ডিসিস”
          </p>
          <p className="text-base">
            আপনার লাইফস্টাইল মডিফিকেশন করতে পরামর্শ নিন লাইফস্টাইল মডিফায়ার
            আব্দুল কাইয়ুম পীস লাইব্রেরী এর কাছে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default LifeStyleSection;
