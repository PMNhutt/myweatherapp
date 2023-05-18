import Image from "next/image";
import { getAQIImg, getAQIText } from "@utils/getAQI";
import { AirQualProps } from "@utils/interface";

const AirQuality: React.FC<AirQualProps> = ({ airQualityData }) => {
  const pm2_5: number = airQualityData?.pm2_5!;
  const us_epa_index: number = airQualityData?.["us-epa-index"]!;

  const getAQIColorClass = (index: number) => {
    let className = "";
    switch (index) {
      case 1:
        className = "text-lime-300";
        break;
      case 2:
        className = "text-amber-400";
        break;
      case 3:
        className = "text-orange-500";
        break;
      case 4:
        className = "text-red-500";
        break;
      case 5:
        className = "text-purple-500";
        break;
      case 6:
        className = "text-amber-700";
        break;
      default:
        break;
    }
    return className;
  };
  return (
    <div className='md:w-fit w-full'>
      <p className="text-white font-medium text-2xl">Chất lượng không khí</p>
      {airQualityData && (
        <div className="glassmorphism-blue w-full mt-5">
          <div className="flex items-center gap-8">
            <div>
              <p className="text-white">
                PM2.5:{" "}
                <span className="font-semibold text-lg">
                  {Math.round(pm2_5)} (µg/m³)
                </span>
              </p>
              <div className='md:w-[200px]'>
                <p
                  className={`text-2xl ${getAQIColorClass(
                    us_epa_index
                  )} font-semibold mt-3`}
                >
                  {getAQIText(airQualityData?.["us-epa-index"])}
                </p>
              </div>
            </div>
            <div>
              <Image
                src={getAQIImg(airQualityData?.["us-epa-index"])}
                width={80}
                height={80}
                alt="condition"
                className="object-contain"
              />
            </div>
          </div>
          <button className="glassmorphism_btn mt-4">Tìm hiểu thêm</button>
        </div>
      )}
    </div>
  );
};

export default AirQuality;
