import React from "react";
import { Badge, Heading, Text } from "@chakra-ui/react";
import BackBtn from "@/components/buttons/backButton";
import dataSource from "@/lib/data.json";
import Image from "next/image";
import clsx from "clsx";
import { numberToNaira } from "@/lib/currency";
import Button from "@/components/buttons/button";
import { format, parse } from "date-fns";

const bookingData = dataSource.booking;

export default function BookingsPage() {
  return (
    <main>
      <section>
        <BackBtn />
      </section>
      <section className="mt-6">
        <Text className="" fontWeight={"bold"} fontSize={"24px"}>
          Bookings
        </Text>
        <div className="grid grid-cols-2 mt-6 gap-x-20 gap-y-6">
          {Array(8)
            .fill(bookingData)
            .map((row, idx) => (
              <div
                key={idx}
                className="bg-gray-ten px-10 py-6 flex flex-col gap-2 rounded-2xl"
              >
                <Badge
                  px={"2"}
                  py={"0.5"}
                  borderRadius={"25"}
                  textTransform={"capitalize"}
                  fontWeight={"normal"}
                  fontSize={"xs"}
                  width={"fit-content"}
                  className={clsx({
                    "!bg-jasmine-fainter !text-jasmine-dark":
                      row.status === "pending",
                    "!bg-brun-fainter !text-brun": row.status === "approved",
                    "!bg-red-100 !text-red-600": row.status === "cancelled",
                  })}
                >
                  {row.status}
                </Badge>
                <div className="flex gap-2">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src={row.image}
                      alt={row.name}
                      width={56}
                      height={56}
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <Heading
                      fontWeight={"semibold"}
                      fontSize={"20px"}
                      className="text-primary-lighter"
                    >
                      {row.name}
                    </Heading>
                    <div className="flex gap-3">
                      <Text fontWeight={"medium"} fontSize={"14px"}>
                        {row.place}
                      </Text>
                      <Text fontWeight={"medium"} fontSize={"14px"}>
                        {format(
                          parse(row.checkIn, "yyyy-MM-dd", new Date()),
                          "LLL dd"
                        ) +
                          " - " +
                          format(
                            parse(row.checkOut, "yyyy-MM-dd", new Date()),
                            "LLL dd"
                          )}{" "}
                      </Text>
                    </div>
                    <Text fontWeight={"medium"} fontSize={"14px"}>
                      {row.guests} Guests
                    </Text>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Text
                    fontSize={"12px"}
                    fontWeight={"normal"}
                    className="flex items-center gap-0.5"
                  >
                    <Text
                      className="text-gray-two"
                      fontWeight={"bold"}
                      fontSize={"18px"}
                    >
                      {numberToNaira(row.price)}
                    </Text>{" "}
                    booking fee
                  </Text>
                  <Text
                    fontSize={"12px"}
                    fontWeight={"normal"}
                    className="flex items-center gap-0.5"
                  >
                    <Text
                      className="text-gray-two"
                      fontWeight={"bold"}
                      fontSize={"18px"}
                    >
                      {numberToNaira(row.caution)}
                    </Text>{" "}
                    refundable caution
                  </Text>
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
