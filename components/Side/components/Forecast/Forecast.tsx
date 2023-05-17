"use client";
import { useState, useEffect } from "react";
import instances from "@utils/axios";
import Image from "next/image";

const ForecastCard = () => {
  return (
    <div className='flex items-center flex-col'>
      <p className="text-white font-medium">thứ sáu 19</p>
      <div className="mt-3 glassmorphism-blue flex items-center flex-col gap-2">
        <Image
          src="/assets/images/cloudy-day.png"
          width={40}
          height={40}
          alt="weather"
          className="object-contain"
        />
        <div className="flex items-center gap-3 text-white">
          <p className="text-xl font-medium">31°</p>
          <p>32°</p>
        </div>
        <p className='text-white'>Mây nhìu</p>
      </div>
    </div>
  );
};

const Forecast = () => {
  // ** const
  const [forecastList, setForecastList] = useState([]);

  return (
    <div>
      <p className="text-white font-medium text-2xl">Dự báo thời tiết</p>

      <div className="flex gap-3 mt-5">
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </div>
    </div>
  );
};

export default Forecast;
