import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="lg:flex justify-between gap-8 max-w-7xl mx-auto px-4">
        {/* Layer 1: Image and Description */}
        <div className="w-[200px] ">
          <img
            src="https://mdabdulkaiyum.in/assets/logo_fav/main_logo_fav.png"
            alt="Peace Library Logo"
            className="w-40 mb-4"
          />
          <p className="text-[15px] text-gray-800 bangla">
            পীস লাইব্রেরী মূলত এটি একটি সংস্থা, ঔষধকে খাদ্য হিসেবে নয়, বরং
            খাদ্যকেই ঔষধ হিসেবে গ্রহণ করুন। এই স্লোগান নিয়ে আমাদের স্বাস্থ্যকর
            লাইফ স্টাইল এগিয়ে নিয়ে যাওয়ার চেষ্টা করছি।
          </p>
        </div>

        {/* Layer 2: Address */}
        <div className="lg:flex justify-between gap-2 lg:w-[50%]">
          <div>
            <h4 className="mb-2 text-gray-900 font-semibold">ঠিকানা:</h4>
            <address className="not-italic text-gray-800 text-[15px]">
              PeaceLibrary DIABETES CENTRE
              <br />
              Vill-Sekhpur (Chandpur Brigde)
              <br />
              Jharkhand Border
              <br />
              Po- Bhasaipaikar
              <br />
              Ps-Samserganj
              <br />
              Dist-Murshidabad
              <br />
              Pin-742202
              <br />
              State- West Bengal
            </address>
          </div>

          {/* Layer 3: Opening Hours */}
          <div>
            <h4 className="mb-2 text-gray-900 font-semibold">খোলা থাকে:</h4>
            <p className="text-gray-800 text-[15px]">
              সোম – বৃহস্পতি
              <br />
              (6 AM – 6 PM)
              <br />
              শনি – রবি
              <br />
              (6 AM – 6 PM)
              <br />
              শুক্রবার বন্ধ থাকে
            </p>
          </div>

          {/* Layer 4: Contact */}
          <div>
            <h4 className="mb-2 text-gray-900 font-semibold">যোগাযোগ:</h4>
            <p className="text-gray-800 text-[15px] m-0">
              ফোন:
              <br />
              <a
                href="tel:+919732624907"
                className="text-blue-600 hover:underline"
              >
                +91 9732 624 907
              </a>
              <br />
              হোয়াটসঅ্যাপ:
              <br />
              <a
                href="https://wa.me/919732624907"
                className="text-green-500 hover:underline"
              >
                +91 9732 624 907
              </a>
              <br />
              <a href="/faq" className="text-blue-600 hover:underline">
                FAQ
              </a>
              <br />
              <a href="/career" className="text-blue-600 hover:underline">
                Career
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Peace Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
