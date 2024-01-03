import BackBtn from "@/components/buttons/backButton";
import CircleSvg from "@/icons/circle-svg.icon";
import RatingStar from "@/icons/rating-star.icon";
import BookingPaymentDetails from "../components/BookingPaymentDetails";

const BookingStageSection = () => {
  return (
    <section className="">
      <BackBtn />
      <div className="flex flex-col mt-4 lg:mt-8">
        <h1 className="text-[2.5rem] text-start font-bold text-primary font-serif">
          Eko Atlantic Shortstays
        </h1>
        <div className="w-full flex items-center flex-wrap gap-4 text-gray font-normal text-sm">
          <div className="flex gap-1 w-fit items-center">
            <RatingStar />
            <p className="text-base">4.8</p>
          </div>
          <p>18 reviews</p>
          <p>Lagos, Nigeria</p>
          <p>6 guests</p>
          <CircleSvg />
          <p>3 Bedrooms</p>
        </div>
      </div>
      <BookingPaymentDetails />
    </section>
  );
};

export default BookingStageSection;
