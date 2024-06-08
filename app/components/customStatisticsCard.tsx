import React from "react";

export default function CustomStatisticsCard({
  className,
  icon,
  title,
  number,
}: {
  className: string;
  icon: React.ReactNode;
  title: string;
  number: number;
}) {
  return (
    <div
      className={`${className} rounded-lg bg-[#1E00B9] py-2 px-5 flex gap-4 items-center`}
    >
      <div className="">{icon}</div>
      <div className="flex flex-col gap-2 flex-grow">
        <div className="text-white text-xl">{title}</div>
        <div className="text-white text-2xl">{number}</div>
      </div>
    </div>
  );
}
