"use client";

import Badge from "@/components/badge/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  status: string;
}
const ListingCard = ({ status }: Props) => {
  const router = useRouter();

  const variant = () => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "pending";
      case "declined":
        return "destructive";
      case "approved":
        return "success";
      default:
        return "primary";
    }
  };

  return (
    <button
      type="button"
      onClick={() => router.push(`/listings/23?status=${status}`)}
      className="w-full flex items-center bg-[#F9FAFC] gap-[1.125rem] rounded-[1rem] p-[1rem] "
    >
      <div className="relative h-[5rem] w-[5rem] shrink-0">
        <Image
          src="/listings/booked-house.png"
          alt="img"
          fill
          className="rounded-[0.5rem]"
          sizes="100%"
        />
      </div>
      <div className="flex-[1] flex flex-col items-start justify-between h-full">
        <Badge text={status} className="capitalize font-normal " variant={variant()} />
        <div className="w-full flex flex-col items-start gap-[0.5rem]">
          <h2 className="text-[1.125rem] text-start font-[700] text-black ">
            Eko Atlantic Stays
          </h2>
          <div className="shrink-0 flex items-end justify-between flex-wrap w-full gap-[0.5rem]">
            <h4 className="text-[0.875rem] text-[#231F20] shrink-0 ">
              11 Nov - 13 Nov
            </h4>
            <h4 className="text-[0.75rem] shrink-0 text-gray-five">3 Guests</h4>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ListingCard;
