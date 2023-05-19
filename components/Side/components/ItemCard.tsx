"use client";
import React from "react";
import Image from "next/image";
import { getWeatherImg } from "@utils/getWeatherMedia";
import { ItemProps } from "@utils/interface";
import Tooltip from "@components/Tooltip";

import dayjs from "dayjs";
require("dayjs/locale/vi");
dayjs.locale("vi");

const ItemCard: React.FC<ItemProps> = (props) => {
  const { localTime, code, max_temp_c, min_temp_c, condition, isday } = props;
  let localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);

  return (
    <div className="flex items-center flex-col">
      <p className="text-white font-medium capitalize">
        {dayjs(localTime).format("dddd")} {dayjs(localTime).format("D")}
      </p>
      <div className="mt-3 glassmorphism-blue flex items-center flex-col gap-2">
        <Image
          src={getWeatherImg(code, isday)}
          width={40}
          height={40}
          alt="weather"
          className="object-contain"
        />
        <div className="flex items-center gap-3 text-white">
          <Tooltip title="Nhiệt độ cao nhất" placement="top">
            <p className="text-xl font-medium">{Math.round(max_temp_c)}°</p>
          </Tooltip>
          <Tooltip title="Nhiệt độ thấp nhất" placement="top">
            <p>{Math.round(min_temp_c)}°</p>
          </Tooltip>
        </div>
        <p className="text-white">{condition}</p>
      </div>
    </div>
  );
};

export default ItemCard;
