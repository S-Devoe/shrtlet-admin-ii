"use client";
import React from "react";
import Logo from "../logo.component";
import BurgerComponent from "./burger/burger.component";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { links } from "@/layouts/dashboard.layout";
import DashboardNav from "../nav.component";
import BackBtn from "../buttons/backButton";
import { usePathname } from "next/navigation";
interface MobileHeaderProps {}

const MobileHeader: React.FC<MobileHeaderProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const pathname = usePathname();

  React.useEffect(() => {
    onClose();
  }, [pathname]);
  return (
    <React.Fragment>
      <header className="flex justify-between py-7 px-5">
        <Logo color="#16133D" />
        <div>
          <BurgerComponent onClick={onOpen} />
        </div>
      </header>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent px={6} py={10}>
          <DrawerHeader p={0}>
            <BackBtn onClick={onClose} />
          </DrawerHeader>

          <DrawerBody p={0} mt={10}>
            <ul className="flex flex-col gap-10">
              {links.map((link) => (
                <DashboardNav key={link.href} link={link} />
              ))}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

export default MobileHeader;
