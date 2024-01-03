"use client";
import { Fragment, useEffect } from "react";
import HostBookingPaymentTab from "./tabs/HostBookingPaymentTab";
import GuestRefundPaymentTab from "./tabs/GuestRefundPaymentTab";
import CancelledBookingRefundTab from "./tabs/CancelledBookingRefundTab";
import FilterDropdown from "../../dropdown/FilterDropdown";
import Button from "@/components/buttons/button";
import PaginationComponent from "@/components/pagination/pagination.component";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

const PaymentPageContent = () => {
  const params = useSearchParams();
  const activeTab = params.get("tabValue");
  const { replace } = useRouter();

  React.useEffect(() => {
    if (!activeTab) {
      replace("/payments?tabValue=hostBookingPayment");
    }
  }, []);
  return (
    <Fragment>
      <section className="w-full flex flex-col gap-5">
        <div className="mb-2 flex flex-col md:flex-row items-center gap-4 justify-between">
          <FilterDropdown intialValue="All Bookings" />
          <div className="w-full flex items-center gap-4">
            <FilterDropdown intialValue="Month" />
            <FilterDropdown intialValue="Year" />
          </div>
          <Button className="w-full !py-4 !rounded-2xl" text="Filter" />
        </div>
      </section>
      <section>
        {bookingTab.find((item) => item.value === activeTab)?.component}
      </section>
      <section className="w-full flex flex-col gap-[2.5rem] mt-2 md:mt-20">
        <PaginationComponent />
      </section>
    </Fragment>
  );
};

export default PaymentPageContent;

export const bookingTab = [
  {
    label: "Host Booking Payment",
    value: "hostBookingPayment",
    component: <HostBookingPaymentTab tabValue="hostBookingPayment" />,
  },
  {
    label: "Guests Refundable Caution Payment",
    value: "guestsRefund",
    component: <GuestRefundPaymentTab tabValue="guestsRefund" />,
  },
  {
    label: "Cancelled Bookings Refund",
    value: "cancelledBookingsRefund",
    component: <CancelledBookingRefundTab />,
  },
];

const dropDown = [
  { initialValue: "All Bookings", dropDown: [] },
  { initialValue: "Month", dropDown: [] },
  { initialValue: "Year", dropDown: [] },
];
