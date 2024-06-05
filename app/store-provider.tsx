"use client";
import { Provider } from "react-redux";
import { store } from "@/libs/store/store";

export default function StoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Provider store={store}>{children}</Provider>;
}
