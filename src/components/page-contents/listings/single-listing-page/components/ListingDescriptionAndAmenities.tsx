import Button from "@/components/buttons/button";
import "./style.css";
import TaskSquareIcon from "@/icons/task-square.icon";
import ListingDescription from "./description";
import Link from "next/link";

const ListingDescriptionAndAmenities = () => {
  const description = `This cozy 2-bedroom apartment offers a perfect blend of comfort and
  convenience. With its modern amenities, spacious layout, and prime
  location, this apartment is an ideal choice for those seeking a stylish
  urban living experience. <br />
  This very stylish modern contemporary house is designed for having great
  group trips. It's located in a very secure, quiet and green
  residential area. The large floor to ceiling window makes the house very
  bright and`;
  return (
    <section className="w-full flex flex-col gap-[2.5rem]">
      <div className="block md:hidden">
        <ListingDescription description={description} />
      </div>
      <div className="hidden md:block">
        {description
          .trim()
          .split("<br />")
          .map((s, i) => (
            <p className="listing-text-lighter mt-2" key={i}>
              {s}
            </p>
          ))}
      </div>

      <div>
        <h3 className="listing-mini-header">Refundable Caution</h3>
        <p className="listing-text-lighter mt-2">₦50</p>
      </div>

      <div className="">
        <h3 className="listing-mini-header">Amenities</h3>
        <div className="mt-2 flex flex-col gap-3">
          {amenities.map((amenity, i) => (
            <div
              key={`amenity-${i + 1}`}
              className="flex items-center gap-2 text-[#757D8A] text-base font-normal"
            >
              <span className="w-6">
                <TaskSquareIcon />
              </span>
              <p>{amenity}</p>
            </div>
          ))}
        </div>

        <Button
          text="Show all amenities"
          variant="orangeOutline"
          className="hidden md:block w-fit mt-5 px-[2.5rem]"
        />
        <Link href="" className="md:hidden text-orange text-sm font-normal ">
          Show all 10 amenities
        </Link>
      </div>
    </section>
  );
};

export default ListingDescriptionAndAmenities;

const amenities = [
  "Kitchen",
  "Free Wi-Fi",
  "Parking",
  "Air Conditioning",
  "Private Pool",
  "TV",
];
