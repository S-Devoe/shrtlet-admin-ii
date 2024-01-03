import React from "react";
import Button from "../buttons/button";
import clsx from "clsx";

export default function PaginationComponent() {
  return (
    <div className="flex justify-center gap-4">
      <Button
        className={"font-bold text-base"}
        text="Previous"
        disabled={true}
      />
      <div className="flex gap-2 items-center cursor-pointer">
        {Array.from(Array(2)).map((_, idx) => (
          <div
            key={idx}
            className={clsx(
              "rounded-lg border px-4 py-2 flex items-center select-none",
              {
                "border-orange text-orange": idx === 0,
                "border-gray-six": idx !== 0,
              }
            )}
          >
            {idx + 1}
          </div>
        ))}
      </div>
      <Button className={"font-bold text-base"} text="Next" width="medium" />
    </div>
  );
}
