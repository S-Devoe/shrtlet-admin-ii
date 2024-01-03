import React from "react";
import ListingCard from "../components/ListingCard";

const AllListings = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1.38rem]">
      {Array(9)
        .fill("")
        .map((_, i) => (
          <ListingCard
            status={
              (i + 1) % 2 === 0
                ? "Pending"
                : (i + 1) % 3 === 0
                ? "Approved"
                : "Declined"
            }
            key={`card-${i + 1}`}
          />
        ))}
    </section>
  );
};

export default AllListings;
