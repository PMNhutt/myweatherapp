import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white mt-20 relative w-full z-20 glassmorphism-footer">
      <div className="flex-center">
        <div className="container md:px-24 px-6 pt-10 ">
          <div className="flex items-center gap-5">
            <p className="font-normal">Dữ liệu được lấy từ</p>
            <a
              target="_blank"
              href="https://www.weatherapi.com/"
              title="Free Weather API"
            >
              <div className="bg-white rounded-full object-contain p-2">
                <Image
                  src="https://cdn.weatherapi.com/v4/images/weatherapi_logo.png"
                  width={70}
                  height={70}
                  alt="Weather data by WeatherAPI.com"
                />
              </div>
            </a>
          </div>

          <div className='text-center mb-5 mt-10'>
            <p className='text-[14px]'>Phát triển bởi NhutPM | {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
