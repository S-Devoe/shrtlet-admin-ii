import Image from "next/image";

const GuestListingCard = () => {
  return (
    <div className="w-full flex items-center bg-gray-eleven gap-[1.125rem] rounded-2xl p-4">
      <div className="relative h-20 w-20 shrink-0">
        <Image
          src="/listings/booked-house.png"
          alt="img"
          fill
          className="rounded-[0.5rem]"
          sizes="100%"
        />
      </div>
      <div className="grow flex flex-col items-start justify-between h-full">
        <h2 className="text-lg text-start font-bold text-black">
          Eko Atlantic Stays
        </h2>
        <h3 className="text-primary text-sm font-normal">Adeyemi Akitoye</h3>
        <div className="shrink-0 flex items-end justify-between flex-wrap w-full gap-[0.5rem]">
          <h4 className="text-xs text-gray-five shrink-0">11 Nov - 13 Nov</h4>
        </div>
      </div>
    </div>
  );
};

export default GuestListingCard;
