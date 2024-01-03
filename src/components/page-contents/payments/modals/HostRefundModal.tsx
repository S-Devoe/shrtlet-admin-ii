"use client";
import BackBtn from "@/components/buttons/backButton";
import Button from "@/components/buttons/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import HostListingCard from "../components/HostListingCard";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const HostRefundModal = ({ isOpen, onClose }: Props) => {
  const [stage, setStage] = useState(1);

  const onRefund = () => {
    setStage(2);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        w={"100%"}
        mx={"4"}
        borderRadius={"16px"}
        p={{ base: "6", md: "10" }}
        maxWidth={"40rem"}
      >
        <BackBtn onClick={onClose} />
        <ModalBody
          p={{ base: 0, md: "4" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          {stage <= 1 ? (
            <Fragment>
              <h1 className="md:mt-12 font-serif text-center text-primary-lighter font-semibold text-4xl">
                ₦1200
              </h1>
              <section className="w-full max-w-[19rem]">
                <HostListingCard showDate />
              </section>

              <section className="w-full flex flex-col items-center gap-4">
                <ModalHeader
                  my={"6"}
                  fontWeight={"semibold"}
                  p={0}
                  textAlign={"center"}
                  fontSize={"20px"}
                  className="!font-serif !text-primary-lighter"
                >
                  Are you sure you want to pay this host?
                </ModalHeader>

                <Button
                  onClick={onRefund}
                  text="Yes, pay host"
                  className="w-full md:max-w-[15rem] py-3"
                />
                <Button
                  onClick={onClose}
                  text="No, cancel"
                  variant="outline"
                  className="w-full md:max-w-[15rem] py-3"
                />
              </section>
            </Fragment>
          ) : (
            <Fragment>
              <h1 className="md:mt-12 font-serif text-center text-primary-lighter font-semibold text-2xl">
                You have successfully paid the host.
              </h1>
              <section className="w-full mt-8 mb-4 max-w-[19rem]">
                <HostListingCard />
              </section>
              <Button
                onClick={() => {
                  onClose();
                  setStage(1);
                }}
                text="Finish"
                className="w-full md:max-w-60 py-3"
              />
            </Fragment>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HostRefundModal;
