"use client";
import { bookingTab } from "@/components/page-contents/payments/PaymentPageContent";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
export default function PaymentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useSearchParams();
  const activeTab = params.get("tabValue");
  const { push } = useRouter();
  return (
    <div className="flex flex-col flex-1">
      <section className="hidden md:flex items-center w-full overflow-x-scroll hide-scroll md:justify-center">
        {bookingTab.map((item, i) => (
          <div
            onClick={() => push(`/payments?tabValue=${item.value}`)}
            className={`whitespace-nowrap cursor-pointer select-none capitalize px-8 pt-2 pb-4 font-medium text-base border-b ${
              activeTab === item.value
                ? "text-orange border-b-orange"
                : " text-gray-three border-b-gray-three"
            } `}
            key={`tab-${i + 1}`}
          >
            {item.label}
          </div>
        ))}
      </section>
      <div className="mt-4">{children}</div>
    </div>
  );
}
