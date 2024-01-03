import React from "react";
import Image from "next/image";
import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Button from "@/components/buttons/button";
import { numberToNaira } from "@/lib/currency";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import clsx from "clsx";
import BackBtn from "@/components/buttons/backButton";

const transactions = [
  {
    status: "pending",
    amount: 123,
    date: "10/02/2023",
    name: "Eko Atlantic Stays",
    city: "Lagos",
    start: "11/1/2023",
    end: "12/21/2023",
    image: "/listing/atlantic.png",
  },
  {
    status: "failed",
    amount: 123,
    date: "10/02/2023",
    name: "Eko Atlantic Stays",
    city: "Lagos",
    start: "11/1/2023",
    end: "12/21/2023",
    image: "/listing/atlantic.png",
  },
  {
    status: "failed",
    amount: 123,
    date: "10/02/2023",
    name: "Eko Atlantic Stays",
    city: "Lagos",
    start: "11/1/2023",
    end: "12/21/2023",
    image: "/listing/atlantic.png",
  },
  {
    status: "success",
    amount: 123,
    date: "10/02/2023",
    name: "Eko Atlantic Stays",
    city: "Lagos",
    start: "11/1/2023",
    end: "12/21/2023",
    image: "/listing/atlantic.png",
  },
];

const balances = [
  {
    text: "Total Balance",
    amount: 20323,
    sub: "This is your total balance in your wallet",
    className: "bg-gray-ten text-primary grow",
  },
  {
    text: "Available Balance",
    amount: 20323,
    sub: "This is your withdrawable balance in your wallet",
    className: "bg-gray-ten text-primary grow",
  },
];

export default function HostTransactionsPage() {
  return (
    <main>
      <section>
        <BackBtn />
      </section>
      <section className="mt-6">
        <Text className="" fontWeight={"bold"} fontSize={"24px"}>
          Transactions
        </Text>
        <div className="flex gap-10 mt-6">
          {balances.map(({ amount, className, sub, text }, idx) => (
            <div
              key={idx}
              className="grow max-w-[332px] mb-2 md:mb-0 text-center md:text-left"
            >
              <div className={cn("rounded-lg p-4", className)}>
                <div>
                  <div>
                    <p className="text-sm font-medium">{text}</p>
                    <Heading
                      className="mt-0"
                      fontWeight={"600"}
                      fontSize={"24px"}
                    >
                      {numberToNaira(amount, true)}
                    </Heading>
                    <Text fontSize={"12px"} fontWeight={"normal"}>
                      {sub}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          {transactions
            .map(({ date, start, end, ...rest }) => ({
              ...rest,
              date: new Date(date),
              start: new Date(start),
              end: new Date(end),
            }))
            .map(({ status, amount, date, name, image }, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-2 mb-5 border-b border-gray-six"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-gray-ten overflow-hidden p-4 w-20 h-20 relative">
                    <Image src={image} alt="atlantic" fill={true} />
                  </div>
                  <div>
                    <div
                      className={cn(
                        `rounded-[100px] px-2 border border-white w-fit capitalize`,
                        status === "pending" &&
                          "bg-jasmine-fainter !text-jasmine",
                        status === "failed" && "bg-red-fainter !text-red-dark",
                        status === "success" && "bg-brun-fainter !text-brun"
                      )}
                    >
                      <Text fontSize={"12px"} fontWeight={"normal"}>
                        {status}
                      </Text>
                    </div>
                    <Text fontSize={"12px"} fontWeight={"normal"}>
                      {name}
                    </Text>
                  </div>
                </div>
                <div className="gap-4">
                  <div className="flex gap-1.5 justify-end items-center">
                    <Text fontSize={"14px"} fontWeight={"medium"}>
                      {numberToNaira(amount, true)}
                    </Text>
                    <Text fontSize={"12px"} fontWeight={"normal"}>
                      Paid {format(date, "dd LLL")}
                    </Text>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Text fontSize={"12px"} fontWeight={"normal"}>
                      Booking Payment
                    </Text>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section>
        <div className="flex justify-center mt-8 gap-4">
          <Button
            className={"font-bold text-base"}
            text="Previous"
            disabled={true}
          />
          <div className="flex gap-2 items-center cursor-pointer">
            {Array.from(Array(2)).map((_, idx) => (
              <div
                key={idx}
                className={clsx(
                  "rounded-lg border px-4 py-2 flex items-center select-none",
                  {
                    "border-orange text-orange": idx === 0,
                    "border-gray-six": idx !== 0,
                  }
                )}
              >
                {idx + 1}
              </div>
            ))}
          </div>
          <Button
            className={"font-bold text-base"}
            text="Next"
            width="medium"
          />
        </div>
      </section>
    </main>
  );
}
