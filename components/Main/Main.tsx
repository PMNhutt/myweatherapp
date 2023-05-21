"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import instances from "@utils/axios";
import { currentData } from "@utils/interface";

//** redux */
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@app/Redux/store";
import { setCurrentWeatherData } from "@app/Redux/actionSlice/globalSlice";

// ** components
import MainTemp from "./components/MainTemp";
import DetailTemp from "./components/DetailTemp";

const Main = () => {
  // ** const
  const globalStore = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();

  const [currentData, setCurrentData] = useState<currentData>();
  const [activeTemp, setActiveTemp] = useState(0);

  // ** get current weather
  useEffect(() => {
    const fetchData = async () => {
      const res = await instances.get("/current.json", {
        params: {
          q: "Dong Hung Thuan",
          lang: "vi",
          key: process.env.API_KEY,
        },
      });
      setCurrentData(res.data);
      dispatch(setCurrentWeatherData(res.data));
    };
    fetchData();

    const handler = setInterval(() => {
      fetchData();
    }, 300000);

    return () => clearInterval(handler);
  }, []);

  return (
    <div className="w-full flex-center">
      <div className="glassmorphism-blue flex-center flex-col">
        {currentData ? (
          <>
            {/* temp */}
            <div className="flex items-center gap-10">
              <MainTemp
                currentData={currentData?.current}
                activeTemp={activeTemp}
                setActiveTemp={setActiveTemp}
              />
              <DetailTemp current={currentData?.current} />
            </div>
          </>
        ) : (
          <>
            <p className="text-white font-medium py-5">
              Đang cập nhật dữ liệu...
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
