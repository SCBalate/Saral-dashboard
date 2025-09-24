import React from "react";
import "./customRange.css";

interface CustomRangeProps {
  value: number;
  setValue: (value: number) => void;
}

const CustomRange: React.FC<CustomRangeProps> = ({ value, setValue }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <input
        id="range"
        type="range"
        min={1}
        max={15}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))} // ✅ this must be exact
        className="w-full custom-range cursor-pointer"
      />
    </div>
  );
};

export default CustomRange;
