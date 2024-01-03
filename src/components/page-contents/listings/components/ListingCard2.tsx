import Image from "next/image";

const ListingCard2 = () => {
  return (
    <div className="w-full md:max-w-[19rem] flex items-center bg-[#F9FAFC] gap-[1.125rem] rounded-[1rem] p-[1rem] ">
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
        <div className="w-full flex flex-col items-start gap-1">
          <h2 className="text-[1.125rem] text-start font-[700] text-black ">
            Eko Atlantic Stays
          </h2>
          <h4 className="text-[0.875rem] text-[#231F20] shrink-0 ">
            Lagos, Nigeria
          </h4>
          <h5 className="text-[0.75rem] shrink-0 text-gray-five">3 Guests</h5>
        </div>
      </div>
    </div>
  );
};

export default ListingCard2;
