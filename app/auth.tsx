"use client";
import React, { useEffect } from "react";
import { auth } from "@/libs/firebase/auth";
import { useAppDispatch } from "@/libs/store/hooks";
import { set } from "@/libs/store/slices/user";
import { useAuthState } from "react-firebase-hooks/auth";
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
    dispatch(
      set({
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
      })
    );
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
