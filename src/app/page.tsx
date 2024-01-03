import Button from "@/components/buttons/button";
import Table, { TableColumnItem } from "@/components/table/table.component";
import GuestsIcon from "@/icons/guests.icon";
import HostsIcon from "@/icons/hosts.icon";
import ListingsIcon from "@/icons/listings.icon";
import { numberToNaira } from "@/lib/currency";
import { Badge, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import clsx from "clsx";
import { format, parse } from "date-fns";
import Link from "next/link";

const stats = [
  {
    name: "Hosts",
    icon: <HostsIcon className="w-4 h-4 md:w-4 md:h-6" />,
    count: 200,
    increment: 20,
  },
  {
    name: "Guests",
    icon: <GuestsIcon className="w-4 h-4 md:w-4 md:h-6" />,
    count: 1000,
    increment: 20,
  },
  {
    name: "Listings",
    icon: <ListingsIcon className="w-4 h-4 md:w-4 md:h-6" />,
    count: 50,
    increment: 20,
  },
];

const data = [
  {
    name: "Abdul Lanre",
    apartment: "Eko Atlantic Stays",
    paymentDate: "02/03/2023",
    checkIn: "10/04/2023",
    checkOut: "25/04/2023",
    amount: 1500,
    status: "pending",
  },
  {
    name: "Abdul Lanre",
    apartment: "Eko Atlantic Stays",
    paymentDate: "02/03/2023",
    checkIn: "10/04/2023",
    checkOut: "25/04/2023",
    amount: 1500,
    status: "pending",
  },
  {
    name: "Abdul Lanre",
    apartment: "Eko Atlantic Stays",
    paymentDate: "02/03/2023",
    checkIn: "10/04/2023",
    checkOut: "25/04/2023",
    amount: 1500,
    status: "pending",
  },
  {
    name: "Abdul Lanre",
    apartment: "Eko Atlantic Stays",
    paymentDate: "02/03/2023",
    checkIn: "10/04/2023",
    checkOut: "25/04/2023",
    amount: 1500,
    status: "pending",
  },
  {
    name: "Abdul Lanre",
    apartment: "Eko Atlantic Stays",
    paymentDate: "02/03/2023",
    checkIn: "10/04/2023",
    checkOut: "25/04/2023",
    amount: 1500,
    status: "pending",
  },
];

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
export default function Home() {
  return (
    <main className="flex overflow-hidden min-h-full flex-col">
      <section className="mb-6 shrink-0">
        <Heading
          fontSize={{ base: "20px", md: "24px" }}
          fontWeight={"semibold"}
          className="text-primary"
        >
          Howdy, <span className="font-serif text-primary-lighter">Admin</span>
        </Heading>
        <Text fontWeight={"normal"} fontSize={{ base: "12px", md: "md" }}>
          Here&apos;s what&apos;s happening on your dashboard today
        </Text>
      </section>
      <section className="flex gap-2 md:gap-[71px] max-w-full shrink-0 md:overflow-x-auto">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="flex flex-col items-start justify-center gap-2 px-3 md:px-10 py-2 md:py-4 bg-brun-primary-fainter rounded-2xl md:grow"
          >
            <Heading
              className="text-primary-lighter"
              fontSize={{ base: "30px", md: "2.5rem" }}
            >
              {stat.count}
            </Heading>
            <div className="flex flex-col items-start justify-start mt-0.5 md:mt-2">
              <div className="flex gap-1 md:gap-2 text-primary-lighter items-center">
                <span className="w-fit">{stat.icon}</span>
                <Text
                  className="text-primary-lighter"
                  fontSize={{ base: "14px", md: "md" }}
                  fontWeight={"bold"}
                >
                  {stat.name}
                </Text>
              </div>
              <Text
                fontSize={{ base: "9.5px", md: "sm" }}
                fontWeight={"medium"}
                className="text-primary-lighter shrink-0"
                whiteSpace={"nowrap"}
              >
                +{stat.increment}% this month
              </Text>
            </div>
          </div>
        ))}
      </section>
      <section className="hidden md:flex mt-10 p-6 pt-10 flex-col grow gap-6 overflow-auto">
        <Text
          fontWeight={"semibold"}
          className="text-primary-lighter"
          fontSize={"2xl"}
        >
          Recent Bookings
        </Text>
        <div className="grow overflow-auto">
          <Table data={data} columns={columns} />
        </div>
        <div className="flex justify-end mt-4">
          <LinkBox>
            <LinkOverlay as={Link} href="/bookings">
              <Button
                className={"font-bold"}
                text="View all recent bookings"
                height="large"
              />
            </LinkOverlay>
          </LinkBox>
        </div>
      </section>
      <section className="flex md:hidden mt-8 flex-col grow gap-2 overflow-auto">
        <Text
          fontWeight={"bold"}
          className="text-primary-lighter"
          fontSize={"lg"}
        >
          Recent Bookings
        </Text>
        <div className="grow overflow-auto">
          {data.map((row, idx) => (
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
        <div className="flex justify-end mt-4">
          <LinkBox w={"100%"}>
            <LinkOverlay as={Link} href="/bookings" className="w-full">
              <Button
                className={"!font-bold !text-base !text-white"}
                text="View all recent bookings"
                height="large"
                width="full"
              />
            </LinkOverlay>
          </LinkBox>
        </div>
      </section>
    </main>
  );
}
