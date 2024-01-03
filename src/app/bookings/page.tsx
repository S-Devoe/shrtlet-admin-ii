import Table, { TableColumnItem } from "@/components/table/table.component";
import React from "react";
import { Badge, Heading, Text } from "@chakra-ui/react";
import Button from "@/components/buttons/button";
import { numberToNaira } from "@/lib/currency";
import { format, parse } from "date-fns";
import clsx from "clsx";
import BackBtn from "@/components/buttons/backButton";

const data = {
  name: "Abdul Lanre",
  apartment: "Eko Atlantic Stays",
  paymentDate: "02/03/2023",
  checkIn: "10/04/2023",
  checkOut: "25/04/2023",
  amount: 1500,
  status: "pending",
};

const columns: TableColumnItem[] = [
  {
    ref: "name",
    header: "Guest Name",
    type: "string",
  },
  {
    ref: "apartment",
    header: "Apartment",
    type: "string",
  },
  {
    ref: "paymentDate",
    header: "Payment Date",
    type: "date",
  },
  {
    ref: "checkIn",
    header: "Check-In",
    type: "date",
  },
  {
    ref: "checkOut",
    header: "Check-Out",
    type: "date",
  },
  {
    ref: "amount",
    header: "Amount",
    type: "currency",
  },
  {
    ref: "status",
    header: "Booking Status",
    type: "string",
  },
];

export default function BookingsPage() {
  return (
    <main className="flex overflow-hidden min-h-full flex-col">
      <BackBtn />
      <section className="hidden md:flex p-6 pt-10 flex-col grow gap-6 overflow-auto">
        <Text
          fontWeight={"semibold"}
          className="text-primary-lighter"
          fontSize={"2xl"}
        >
          Recent Bookings
        </Text>
        <div className="grow overflow-auto">
          <Table data={Array(9).fill(data)} columns={columns} />
        </div>
        <div className="flex justify-center mt-16 gap-4">
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
      <section className="flex md:hidden mt-8 flex-col grow gap-2 overflow-auto ">
        <Text
          fontWeight={"bold"}
          className="text-primary-lighter"
          fontSize={"lg"}
        >
          Recent Bookings
        </Text>
        <div className="grow overflow-auto flex flex-col gap-4">
          {Array(7)
            .fill(data)
            .map((row, idx) => (
              <div
                key={idx}
                className="flex justify-between border-b border-gray-six px-[5px] py-[10px]"
              >
                <div className="flex flex-col justify-between">
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
                      "bg-brun-fainter text-brun": row.status === "approved",
                      "bg-red-100 text-red-600": row.status === "cancelled",
                    })}
                  >
                    {row.status}
                  </Badge>
                  <Text fontSize={"sm"}>{row.name}</Text>
                </div>
                <div className="flex items-end flex-col justify-between">
                  <div className="flex gap-[7px] items-center">
                    <Text className="text-sm font-medium">
                      {numberToNaira(row.amount)}
                    </Text>
                    <Text className="text-[10px] font-medium text-gray-five">
                      Paid{" "}
                      {format(
                        parse(row.paymentDate, "dd/MM/yyyy", new Date()),
                        "dd MMM"
                      )}
                    </Text>
                  </div>
                  <div className="flex gap-2 items-end">
                    <Text
                      className="text-sm font-medium"
                      fontSize={"xs"}
                      fontWeight={"bold"}
                    >
                      {row.apartment}
                    </Text>
                    <Text className="text-sm text-gray-five font-medium">
                      {format(
                        parse(row.checkIn, "dd/MM/yyyy", new Date()),
                        "dd MMM"
                      )}{" "}
                      -{" "}
                      {format(
                        parse(row.checkOut, "dd/MM/yyyy", new Date()),
                        "dd MMM"
                      )}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
        </div>
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
