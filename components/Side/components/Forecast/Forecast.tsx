"use client";
import ItemCard from "../ItemCard";
import { ForecastProps } from "@utils/interface";

const Forecast: React.FC<ForecastProps> = ({ forecastData }) => {
  // ** const

  return (
    <div>
      <p className="text-white font-medium text-2xl">Dự báo thời tiết</p>

      <div className="flex gap-3 mt-5">
        {forecastData &&
          forecastData.map((item) => (
            <div key={crypto.randomUUID()}>
              <ItemCard
                localTime={item.date}
                code={item.day.condition.code}
                max_temp_c={item.day.maxtemp_c}
                min_temp_c={item.day.mintemp_c}
                condition={item.day.condition.text}
                isday={item.day.is_day}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Forecast;
