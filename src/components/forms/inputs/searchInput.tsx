"use client";
import FilterIcon from "@/icons/filterIcon";
import SearchIcon from "@/icons/searchIcon";
import { clsx } from "clsx";

export enum InputType {
  text = "text",
  email = "email",
}

type InputProps = {
  name: string;
  placeholder: string;
  label?: string;
  icon?: JSX.Element;
  className?: string;
  filter?: boolean;
};

const SearchInput = ({
  name,
  placeholder,
  label,
  icon,
  className,
  filter = true,
}: InputProps) => {
  return (
    <fieldset className="flex flex-col items-start gap-2 grow w-full">
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-four mb-2"
        >
          {label}
        </label>
      )}
      <div className={clsx("relative w-full text-gray-four")}>
        <div className="pointer-events-none absolute inset-y-0 top-4 h-fit left-0 flex items-center pl-3 text-inherit">
          <SearchIcon />
        </div>
        {filter && (
          <div className="absolute inset-y-0 top-3 h-fit right-0 flex items-center pr-2 cursor-pointer">
            <FilterIcon className="w-12 h-8 text-gray-six hover:text-gray-five" />
          </div>
        )}
        <input
          type={"search"}
          name={name}
          id={name}
          className={clsx(
            className,
            "border focus:bg-white focus:border border-gray-five border-collapse box-border block w-full rounded-2xl py-4 text-gray-two outline-none ring-0 placeholder:text-gray-four placeholder:font-normal placeholder:text-sm sm:text-sm sm:leading-6",
            "px-12"
          )}
          placeholder={placeholder}
        />
      </div>
    </fieldset>
  );
};

export { SearchInput };
