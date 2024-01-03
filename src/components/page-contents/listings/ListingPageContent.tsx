import SearchNormalIcon from "@/icons/search-normal.icon";
import ListingsSection from "./sections/ListingsSection";
import { SearchInput } from "@/components/forms/inputs/searchInput";

const ListingPageContent = () => {
  return (
    <section className="w-full flex flex-col">
      <SearchInput
        name={"search_listing"}
        placeholder={"Search for a listing"}
        filter={false}
        className="mb-[2.6rem]"
      />
      <ListingsSection />
    </section>
  );
};

export default ListingPageContent;
