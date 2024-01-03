"use client";
import CircleSvg from "@/icons/circle-svg.icon";
import RatingStar from "@/icons/rating-star.icon";
import Image from "next/image";
import Link from "next/link";
import Hotel1 from "@/assets/images/hotel-img1.png";
import Button from "@/components/buttons/button";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import BackBtn from "@/components/buttons/backButton";

SwiperCore.use([Pagination]);

interface Props {
  status: string;
  onAcceptOpen: () => void;
  onDeclineOpen: () => void;
}
const ListingInfoMobileView = ({
  status,
  onAcceptOpen,
  onDeclineOpen,
}: Props) => {
  const paginationRef = useRef(null);

  const renderFraction = (currentClass: any, totalClass: any) => {
    return (
      '<span class="' +
      currentClass +
      '"></span>' +
      " of " +
      '<span class="' +
      totalClass +
      '"></span>'
    );
  };
  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (
      typeof Swiper.params.pagination !== "boolean" &&
      typeof Swiper.params.pagination !== "undefined"
    ) {
      Swiper.params.pagination.el = paginationRef?.current;
    }
  };

  return (
    <section className="w-full md:hidden border-b border-gray-ten pb-7 ">
      <Swiper
        onBeforeInit={onBeforeInit}
        loop={true}
        pagination={{
          type: "fraction",
          el: paginationRef?.current,
          renderFraction: renderFraction,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-72 relative "
      >
        <BackBtn styleTwo className="absolute top-4 left-4 z-10" />
        {Array(12)
          .fill("")
          .map((_, i) => (
            <SwiperSlide key={i + 1}>
              <div className="w-full h-72 relative">
                <Image src={Hotel1} alt="hotel" fill sizes="100%" />
              </div>
            </SwiperSlide>
          ))}
        <div
          ref={paginationRef}
          className="!w-fit !left-[unset] !absolute !bottom-4 !right-4 !py-2 !px-4 border-2 border-white !text-white !bg-[#0606067A] !z-10 !rounded-3xl"
        ></div>
      </Swiper>

      {/* view host profile  */}
      <div className="-mt-4 relative z-10">
        <div className="w-8 h-8 relative rounded-full border-4 border-white  ">
          <Image
            src="/profile/Avatar.png"
            alt="img"
            fill
            sizes="100%"
            className="rounded-full"
          />
        </div>
        <Link href="" className="text-orange text-sm ">
          View Host Profile
        </Link>
      </div>
      <div className="w-full mt-2">
        <p className="text-black-two-three font-normal text-sm">Aremu’s</p>
        <div className="flex items-center justify-between gap-4 flex-wrap ">
          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-base font-bold text-primary">
              Eko Atlantic Shortstays
            </h1>
            <div className="flex self-center justify-around text-primary gap-12">
              <CircleSvg />
              <CircleSvg />
            </div>
            <div className="w-full flex items-center flex-wrap gap-2 text-gray-two font-normal text-xs ">
              <div className="flex gap-1 w-fit items-center">
                <RatingStar />
                <p className="text-xs">4.8</p>
              </div>
              <Link href="" className="underline">
                18 reviews
              </Link>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <div className="flex items-center text-xs text-gray-seven-five justify-end gap-1 ">
            <p>6 guests</p>
            <CircleSvg />
            <p>3 Bedrooms</p>
          </div>
        </div>
      </div>
      {/* approve or decline btn  */}
      <div className="mt-4 md:my-[2rem] flex justify-between md:justify-start items-center gap-2 md:gap-4">
        {status === "pending" ? (
          <>
            <Button
              text="Approve Listing"
              onClick={onAcceptOpen}
              className="h-fit w-full md:w-fit gap-[0.65rem] text-base font-medium py-2 md:py-4 lg:px-10 rounded-lg"
            />
            <Button
              text="Decline Listing"
              variant="orangeOutline"
              onClick={onDeclineOpen}
              className="h-fit w-full md:w-fit text-base font-medium py-2 md:py-4 lg:px-10 rounded-lg "
            />
          </>
        ) : (
          <Button
            text="Delete Listing"
            className="h-fit gap-[0.65rem] text-base font-medium py-2 md:py-4 px-10 rounded-lg"
          />
        )}
      </div>
    </section>
  );
};

export default ListingInfoMobileView;
