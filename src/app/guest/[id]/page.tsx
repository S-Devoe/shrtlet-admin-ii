import React from "react";
import dataSource from "@/lib/data.json";
import Image from "next/image";
import EmailIcon from "@/icons/emailIcon";
import PhoneIcon from "@/icons/phoneIcon";
import {
  Badge,
  Heading,
  LinkBox,
  LinkOverlay,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Button from "@/components/buttons/button";
import BackBtn from "@/components/buttons/backButton";
import clsx from "clsx";
import { numberToNaira } from "@/lib/currency";
import { cn } from "@/lib/utils";
import { format, parse } from "date-fns";

const data = dataSource.userData;
const bookingData = dataSource.booking;
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
];
export default function GuestPage({ params }: { params: { id: string } }) {
  return (
    <main className="flex overflow-hidden min-h-full flex-col">
      <section>
        <BackBtn />
      </section>
      <section className="flex flex-col gap-4 md:flex-row justify-between md:items-center mt-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-5">
            <div className="rounded-full overflow-hidden">
              <Image
                width={44}
                height={44}
                src={data.image}
                alt="profile image"
              />
            </div>
            <div className="flex flex-col justify-between">
              <Heading
                className="text-primary-lighter"
                fontSize={{ base: "15px", md: "24px" }}
              >
                {data.firstname}
              </Heading>
              <Heading fontSize={{ base: "12px", md: "lg" }}>
                {data.surname}
              </Heading>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center justify-end md:justify-start">
              <EmailIcon className="shrink-0 w-3 md:w-auto" />
              <Text
                className="text-gray-two md:text-gray-four ml-0.5"
                overflowWrap={"anywhere"}
                fontSize={{ base: "12px", md: "14px" }}
              >
                {data.email}
              </Text>
            </div>
            <div className="flex items-center justify-end md:justify-start">
              <PhoneIcon className="shrink-0 w-3 md:w-auto" />
              <Text
                className="text-gray-two md:text-gray-four ml-0.5"
                overflowWrap={"anywhere"}
                fontSize={{ base: "12px", md: "14px" }}
              >
                {data.phone}
              </Text>
            </div>
          </div>
        </div>
        <div>
          <Button
            text="Disable guest"
            width="large"
            className={"!py-4 font-bold text-base !w-full md:!w-auto"}
          />
        </div>
      </section>
      {/* Guest Bookings */}
      <section className="mt-7 hidden md:block">
        <Text className="" fontWeight={"bold"} fontSize={"24px"}>
          Bookings
        </Text>
        <div className="flex mt-6 gap-10 w-full overflow-auto">
          {Array(2)
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
        <LinkBox>
          <LinkOverlay as={Link} href={`/guest/${params.id}/bookings`}>
            <Button
              className="mt-6 !w-full md:!w-auto md:mt-8"
              text={"View all bookings"}
              width="large"
              height="medium"
            />
          </LinkOverlay>
        </LinkBox>
      </section>
      {/* Guest Transactions */}
      <section className="mt-6 hidden md:block">
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
        <LinkBox>
          <LinkOverlay as={Link} href={`/guest/${params.id}/transactions`}>
            <Button
              className="mt-6 !w-full md:!w-auto md:mt-8"
              text={"View all guest transactions"}
              width="large"
              height="medium"
            />
          </LinkOverlay>
        </LinkBox>
      </section>
      <section className="block md:hidden mt-4">
        <Tabs isFitted isLazy variant={"unstyled"}>
          <TabList
            borderBottomWidth={"1px"}
            fontWeight={"bold"}
            className="text-gray-six"
            fontSize={"16px"}
          >
            <Tab _selected={{ color: "#FF5626" }}>Bookings</Tab>
            <Tab _selected={{ color: "#FF5626" }}>Transactions</Tab>
          </TabList>
          <TabIndicator
            mt={"-1px"}
            color={"#FF5626"}
            height="1px"
            bg="#FF5626"
            borderRadius="1px"
          />
          <TabPanels>
            {/* Booking Panel */}
            <TabPanel padding={"0"}>
              <div className="flex flex-col mt-[10px] gap-4">
                {Array(3)
                  .fill(bookingData)
                  .map((row, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-eleven p-4 flex gap-6 rounded-2xl"
                    >
                      <div className="rounded-lg relative overflow-hidden shrink-0 h-[100px] w-28">
                        <Image
                          src={row.image}
                          alt={row.name}
                          fill={true}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="flex gap-5">
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
                              "!bg-brun-fainter !text-brun":
                                row.status === "approved",
                              "!bg-red-100 !text-red-600":
                                row.status === "cancelled",
                            })}
                          >
                            {row.status}
                          </Badge>
                        </div>
                        <Heading
                          fontWeight={"bold"}
                          fontSize={"16px"}
                          className="text-primary-lighter"
                        >
                          {row.name}
                        </Heading>
                        <div className="flex gap-3">
                          <Text fontWeight={"medium"} fontSize={"14px"}>
                            {row.place}
                          </Text>
                          {/* <Text fontWeight={"medium"} fontSize={"14px"}>
                            {format(
                              parse(row.checkIn, "yyyy-MM-dd", new Date()),
                              "LLL dd"
                            ) +
                              " - " +
                              format(
                                parse(row.checkOut, "yyyy-MM-dd", new Date()),
                                "LLL dd"
                              )}{" "}
                          </Text> */}
                        </div>
                        {/* <Text fontWeight={"medium"} fontSize={"14px"}>
                          {row.guests} Guests
                        </Text> */}
                        <Text
                          fontSize={"10px"}
                          fontWeight={"normal"}
                          className="flex items-center gap-0.5"
                        >
                          <Text
                            className="text-gray-two"
                            fontWeight={"medium"}
                            fontSize={"12px"}
                          >
                            {numberToNaira(row.price)}
                          </Text>{" "}
                          booking fee
                        </Text>
                        <Text
                          fontSize={"10px"}
                          fontWeight={"normal"}
                          className="flex items-center gap-0.5"
                        >
                          <Text
                            className="text-gray-two"
                            fontWeight={"medium"}
                            fontSize={"12px"}
                          >
                            {numberToNaira(row.caution)}
                          </Text>{" "}
                          refundable caution
                        </Text>
                      </div>
                    </div>
                  ))}
              </div>
              <LinkBox>
                <LinkOverlay as={Link} href={`/guest/${params.id}/bookings`}>
                  <Button
                    className="!py-3 !font-bold mt-4 !w-full md:!w-auto md:mt-8"
                    text={"View all bookings"}
                    width="large"
                    variant={"outline"}
                  />
                </LinkOverlay>
              </LinkBox>
            </TabPanel>
            {/* Transactions Panel */}
            <TabPanel padding={"0"}>
              <div className="flex flex-col items-center gap-4 mt-[10px]">
                {balances.map(({ amount, className, sub, text }, idx) => (
                  <div
                    key={idx}
                    className="grow md:mb-0 text-center md:text-left"
                  >
                    <div
                      className={cn(
                        "rounded-lg p-2",
                        className,
                        "bg-transparent"
                      )}
                    >
                      <div>
                        <div>
                          <p className="text-sm">{text}</p>
                          <Text
                            className="mt-0"
                            fontWeight={"700"}
                            fontSize={"24px"}
                          >
                            {numberToNaira(amount, true)}
                          </Text>
                          <Text fontSize={"12px"} fontWeight={"normal"}>
                            {sub}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
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
                        <div className="rounded-lg bg-gray-ten overflow-hidden p-4 w-12 h-12 relative">
                          <Image src={image} alt="atlantic" fill={true} />
                        </div>
                        <div>
                          <div
                            className={cn(
                              `rounded-[100px] px-2 border border-white w-fit capitalize`,
                              status === "pending" &&
                                "bg-jasmine-fainter !text-jasmine",
                              status === "failed" &&
                                "bg-red-fainter !text-red-dark",
                              status === "success" &&
                                "bg-brun-fainter !text-brun"
                            )}
                          >
                            <Text fontSize={"12px"} fontWeight={"normal"}>
                              {status}
                            </Text>
                          </div>
                          <Text fontSize={"14px"} fontWeight={"medium"}>
                            {name}
                          </Text>
                        </div>
                      </div>
                      <div className="gap-4">
                        <div className="flex gap-1.5 justify-end items-center">
                          <Text fontSize={"14px"} fontWeight={"medium"}>
                            {numberToNaira(amount, true)}
                          </Text>
                          <Text
                            fontSize={"12px"}
                            fontWeight={"normal"}
                            className="text-gray-five"
                          >
                            {format(date, "dd/MM/yy")}
                          </Text>
                        </div>
                        <div className="flex gap-2 justify-end">
                          <Text
                            fontSize={"12px"}
                            fontWeight={"normal"}
                            className="text-gray-five"
                          >
                            Booking Payment
                          </Text>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <LinkBox>
                <LinkOverlay
                  as={Link}
                  href={`/guest/${params.id}/transactions`}
                >
                  <Button
                    className="!py-3 !font-bold mt-4 !w-full md:!w-auto md:mt-8"
                    text={"View all transactions"}
                    width="large"
                    variant={"outline"}
                  />
                </LinkOverlay>
              </LinkBox>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </main>
  );
}
