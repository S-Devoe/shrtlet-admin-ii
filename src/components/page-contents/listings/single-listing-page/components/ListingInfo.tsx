import Image from "next/image";
import Hotel1 from "@/assets/images/hotel-img1.png";
import Hotel2 from "@/assets/images/hotel-img2.png";
import Hotel3 from "@/assets/images/hotel-img3.png";
import Hotel4 from "@/assets/images/hotel-img4.png";
import Hotel5 from "@/assets/images/hotel-img4.png";
import RatingStar from "@/icons/rating-star.icon";
import CircleSvg from "@/icons/circle-svg.icon";
import Button from "@/components/buttons/button";
import Badge from "@/components/badge/badge";
import AcceptListingModal from "../modals/AcceptListingModal";
import DeclineListingModal from "../modals/DeclineListingModal";
import { useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import ListingInfoMobileView from "./ListingInfoMobileView";

interface Props {
  status?: string;
}
const ListingInfo = ({ status }: Props) => {
  const {
    isOpen: isAcceptOpen,
    onOpen: onAcceptOpen,
    onClose: onAcceptClose,
  } = useDisclosure();

  const {
    isOpen: isDeclineOpen,
    onOpen: onDeclineOpen,
    onClose: onDeclineClose,
  } = useDisclosure();

  return (
    <>
      {/* desktop view  */}
      <section className="w-full hidden md:block ">
        <div className="w-full flex flex-col gap-3 md:flex-row justify-between text-center">
          <div className="flex gap-2 items-center ">
            <div className="flex flex-col">
              <h1 className="text-[2.5rem] text-start font-bold text-primary font-serif  ">
                Eko Atlantic Shortstays
              </h1>

              <div className="w-full flex items-center flex-wrap gap-4 text-gray font-normal text-[0.875rem] ">
                <div className="flex gap-1 w-fit items-center">
                  <RatingStar />
                  <p className="text-[1rem]">4.8</p>
                </div>
                <p>18 reviews</p>
                <p>Lagos, Nigeria</p>
                <p>6 guests</p>
                <CircleSvg />
                <p>3 Bedrooms</p>
              </div>
            </div>
            {status === "approved" ? (
              <Badge
                text="Approved"
                className="capitalize font-normal mt-[-0.5rem]"
                variant="success"
              />
            ) : status === "declined" ? (
              <Badge
                text="Declined"
                className="capitalize font-normal mt-[-0.5rem]"
                variant="destructive"
              />
            ) : null}
          </div>
          <Button
            text="View Host Profile"
            variant="orangeOutline"
            className="h-fit flex flex-row-reverse w-fit gap-2 p-4 text-[1rem] font-medium"
            icon={
              <div className="relative rounded-full h-[2rem] w-[2rem] border-[4px] border-white  ">
                <Image
                  src="/profile/Avatar.png"
                  alt="img"
                  fill
                  sizes="100%"
                  className="rounded-full"
                />
              </div>
            }
          />
        </div>
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

        <div className="hidden w-full lg:grid grid-cols-2 gap-[1.125rem] ">
          <div className="h-[30rem] relative">
            <Image
              src={Hotel1}
              alt="img"
              fill
              sizes="100%"
              className="rounded-l-[1rem]"
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-[1.125rem]">
            <div className="relative">
              <Image src={Hotel2} alt="img" fill sizes="100%" />
            </div>
            <div className="relative">
              <Image
                src={Hotel4}
                alt="img"
                fill
                sizes="100%"
                className="rounded-tr-[1rem]"
              />
            </div>
            <div className="relative">
              <Image src={Hotel3} alt="img" fill sizes="100%" />
            </div>

            <div className="relative">
              <Image
                src={Hotel5}
                alt="img"
                fill
                sizes="100%"
                className="rounded-br-[1rem]"
              />
              <div className="absolute bottom-4 left-0 z-30 bg-transparent px-4 w-full">
                <Button
                  text="View all photos"
                  variant="orangeOutline"
                  width="full"
                  className={"bg-white"}
                
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mobile view  */}
      <ListingInfoMobileView
        onAcceptOpen={onAcceptOpen}
        status={status!}
        onDeclineOpen={onDeclineOpen}
      />
      <AcceptListingModal isOpen={isAcceptOpen} onClose={onAcceptClose} />
      <DeclineListingModal isOpen={isDeclineOpen} onClose={onDeclineClose} />
    </>
  );
};

export default ListingInfo;
