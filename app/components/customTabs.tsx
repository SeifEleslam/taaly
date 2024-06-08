import React, { useState } from "react";

export default function CustomTabs({
  className,
  tabs,
}: {
  className: string;
  tabs: { title: string; component: React.ReactNode }[];
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className={`${className} w-full rounded-xl p-4`}>
      <div className="flex w-full divide-x-2 items-stretch">
        {tabs.map((tab) => (
          <div key={tab.title} className="px-4">
            <button
              onClick={() => setActiveTab(tab)}
              className={`p-4 border-b-[2px] text-xl h-full ${
                activeTab.title === tab.title
                  ? "border-b-[#1E00B9] text-[#1E00B9]"
                  : "border-b-[#aaa] text-[#aaa]"
              }`}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      <div className="px-4 mt-8 ">{activeTab.component}</div>
    </div>
  );
}
