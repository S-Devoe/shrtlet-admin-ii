import Button from "@/components/buttons/button";
import "./style.css";
import RatingStar from "@/icons/rating-star.icon";
import Image from "next/image";
import Link from "next/link";

const ListingReviews = () => {
  return (
    <section className="w-full flex flex-col gap-[2.5rem]">
      <div className="">
        <h3 className="listing-mini-header flex items-center gap-1">
          <RatingStar className="text-jasmine" /> 4.6 (18 reviews)
        </h3>
        <div className="mt-4 flex flex-col gap-5">
          {Array(2)
            .fill("")
            .map((_, i) => (
              <div className="" key={`card-${i + 1}`}>
                <div className="flex items-start gap-2">
                  <div className="relative rounded-full h-[2.5rem] w-[2.5rem] border-[4px] border-white  ">
                    <Image
                      src="/profile/Avatar.png"
                      alt="img"
                      fill
                      sizes="100%"
                      className="rounded-full"
                    />
                  </div>
                  <div className="">
                    <h4 className="listing-text-light">Similolu</h4>
                    <h5 className="listing-text-lighter">03 Oct, 2023</h5>
                  </div>
                </div>
                <p className="listing-text-lighter mt-2 !leading-[1.75rem] ">
                  Perfect place to stay when experiencing Lagos for the first
                  time. Great location, and the host is pretty responsive, I
                  would definitely rent again.
                </p>
              </div>
            ))}
        </div>

        <Button
          text="Show all reviews"
          variant="orangeOutline"
          className="hidden md:block w-fit mt-5 px-[2.5rem]"
        />
        <Link href="" className="md:hidden text-orange text-sm font-normal " >Show all 18 reviews</Link>
      </div>
    </section>
  );
};

export default ListingReviews;
