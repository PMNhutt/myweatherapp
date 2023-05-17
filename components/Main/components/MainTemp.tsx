"use client";
import { useState } from "react";
import Image from "next/image";

interface MainTempProps {
  currentData:
    | {
        cloud: number;
        condition: {
          code: number;
          icon: String;
          text: String;
        };
        feelslike_c: number | undefined;
        feelslike_f: number;
        gust_kph: number;
        gust_mph: number;
        humidity: number;
        is_day: number;
        last_updated: String;
        last_updated_epoch: number;
        precip_in: number;
        precip_mm: number;
        pressure_in: number;
        pressure_mb: number;
        temp_c: number;
        temp_f: number;
        uv: number;
        vis_km: number;
        vis_miles: number;
        wind_degree: number;
        wind_dir: String;
        wind_kph: number;
        wind_mph: number;
      }
    | undefined;
  activeTemp: number;
  setActiveTemp: (a: number) => void
}

const MainTemp: React.FC<MainTempProps> = ({ currentData, activeTemp, setActiveTemp }) => {
  // const [activeTemp, setActiveTemp] = useState(0);
  return (
    <div className="flex gap-5 mt-5 mb-1 flex-center">
      {currentData && (
        <>
          <Image
            src={`/assets/images/partly-cloudy-sun.svg`}
            height={90}
            width={90}
            alt="empt"
            className="object-contain"
          />

          <p className="text-white text-6xl font-bold">
            {activeTemp == 0
              ? `${currentData.temp_c}°`
              : `${Math.round(currentData.temp_f)}°`}
          </p>

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
