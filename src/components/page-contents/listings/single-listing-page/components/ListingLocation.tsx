import Image from "next/image";
import "./style.css";
import Map from "@/assets/images/mock-map.png";

const ListingLocation = () => {
  return (
    <section className="">
      <h3 className="listing-mini-header">Location</h3>
      <p className="text-gray-five font-[400] text-[1rem] ">
        12 Cowries Avenue, Victoria Island, Lagos
      </p>
      <div className="relative h-[11rem] w-full mt-2 ">
        <Image
          src={Map}
          alt="map"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default ListingLocation;
