import type { Metadata } from "next";
import { sans, serif } from "./fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import "./globals.css";
//Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import DashboardLayout from "@/layouts/dashboard.layout";

export const metadata: Metadata = {
  title: "Shortlet Admin",
  description: "Shortlet App - Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(serif.variable, sans.variable)}>
      <body className={"relative"}>
        <Providers>
          <DashboardLayout>{children}</DashboardLayout>
        </Providers>
      </body>
    </html>
  );
}
