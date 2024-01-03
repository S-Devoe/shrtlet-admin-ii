import Badge from "@/components/badge/badge";
import Button from "@/components/buttons/button";
import Image from "next/image";

interface Props {
  isRefunded: boolean;
  onRefundClick: () => void;
}
const CancelledRefundCard = ({ isRefunded, onRefundClick }: Props) => {
  return (
    <div className="w-full flex justify-between bg-gray-eleven gap-4 rounded-2xl p-4">
      <div className="flex items-center gap-4">
        <div className="relative h-28 w-28 shrink-0">
          <Image
            src="/listings/booked-house.png"
            alt="img"
            fill
            className="rounded-[0.5rem]"
            sizes="100%"
          />
          <div className="px-2 w-full absolute bottom-1">
            <Badge
              text="Refund Pending"
              className="w-full px-0 bg-jasmine-fainter text-jasmine capitalize z-[2]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-between gap-3 h-full">
          <div className="">
            <h2 className="text-lg font-bold text-black">Eko Atlantic Stays</h2>
            <h4 className="text-base font-normal text-black-two-three shrink-0">
              11 Nov - 13 Nov
            </h4>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-[1rem] font-normal text-black-two-three shrink-0">
              Akitoye Adeyemi
            </h4>
            <p className="text-[1rem] font-normal text-black-two-three truncate">
              Had an emergency and won&apos;t be able to make it for my trip
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h3 className="text-primary text-2xl font-bold">₦1200</h3>
        <div className="mt-auto flex flex-col items-end">
          <p className="text-sm font-normal text-primary leading-6">
            Refundable amount and caution
          </p>
          <Button
            disabled={isRefunded}
            text="Refund Payment"
            variant="orangeDisabled"
            className="!py-[0.8rem] !px-[2.5rem] "
            onClick={onRefundClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CancelledRefundCard;
