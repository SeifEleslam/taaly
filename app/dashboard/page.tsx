"use client";
import React, { useEffect, useState } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdScreenshotMonitor } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";
import { FaUniversity } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomStatisticsCard from "../components/customStatisticsCard";
import CustomTabs from "../components/customTabs";
import CustomTable from "../components/customTable";
import { getDocsByFilters } from "@/libs/firebase/db";
import { DocumentData } from "firebase/firestore";
import CircularProgressBar from "../components/progressbar";

export default function Dashboard() {
  const pathname = usePathname();
  const [learners, setLearners] = useState<DocumentData[]>([]);
  const sidebarSettings = [
    {
      title: "Settings",
      link: "#",
      id: 7,
      icon: <CiSettings size={40} />,
    },
    {
      title: "Help",
      link: "#",
      id: 8,
      icon: <IoIosHelpCircleOutline size={40} />,
    },
  ];
  const sidebarPages = [
    {
      title: "Monitoring",
      link: "/dashboard",
      id: 1,
      icon: <MdScreenshotMonitor size={40} />,
    },
    {
      title: "Matching",
      link: "#",
      id: 2,
      icon: <LuUsers size={40} />,
    },
    {
      title: "Reporting",
      link: "#",
      id: 3,
      icon: <TbReportAnalytics size={40} />,
    },
    {
      title: "Organizations",
      link: "#",
      id: 4,
      icon: <FaUniversity size={40} />,
    },
    {
      title: "Projects",
      link: "#",
      id: 5,
      icon: <GiGraduateCap size={40} />,
    },
    {
      title: "Learning tracks",
      link: "#",
      id: 6,
      icon: <IoBookOutline size={40} />,
    },
  ];

  useEffect(() => {
    getDocsByFilters("learners").then((data) => {
      console.log(data);

      setLearners(data ?? []);
    });
  }, []);
  return (
    <div className="flex h-full gap-4">
      <div className="w-[270px] h-full bg-[#E9E6F8]  p-4 overflow-y-auto rounded-lg">
        <div className="flex-col h-full h-full flex gap-4">
          <div className="flex  flex-col  ">
            {sidebarPages.map((itm) => (
              <Link
                href={itm.link}
                className={`${
                  pathname.includes(itm.link)
                    ? "bg-[#1E00B9] text-white"
                    : "text-black"
                } flex gap-2  items-center p-4  rounded-xl`}
                key={itm.id}
              >
                {itm.icon}
                <p className="text-2xl font-bold">{itm.title}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col flex-auto justify-center">
            {sidebarSettings.map((itm) => (
              <Link
                href={itm.link}
                className="flex gap-2  items-center p-4  rounded-xl"
                key={itm.id}
              >
                {itm.icon}
                <p className="text-2xl font-bold">{itm.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-grow h-full bg-[#E9E6F8] overflow-y-auto rounded-lg p-12 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2 items-center justify-around ">
          <CustomStatisticsCard
            className={"w-[230px]"}
            icon={<LuUsers size={60} className="p-3 bg-white rounded-full" />}
            title={"Total Learners"}
            number={12}
          />
          <CustomStatisticsCard
            className={"w-[230px]"}
            icon={<LuUsers size={60} className="p-3 bg-white rounded-full" />}
            title={"Total Buddies"}
            number={12}
          />
          <CustomStatisticsCard
            className={"w-[230px]"}
            icon={
              <FaUniversity size={60} className="p-3 bg-white rounded-full" />
            }
            title={"Total Organizations"}
            number={12}
          />
          <CustomStatisticsCard
            className={"w-[230px]"}
            icon={
              <GiGraduateCap size={60} className="p-3 bg-white rounded-full" />
            }
            title={"Total Projects"}
            number={12}
          />
        </div>

        <div>
          <CustomTabs
            key={JSON.stringify(learners)}
            className="bg-white "
            tabs={[
              {
                title: "Learners",
                component: (
                  <CustomTable
                    cols={[
                      { title: "Name", key: "name" },
                      { title: "Email", key: "email" },
                      { title: "Rate", key: "rate", type: "progress" },
                    ]}
                    values={learners}
                    key={JSON.stringify(learners)}
                  />
                ),
              },
              {
                title: "Language Buddies",
                component: <>test2</>,
              },
            ]}
          />
        </div>
      </div>
      <div className="w-[270px] h-full flex flex-col gap-4 overflow-y-auto">
        <div className="bg-[#E9E6F8] rounded-lg p-4 ">
          <h2 className="text-lg font-bold text-[#1E00B9]">
            Overall Activities
          </h2>
          <p>Hours spent by organizations starting from January</p>
          <div className="flex justify-center">
            <CircularProgressBar
              radius={60}
              progress={0.75}
              colors={{
                primary: "#1E00B9",
                primaryBackground: "#988ADF",
                font: "#1E00B9",
              }}
              center={
                <p className="text-xl text-center font-bold">
                  200
                  <br />
                  hours
                </p>
              }
              sizes={{ stroke: 6, font: 20 }}
            />
          </div>
        </div>
        <div className="bg-[#E9E6F8] rounded-lg p-4 ">
          <h2 className="text-lg font-bold text-[#1E00B9]">Attendance</h2>
          <div className="flex justify-center">
            <CircularProgressBar
              radius={90}
              progress={0.91}
              innerProgress={0.95}
              innerRadius={60}
              colors={{
                primary: "#1E00B9",
                secondary: "#B4E13C",
                primaryBackground: "#988ADF",
                secondaryBackground: "#DDF1A5",
                font: "#1E00B9",
              }}
              center={<LuUsers color="gray" size={40} />}
              sizes={{ stroke: 8, font: 20 }}
            />
          </div>
          <div className="flex items-stretch text-center">
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-lg font-bold text-[#aaa]">Learners</p>
              <p className="text-2xl font-bold text-[#1E00B9]">91%</p>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-lg font-bold text-[#aaa]">Language Buddies</p>
              <p className="text-2xl font-bold text-[#B4E13C]">95%</p>
            </div>
          </div>
        </div>
        <div className="bg-[#1E00B9] rounded-lg p-4 text-center flex flex-col justify-center gap-2 items-center">
          <CiSettings size={40} color="#FFF" />
          <p className="text-2xl text-white font-bold">Manage Organizations</p>
        </div>
      </div>
    </div>
  );
}
