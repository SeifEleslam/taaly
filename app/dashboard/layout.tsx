"use client";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import header_logo from "@/assets/header_logo.png";
import user_img from "@/assets/user.jpg";
import { signOut } from "@/libs/firebase/auth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <button onClick={() => signOut()}>signout</button>
      <div className="flex  flex-col gap-4 max-w-full  h-screen max-h-screen  p-4">
        <div className="bg-[#E9E6F8] h-[100px] rounded-lg">
          <div className="flex justify-between gap-4 items-center p-4">
            <Image alt="header logo" src={header_logo} />
            <div className="flex-grow flex justify-center items-center text-xl">
              <div className=" w-full max-w-[400px] relative">
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
        <div className="rounded-lg h-[calc(100%-100px-1rem)]">{children}</div>
      </div>
    </div>
  );
}
