"use client";
import { useState, useEffect } from "react";
import instances from "@utils/axios";
import Image from "next/image";
import ItemCard from "../ItemCard";

const History = () => {
  // ** const
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <p className="text-white font-medium text-2xl">Thời tiết những ngày vừa qua</p>

      <div className="flex gap-3 mt-5">
        <ItemCard
          localTime={"ad"}
          code={20}
          max_temp_c={20}
          min_temp_c={20}
          condition={"ad"}
          isday={1}
        />
      </div>
    </div>
  );
}

export default History