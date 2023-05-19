"use client";
import { useEffect, useState } from "react";

const VideoBackground = () => {
  const [autoplay, setAutoplay] = useState(true);
  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        setAutoplay(true);
      } else {
        setAutoplay(false);
      }
    });
  }, []);

  return (
    <video
      autoPlay={autoplay}
      muted
      loop
      className="w-full h-full object-cover"
    >
      <source
        src="https://firebasestorage.googleapis.com/v0/b/thoitiethumnay.appspot.com/o/sunlight-grass(1080p).mp4?alt=media&token=e867bfd7-3d2c-4586-b215-0effa4d6e75a"
        type="video/mp4"
      />
    </video>
  );
};

export default VideoBackground;
