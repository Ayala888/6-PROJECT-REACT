import React from 'react';

export default function Section1() {
  return (
    <div className="w-full pt-[80px] mb-6 flex justify-center">
      <div className="relative w-[280px] h-[160px] sm:w-[400px] sm:h-[225px] md:w-[640px] md:h-[360px] lg:w-[1280px] lg:h-[432px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/HQtrqkKkq7E?si=8IOmaOqEC3xfdDBm"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}











