"use client";

import {useEffect, useRef, useState} from "react";

const videos = [ "/video6.mp4", "/video7.mp4", "/video8.mp4", "/video9.mp4", "/video10.mp4", "/video1.mp4", "/video2.mp4", "/video3.mp4", "/video4.mp4", "/video5.mp4",];

export default function HeroCarousel() {
  const HERO_WIDTH = 640;
  const SIDE_WIDTH = 320;

  // Add last at front, first at end
  const loopVideos = [
    videos[videos.length - 1],
    ...videos,
    videos[0],
  ];

  const [virtualIndex, setVirtualIndex] = useState(1); // start at first "real" image
  const [isTransitioning, setIsTransitioning] = useState(true); // stop the animation when reset the virtual videos list
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Create a virtual array of slides with a copy of the last slide at the front and the first slide at the end,
  // VirtualIndex that always increases (motion forward), when hit the fake end we snap back to the real start without animation
  useEffect(() => {
    const interval = setInterval(() => {
      setVirtualIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Reset and pause animation when virtualIndex reaches the last index in loopVideos (the fake first slide)
  useEffect(() => {
    if (virtualIndex === loopVideos.length - 1) {
      const id = setTimeout(() => {
        setIsTransitioning(false);
        setVirtualIndex(1);
        // re-enable transition in the next frames so subsequent steps animate
        requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
      }, 700);
      return () => clearTimeout(id);
    }
  }, [virtualIndex, loopVideos.length]);

  // 🎥 Control video playback
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === virtualIndex) {
        video.play().catch(() => {
        });
      } else {
        video.pause();
        video.currentTime = 0; // reset to beginning if you want
      }
    });
  }, [virtualIndex]);

  // !!! container originally starts from the left edge of the fake last image
  // -(virtualIndex * SIDE_WIDTH) shifts left - starts from left edge of hero image
  // +HERO_WIDTH shifts right to image center
  const translateX = -(virtualIndex * SIDE_WIDTH) + HERO_WIDTH / 2;

  return (
    <div className="max-w-[1280px] mx-auto mt-16 pt-5 w-full h-[450px] relative overflow-hidden">
      <div
        className={`flex h-fit ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{
          transform: `translateX(${translateX}px)`, // absolute distance relative to initial position
        }}
      >
        {loopVideos.map((src, i) => {
          const realIndex = (virtualIndex - 1 + videos.length) % videos.length;
          const isActive = i === virtualIndex;
          return (
            <div
              key={i}
              className={`h-fit overflow-hidden transition-all duration-500
        ${isActive ? "shadow-2xl scale-105 z-10" : "opacity-50"}
      `}
              style={{
                width: isActive ? `${HERO_WIDTH}px` : `${SIDE_WIDTH}px`,
                flexShrink: 0,
              }}
            >
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={src}
                className={`w-full object-cover ${isActive ? "h-full" : "h-fit"}`}
                muted
                loop
                playsInline
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}