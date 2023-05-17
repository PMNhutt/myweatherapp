"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import instances from "@utils/axios";

// ** components
import MainTemp from "./components/MainTemp";

interface currentData {
  current: {
    cloud: number;
    condition: {
      code: number;
      icon: String;
      text: String;
    };
    feelslike_c: number;
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
  };
  location: {
    country: String;
    lat: number;
    localtime: String;
    localtime_epoch: number;
    lon: number;
    name: String;
    region: String;
    tz_id: String;
  };
}

const Main = () => {
  // ** const
  const [currentData, setCurrentData] = useState<currentData>();
  const [activeTemp, setActiveTemp] = useState(0);

  // ** get current weather
  useEffect(() => {
    const fetchData = async () => {
      const res = await instances.get("/current.json", {
        params: {
          q: "Ho Chi Minh",
          lang: "en",
          key: process.env.API_KEY,
        },
      });
      setCurrentData(res.data);
    };
    fetchData();

    const handler = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(handler);
  }, []);

  return (
    <div className=" glassmorphism-blue">
      {/* location */}
      <h1 className="text-white text-center font-bold text-4xl ">
        Ho Chi Minh City
      </h1>
      {/* temp */}
      <div>
        <MainTemp
          currentData={currentData?.current}
          activeTemp={activeTemp}
          setActiveTemp={setActiveTemp}
        />
        <p className="text-white text-center font-bold text-xl">
          {currentData?.current?.condition?.text}
        </p>
        <p className="text-white text-center font-normal my-3">
          Cập nhật vào lúc {currentData?.current?.last_updated.split(" ")[1]}{" "}
          {currentData?.current?.is_day == 1 ? "AM" : "PM"}
        </p>
        <div className="flex gap-10">
          <p className="text-white text-center font-normal my-3">
            Cảm nhận{" "}
            <span className="font-semibold">
              {currentData?.current?.feelslike_c}°
            </span>
          </p>
          <p className="text-white text-center font-normal my-3">
            Độ ẩm{" "}
            <span className="font-semibold">
              {currentData?.current?.humidity}%
            </span>
          </p>
          <p className="text-white text-center font-normal my-3">
            Gió{" "}
            <span className="font-semibold">
              {activeTemp == 0 ? `${currentData?.current?.wind_kph} km/h` : `${currentData?.current?.wind_mph} dặm/giờ`} 
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
