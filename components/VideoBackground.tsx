"use client";
import { useEffect, useState } from "react";
import {
  getWeatherVideo,
  getWeatherVideoPlaceHolder,
} from "@utils/getWeatherMedia";
import Image from "next/image";

import { useSelector } from "react-redux";
import type { RootState } from "@app/Redux/store";

const VideoBackground = () => {
  const [autoplay, setAutoplay] = useState(true);
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string>("");
  const [imageReady, setImageReady] = useState(false);

  const globalStore = useSelector(
    (state: RootState) => state.global.currentData
  );

  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        setAutoplay(true);
      } else {
        setAutoplay(false);
      }
    });
  }, []);

  useEffect(() => {
    if (globalStore.current.condition.code !== 0) {
      let url = getWeatherVideo(
        globalStore.current.condition.code,
        globalStore.current.is_day
      );
      let imgSrc = getWeatherVideoPlaceHolder(
        globalStore.current.condition.code,
        globalStore.current.is_day
      );
      setVideoSrc(url);
      setImageSrc(imgSrc);
    }
  }, [globalStore]);

  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 z-[6] w-full h-full select-none"></div>
      {videoSrc !== "" && (
        <video
          autoPlay={autoplay}
          muted
          loop
          className="w-full h-full object-cover relative z-[5]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
        <Image
          src={imageSrc}
          onLoadingComplete={() => setImageReady(true)}
          fill
          className={`transition duration-300 ${
            imageReady ? "scale-100 blur-0" : "scale-120 blur-2xl"
          } object-cover`}
          quality={100}
          alt="background-image"
        />
    </>
  );
};

export default VideoBackground;
