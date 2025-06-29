"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FB: any;
  }
}

const FacebookPageEmbed = () => {
  useEffect(() => {
    // Facebook SDK স্ক্রিপ্ট inject না থাকলে inject করো
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    }
  }, []);

  return (
    <>
      <div className="my-6 w-full max-w-md mx-auto">
        <div
          className="fb-page"
          data-href="https://www.facebook.com/mdabdulkaiyumpeacelibrary/?"
          data-tabs="timeline"
          data-width=""
          data-height=""
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/facebook"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/facebook">Facebook Page</a>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default FacebookPageEmbed;
