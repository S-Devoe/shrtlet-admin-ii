import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import Button from "@/components/buttons/button";
import clsx from "clsx";
import { SearchInput } from "@/components/forms/inputs/searchInput";
import Image from "next/image";
import EmailIcon from "@/icons/emailIcon";
import PhoneIcon from "@/icons/phoneIcon";
import Link from "next/link";
import dataSource from "@/lib/data.json";

const data = dataSource.userData;

export default function HostsPage() {
  return (
    <main className="flex overflow-hidden min-h-full flex-col">
      <section>
        <SearchInput
          filter={false}
          placeholder="Search for a host"
          name="Search"
        />
      </section>
      <section className="flex flex-col md:grid lg:grid-cols-2 gap-6 md:gap-10 mt-8">
        {Array(8)
          .fill(data)
          .map((row, idx) => (
            <Link
              href={`/host/${idx}`}
              key={idx}
              className="md:bg-gray-ten px-[5px] py-[10px] border-b md:border-0 border-gray-two md:px-10 md:py-6 md:rounded-2xl flex justify-between md:justify-start md:flex-col gap-2"
            >
              <div className="flex items-center gap-5">
                <div className="rounded-full overflow-hidden">
                  <Image
                    width={44}
                    height={44}
                    src={row.image}
                    alt="profile image"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <Heading
                    className="text-primary-lighter"
                    fontSize={{ base: "15px", md: "24px" }}
                  >
                    {row.firstname}
                  </Heading>
                  <Heading fontSize={{ base: "12px", md: "lg" }}>
                    {row.surname}
                  </Heading>
                </div>
              </div>
              <div className="flex xl:gap-3 flex-col-reverse md:flex-col xl:flex-row">
                <div className="flex items-center justify-end md:justify-start">
                  <EmailIcon className="shrink-0 w-3 md:w-auto" />
                  <Text
                    className="text-gray-two md:text-gray-four ml-0.5"
                    overflowWrap={"anywhere"}
                    fontSize={{ base: "12px", md: "14px" }}
                  >
                    {row.email}
                  </Text>
                </div>
                <div className="flex items-center justify-end md:justify-start">
                  <PhoneIcon className="shrink-0 w-3 md:w-auto" />
                  <Text
                    className="text-gray-two md:text-gray-four ml-0.5"
                    overflowWrap={"anywhere"}
                    fontSize={{ base: "12px", md: "14px" }}
                  >
                    {row.phone}
                  </Text>
                </div>
              </div>
            </Link>
          ))}
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
