"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import CancelledRefundCard from "../components/CancelledRefundCard";
import { useDisclosure } from "@chakra-ui/react";

const CancelledRefundModal = dynamic(
  () => import("../modals/CancelledRefundModal")
);

const CancelledBookingRefundTab = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    setActiveId(null);
    onClose();
  };

  return (
    <>
      <section className="w-full grid grid-cols-1 gap-6">
        {Array(3)
          .fill(" ")
          .map((_, i) => (
            <CancelledRefundCard
              key={`card-${i + 1}`}
              isRefunded={(i + 1) % 3 === 0 ? true : false}
              onRefundClick={() => {
                setActiveId(i + 1);
                onOpen();
              }}
            />
          ))}
      </section>
      <CancelledRefundModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default CancelledBookingRefundTab;
