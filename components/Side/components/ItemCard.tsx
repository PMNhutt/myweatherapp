"use client";
import React from "react";
import Image from "next/image";
import { getWeatherImg } from "@utils/getWeatherImg";

interface ItemProps {
  localTime: string;
  code: number;
  max_temp_c: number;
  min_temp_c: number;
  condition: string;
  isday: number
}

const ItemCard: React.FC<ItemProps> = (props) => {
  const { localTime, code, max_temp_c, min_temp_c, condition, isday } = props;
  return (
    <div className="flex items-center flex-col">
      <p className="text-white font-medium">{localTime}</p>
      <div className="mt-3 glassmorphism-blue flex items-center flex-col gap-2">
        <Image
          src={getWeatherImg(code, isday)}
          width={40}
          height={40}
          alt="weather"
          className="object-contain"
        />
        <div className="flex items-center gap-3 text-white">
          <p className="text-xl font-medium">{Math.round(max_temp_c)}°</p>
          <p>{Math.round(min_temp_c)}°</p>
        </div>
        <p className="text-white">{condition}</p>
      </div>
    </div>
  );
};

export default ItemCard;
