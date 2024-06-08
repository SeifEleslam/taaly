import React from "react";

const CircularProgressBar = ({
  radius,
  progress,
  innerProgress = 0,
  innerRadius = 0,
  center,
  colors,
  sizes,
}: {
  radius: number;
  progress: number;
  innerProgress?: number;
  innerRadius?: number;
  center?: string | React.ReactNode;
  colors?: {
    primary?: string;
    secondary?: string;
    primaryBackground?: string;
    secondaryBackground?: string;

    font?: string;
  };
  sizes?: { stroke?: number; font?: number };
}) => {
  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);
  const innerCircumference = 2 * Math.PI * innerRadius;
  const innerDashOffset = innerCircumference * (1 - innerProgress);
  const x = radius * 2 + 40;

  return (
    <div className={`w-fit h-fit relative `}>
      <svg width={x} height={x}>
        {/* Circle background */}
        <circle
          cx={x / 2}
          cy={x / 2}
          r={radius}
          fill="transparent"
          stroke={colors?.primaryBackground ?? "#f0f0f0"}
          strokeWidth={sizes?.stroke ?? "8"}
        />
        {/* Progress circle */}
        <circle
          cx={x / 2}
          cy={x / 2}
          r={radius}
          fill="transparent"
          stroke={colors?.primary ?? "#4caf50"}
          strokeWidth={sizes?.stroke ?? "8"}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90, ${x / 2}, ${x / 2})`}
        />

        <circle
          cx={x / 2}
          cy={x / 2}
          r={innerRadius}
          fill="transparent"
          stroke={colors?.secondaryBackground ?? "#f0f0f0"}
          strokeWidth={sizes?.stroke ?? "8"}
        />
        {/* Inner progress circle */}
        <circle
          cx={x / 2}
          cy={x / 2}
          r={innerRadius}
          fill="transparent"
          stroke={colors?.secondary ?? "#4caf50"}
          strokeWidth={sizes?.stroke ?? "8"}
          strokeLinecap="round"
          strokeDasharray={innerCircumference}
          strokeDashoffset={innerDashOffset}
          transform={`rotate(-90, ${x / 2}, ${x / 2})`}
        />
        {/* Text in the center */}
        {/* <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3em"
          fill={colors?.font ?? "#000"}
          fontSize={sizes?.font ?? "20"}
        >
          {center}
        </text> */}
      </svg>
      <div
        className={`text-[${colors?.font}] text-[${sizes?.font}px] absolute w-full h-full top-0 left-0 flex justify-center items-center overflow-hidden`}
      >
        {center}
      </div>
    </div>
  );
};

export default CircularProgressBar;
