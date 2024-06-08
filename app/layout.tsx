import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./store-provider";
import AuthLayout from "./auth";
import { Baloo_Bhai_2 } from "next/font/google";
const baloo = Baloo_Bhai_2({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taaly",
  description: "Taaly hohoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baloo.className}>
        <StoreProvider>
          <AuthLayout>{children}</AuthLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
