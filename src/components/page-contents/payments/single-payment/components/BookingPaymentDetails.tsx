"use client";
import "./style.css";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Avatar, AvatarGroup, useDisclosure } from "@chakra-ui/react";
import Badge from "@/components/badge/badge";
import Button from "@/components/buttons/button";
import { Fragment } from "react";

const HostRefundModal = dynamic(() => import("../../modals/HostRefundModal"));
const GuestRefundModal = dynamic(() => import("../../modals/GuestRefundModal"));

const BookingPaymentDetails = () => {
  const params = useSearchParams();
  const activeTab = params.get("tabValue");
  // use api values for the status below whenever it is available
  const bookingStatus = params.get("bookingStatus") as string;
  const paymentStatus = params.get("paymentStatus") as string;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isGuestModalOpen,
    onOpen: onGuestModalOpen,
    onClose: onGuestModalClose,
  } = useDisclosure();

  const variant = (status: string) => {
    switch (status?.toLowerCase()) {
      case "new":
        return "pending";
      case "payment pending":
        return "pending";
      case "ongoing":
        return "primary";
      case "upcoming":
        return "instance";
      case "completed":
        return "success";
      case "payment complete":
        return "success";
      default:
        return "primary";
    }
  };

  return (
    <Fragment>
      <section className="w-full mt-8 lg:w-4/5 flex flex-col gap-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-40">
          <div>
            <h2 className="booking-mini-header">Reservation Details</h2>
            <div className="w-full flex flex-col gap-3 mt-2 ">
              {/* date  */}
              <div className="w-full flex items-center justify-between">
                <h3 className="booking-text">Dates </h3>
                <h3 className="booking-text">11-13 Nov</h3>
              </div>
              {/* guests */}
              <div className="w-full flex items-center justify-between">
                <h3 className="booking-text">Guests </h3>
                <div className="booking-text flex items-center gap-1">
                  <AvatarGroup spacing={"-0.65rem"} size="xs" max={3}>
                    <Avatar name="img" src="/profile/Avatar.png" />
                    <Avatar name="img" src="/profile/Avatar.png" />
                    <Avatar name="img" src="/profile/Avatar.png" />
                  </AvatarGroup>
                  <span>3 Guests</span>
                </div>
              </div>
              {/* hosts  */}
              <div className="w-full flex items-center justify-between">
                <h3 className="booking-text">Host </h3>
                <div className="booking-text flex items-center gap-1">
                  <Avatar name="img" src="/profile/Avatar.png" size="xs" />{" "}
                  <span>Adeyemi Akitoye</span>
                </div>
              </div>
              {/* guest */}
              {activeTab && activeTab.toLowerCase() === "guestsrefund" && (
                <div className="w-full flex items-center justify-between">
                  <h3 className="booking-text">Guest </h3>
                  <div className="booking-text flex items-center gap-1">
                    <Avatar name="img" src="/profile/Avatar.png" size="xs" />{" "}
                    <span>Adeyemi Akitoye</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="">
            <h2 className="booking-mini-header">Booking Payment Details</h2>
            <div className="w-full flex flex-col gap-3 mt-2 ">
              {/* nights  */}
              <div className="w-full flex items-center justify-between">
                <h3 className="booking-text">$200 x 3 nights </h3>
                <h3 className="booking-text !font-medium ">₦600</h3>
              </div>

              {/* Refundable caution fee */}
              <div className="w-full flex items-center justify-between">
                <h3 className="booking-text">Refundable caution fee </h3>
                <h3 className="booking-text !font-medium ">₦50</h3>
              </div>
              {/* Guest Payment Status */}
              <div className="w-full flex items-center justify-between">
                <h3 className="booking-text">Guest Payment Status </h3>
                <Badge
                  text="completed"
                  className="lg:mt-[2px] capitalize border-[2px] border-white "
                  variant={variant("completed")}
                />
              </div>

              {/* Booking Status */}
              <div className="w-full flex items-center justify-between">
                <h3 className="booking-text">Booking Status </h3>
                <Badge
                  text={bookingStatus}
                  className="lg:mt-[2px] capitalize border-[2px] border-white "
                  variant={variant(bookingStatus)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Refundable Caution Payment Details */}
        <div className="w-full max-w-[23rem]">
          <h2 className="booking-mini-header">
            Refundable Caution Payment Details
          </h2>
          <div className="flex flex-col gap-3 mt-2">
            {/* Amount */}
            <div className="w-full flex items-center justify-between">
              <h3 className="booking-text">Amount </h3>
              <h3 className="booking-text !font-medium ">₦50</h3>
            </div>
            {/* Payment Status  */}
            <div className="w-full flex items-center justify-between">
              <h3 className="booking-text">Caution Fee Payment Status </h3>
              <Badge
                text={paymentStatus}
                className="lg:mt-0.5 capitalize border-[2px] border-white"
                variant={variant(paymentStatus)}
              />
            </div>
          </div>

          {activeTab && activeTab === "guestsRefund" && (
            <Button
              className="w-full !py-4 mt-8 lg:mt-4"
              text="Refund Caution"
              variant="orangeDisabled"
              disabled={paymentStatus === "Payment Complete"}
              onClick={onGuestModalOpen}
            />
          )}
          {activeTab && activeTab === "hostBookingPayment" && (
            <Button
              className="w-full !py-4 mt-8 lg:mt-4"
              text="Pay Host"
              variant="orangeDisabled"
              disabled={paymentStatus === "Payment Complete"}
              onClick={onOpen}
            />
          )}
        </div>
      </section>
      <HostRefundModal isOpen={isOpen} onClose={onClose} />
      <GuestRefundModal isOpen={isGuestModalOpen} onClose={onGuestModalClose} />
    </Fragment>
  );
};

export default BookingPaymentDetails;
