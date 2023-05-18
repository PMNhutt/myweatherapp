"use client";
import ItemCard from "../ItemCard";

interface ForecastProps {
  forecastData:
    | [
        {
          date: string;
          day: {
            condition: {
              text: string;
              code: number;
            };
            maxtemp_c: number;
            maxtemp_f: number;
            mintemp_c: number;
            mintemp_f: number;
            uv: number;
            is_day: number
            avghumidity: number;
            avgtemp_c: number;
            avgtemp_f: number;
            avgvis_km: number;
            avgvis_miles: number;
          };
        }
      ]
    | undefined;
}

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
