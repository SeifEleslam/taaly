"use client";
import { signOut } from "@/libs/firebase/auth";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import header_logo from "@/assets/header_logo.png";
import user_img from "@/assets/user.jpg";
import { IoMdNotifications } from "react-icons/io";
import { MdScreenshotMonitor } from "react-icons/md";
import { LuUsers } from "react-icons/lu";

export default function Dashboard() {
  return (
    <div>
      <button onClick={() => signOut()}>signout</button>
      <div className="max-w-full">
        <div className="flex flex-col gap-4 h-screen scroll-y-auto p-4">
          <div className="bg-[#E9E6F8] h-[100px] rounded-lg">
            <div className="flex justify-between gap-4 items-center p-4">
              <Image alt="header logo" src={header_logo} />
              <div className="flex-grow flex justify-center items-center text-xl">
                <div className="relative w-full max-w-[400px]">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full px-4  py-2.5"
                    placeholder="Search ..."
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                  >
                    <CiSearch color="gray" size={20} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <IoMdNotifications color="gray" size={30} />

                <p className="text-2xl font-bold ">Hi, name</p>
                <Image
                  src={user_img}
                  height={77}
                  className="aspect-square rounded-full h-full"
                  alt="profile image"
                />
              </div>
            </div>
          </div>
          <div className=" flex-grow rounded-lg">
            <div className="flex h-full gap-4">
              <div className="w-[270px] h-full bg-[#E9E6F8] rounded-lg">
                <div className="flex flex-col ">
                  {[
                    {
                      title: "Monitoring",
                      id: 1,
                      icon: <MdScreenshotMonitor size={40} />,
                    },
                    {
                      title: "Matching",
                      id: 2,
                      icon: <LuUsers size={40} />,
                    },
                  ].map((itm) => (
                    <div
                      className="flex gap-2  items-center p-4  rounded-xl"
                      key={itm.id}
                    >
                      {itm.icon}
                      <div className="text-2xl font-bold">{itm.title}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-grow h-full bg-[#E9E6F8] rounded-lg"></div>
              <div className="w-[270px] h-full bg-[#E9E6F8] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
