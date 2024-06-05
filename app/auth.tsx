"use client";
import React, { useEffect, useState } from "react";
import { auth, onAuthChanged } from "@/libs/firebase/auth";
import { useAppSelector, useAppDispatch } from "@/libs/store/hooks";
import { set } from "@/libs/store/slices/user";
import { useAuthState } from "react-firebase-hooks/auth";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Loader from "./components/loader";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, loading] = useAuthState(auth);
  // const authRedirect = ()=>
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(user, pathname);
    dispatch(set(user));
    if (user && (pathname.includes("login") || pathname === "/"))
      router.replace("/dashboard");
    else if (!user && !pathname.includes("login")) router.replace("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, user]);

  return (
    <>
      {!loading && !(user && pathname.includes("login")) && children}
      {loading && <Loader />}
    </>
  );
}
