import React from "react";

interface Props {
  title: string;
  placement: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<Props> = ({ children, title, placement }) => {
  const getPlacement = (placement: string) => {
    let place = "";
    switch (placement) {
      case "top":
        place = "top-tooltip";
        break;
      case "left":
        place = "left-tooltip";
        break;
      case "bottom":
        place = "bottom-tooltip";
        break;
      case "right":
        place = "right-tooltip";
        break;
      default:
        break;
    }

    return place;
  };
  return (
    <div className="relative group">
      <span className={`${getPlacement(placement)} group-hover:scale-100`}>{title}</span>
      {children}
    </div>
  );
};

export default Tooltip;
