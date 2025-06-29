"use client";

import React from "react";

const videoIds = [
  "vMc7euF67lg",
  "pj_bVgANAxg",
  "VW97dpklud4",
  "J6lpzQyEeSA",
  "EF7MDeZbS84",
  "hOcppdlW6DM",
];
const VideoSection = () => {
  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="grid gap-2 grid-cols-1 sm:grid-cols- lg:grid-cols-2">
        {videoIds.map((id) => (
          <div
            key={id}
            className="w-full aspect-video overflow-hidden rounded-lg shadow-md"
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
