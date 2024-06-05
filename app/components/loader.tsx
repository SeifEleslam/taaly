import { VscLoading } from "react-icons/vsc";
import React from "react";

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen  bg-opacity-70 flex justify-center items-center z-50">
      <VscLoading color="#1E00B9" size={220} className="animate-spin" />
    </div>
  );
}
