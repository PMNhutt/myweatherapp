"use client";
import { useState } from "react";
import Image from "next/image";
import CountingNumber from "@components/CountingNumber";

import { getWeatherImg } from "@utils/getWeatherMedia";
import { MainTempProps } from "@utils/interface";

const MainTemp: React.FC<MainTempProps> = ({
  currentData,
  activeTemp,
  setActiveTemp,
}) => {
  // const [activeTemp, setActiveTemp] = useState(0);
  return (
    <div className="flex-center gap-5 mt-5 mb-1">
      {currentData && (
        <>
          <Image
            src={getWeatherImg(currentData.condition.code, currentData.is_day)}
            height={90}
            width={90}
            alt="empt"
            className="object-contain"
          />

          <div className="w-[110px]">
            <p className="text-white text-6xl font-bold">
              {activeTemp == 0 ? (
                <span className="flex">
                  <CountingNumber n={currentData.temp_c} />°
                </span>
              ) : (
                <span className="flex">
                  <CountingNumber n={Math.round(currentData.temp_f)} />°
                </span>
              )}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => setActiveTemp(0)}
              className={`${
                activeTemp == 0 ? "font-bold text-xl" : "font-normal"
              } text-white`}
            >
              C
            </button>
            <button
              onClick={() => setActiveTemp(1)}
              className={`${
                activeTemp == 1 ? "font-bold text-xl" : "font-normal"
              } text-white`}
            >
              F
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MainTemp;
