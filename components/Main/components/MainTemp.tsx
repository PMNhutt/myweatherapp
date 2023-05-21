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
  const feelslikeTempc: number = currentData?.feelslike_c!;
  const feelslikeTempf: number = currentData?.feelslike_f!;

  return (
    <div className="mt-5 mb-1">
      {/* location */}
      <h1 className="text-white text-center font-bold text-4xl mb-5">
        Đông Hưng Thuận, Quận 12, TP HCM
      </h1>
      <div className="flex-center gap-5 ">
        {currentData && (
          <>
            <Image
              src={getWeatherImg(
                currentData.condition.code,
                currentData.is_day
              )}
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
      <p className="text-white text-center font-bold text-xl">
        {currentData?.condition?.text}
      </p>
      <p className="text-white text-center font-normal my-3">
        Cập nhật vào lúc {currentData?.last_updated.split(" ")[1]}{" "}
      </p>
      <div className="flex justify-center gap-10">
        <p className="text-white text-center font-normal my-3">
          Cảm nhận{" "}
          <span className="font-semibold">
            {activeTemp == 0
              ? `${Math.round(feelslikeTempc)}°`
              : `${Math.round(feelslikeTempf)}°`}
          </span>
        </p>
        <p className="text-white text-center font-normal my-3">
          Độ ẩm <span className="font-semibold">{currentData?.humidity}%</span>
        </p>
        <p className="text-white text-center font-normal my-3">
          Gió{" "}
          <span className="font-semibold">
            {activeTemp == 0
              ? `${currentData?.wind_kph} km/h`
              : `${currentData?.wind_mph} dặm/giờ`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MainTemp;
