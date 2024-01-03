import Logo from "@/components/logo.component";
import MobileHeader from "@/components/mobile/header.component";
import DashboardNav from "@/components/nav.component";
import DashboardIcon from "@/icons/dashboard.icon";
import GuestsIcon from "@/icons/guests.icon";
import HostsIcon from "@/icons/hosts.icon";
import ListingsIcon from "@/icons/listings.icon";
import PaymentsIcon from "@/icons/payments.icon";
import ReportsIcon from "@/icons/reports.icon";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export const links = [
  { name: "Dashboard", href: "/", icon: <DashboardIcon /> },
  { name: "Hosts", href: "/hosts", icon: <HostsIcon /> },
  { name: "Guests", href: "/guests", icon: <GuestsIcon /> },
  { name: "Listings", href: "/listings", icon: <ListingsIcon /> },
  { name: "Payments", href: "/payments", icon: <PaymentsIcon /> },
  { name: "Reports", href: "/reports", icon: <ReportsIcon /> },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateRows={"120px 1fr"}
        gridTemplateColumns={"260px 1fr"}
        h="100dvh"
        gap="1"
        color="blackAlpha.900"
        overflow={"hidden"}
        fontWeight="bold"
        className="!hidden md:!grid"
      >
        <GridItem pl="10" bg="transparent" area={"header"}>
          <div className="flex justify-start items-center h-full w-full">
            <Logo color="#16133D" />
          </div>
        </GridItem>
        <GridItem
          p="10"
          bg="transparent"
          area={"nav"}
          maxHeight={"100%"}
          overflow={"auto"}
        >
          <ul className="flex flex-col gap-10">
            {links.map((link) => (
              <DashboardNav key={link.href} link={link} />
            ))}
          </ul>
        </GridItem>
        <GridItem
          bg="transparent"
          area={"main"}
          overflow={"auto"}
          className="mr-2 lg:mr-[5rem] mb-4"
        >
          {children}
        </GridItem>
      </Grid>
      <div className="md:hidden">
        <MobileHeader />
        <div className="px-6 max-w-full overflow-hidden mb-9">{children}</div>
      </div>
    </>
  );
}
