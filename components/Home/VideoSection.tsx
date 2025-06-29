"use client";

import React from "react";

const videoIds = ["dQw4w9WgXcQ", "3JZ_D3ELwOQ", "lTTajzrSkCw", "fJ9rUzIMcZQ"];

const VideoSection = () => {
  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        আমাদের ভিডিও গ্যালারি
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols- lg:grid-cols-2">
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
