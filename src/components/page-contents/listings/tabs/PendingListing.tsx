import ListingCard from "../components/ListingCard";

const PendingListing = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1.38rem]">
      {Array(9)
        .fill("")
        .map((_, i) => (
          <ListingCard status={"Pending"} key={`card-${i + 1}`} />
        ))}
    </section>
  );
};

export default PendingListing;
