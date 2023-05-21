import React from "react";

import { DetailTempProps } from "@utils/interface";

const DetailTemp: React.FC<DetailTempProps> = ({ current }) => {
  // const { currentData } = props;

  return (
    <div className="text-white flex flex-col gap-3">
      <p>Mật độ mây <span className="font-semibold">{current?.cloud}%</span></p>
      <p>Mức độ UV <span className="font-semibold">{current?.uv}</span></p>

    </div>
  );
};

export default DetailTemp;
