"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashboardNav({
  link,
}: {
  link: { name: string; href: string; icon: React.ReactNode };
}) {
  const pathname = usePathname();
  return (
    <li
      key={link.name}
      className={clsx(
        "py-4 px-6 rounded-2xl cursor-pointer",
        { "bg-orange text-white": pathname === link.href },
        {
          "bg-transparent text-black hover:bg-orange hover:text-white":
            pathname !== link.href,
        }
      )}
    >
      <Link className="w-full flex gap-2 items-center" href={link.href}>
        <span>{link.icon}</span>
        <span className="text-lg">{link.name}</span>
      </Link>
    </li>
  );
}
