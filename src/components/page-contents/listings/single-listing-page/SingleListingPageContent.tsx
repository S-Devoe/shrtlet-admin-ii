"use client";
import BackBtn from "@/components/buttons/backButton";
import ListingInfo from "./components/ListingInfo";
import ListingDescriptionAndAmenities from "./components/ListingDescriptionAndAmenities";
import ListingReviews from "./components/ListingReviews";
import ListingLocation from "./components/ListingLocation";
import { useSearchParams } from "next/navigation";

const SingleListingPageContent = () => {
  const params = useSearchParams();
  const paramStatus = params.get("status");
  return (
    <section className="flex flex-col gap-5 md:gap-[2.5rem]">
      <BackBtn className="hidden md:flex" />
      <ListingInfo status={paramStatus?.toLowerCase()} />
      <ListingDescriptionAndAmenities />
      <ListingReviews />
      <ListingLocation />
    </section>
  );
};

export default SingleListingPageContent;
