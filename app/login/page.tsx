"use client";
import React, { useState } from "react";
import { signin } from "@/libs/firebase/auth";
import Image from "next/image";
import logo from "@/assets/logo.png";
import bg from "@/assets/bg1.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const { user } = await signin(email, password);
      console.log(user);
      router.push("/dashboard");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex w-[100vw] h-[100vh] justify-center items-center px-2 bg-[#E9E6F8] ">
        <div className="flex max-h-full h-[746px] w-[1269px] max-w-full bg-white rounded-xl">
          <div className="w-full h-full flex justify-center items-center px-4 bg-[#1E00B9] rounded-xl">
            <div className="flex flex-col justify-center items-center gap-8 px-4">
              <Image alt="logo" src={logo} />
              <p className="font-bold text-white text-2xl text-center max-w-[449px]">
                ‘Het verbinden van nieuwkomers met de samenleving door hun taal
                te verbeteren’
              </p>
            </div>
          </div>
          <div className="w-full h-full flex justify-center relative">
            <div className="mt-16 max-w-[428.03px]">
              <p className="text-4xl mb-4">Welcome to Taaly!</p>
              <p className="text-2xl mb-4">Login Here</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="text-xl">Email</label>
                  <input
                    className="w-full border-gray rounded-lg border-[2px] p-2 text-lg"
                    placeholder="Example@mail.com"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="text-xl">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className=" border-[2px] p-2 text-lg py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute top-0 end-0 p-3.5 rounded-e-md"
                      onClick={() => setShowPassword((prv) => !prv)}
                    >
                      {showPassword ? (
                        <FaEye className="text-gary-400" color="gray" />
                      ) : (
                        <FaEyeSlash className="text-gary-400" color="gray" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="py-4 text-lg text-white font-bold bg-[#1E00B9] rounded-lg px-8"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <Image alt="bg" src={bg} className="absolute bottom-0 z-0" />
          </div>
        </div>
      </div>
    </>
  );
}
