"use client";
import React from "react";
import TextTruncate from "react-text-truncate";

export default function ListingDescription({
  description,
}: {
  description: string;
}) {
  const [isTruncated, setIsTruncated] = React.useState(true);
  const texts = description.trim().split("<br />");
  return (
    <div>
      <h3 className="listing-mini-header">Description</h3>
      {isTruncated ? (
        <React.Fragment>
          <TextTruncate
            text={texts[0]}
            line={4}
            truncateText="..."
            containerClassName="listing-text-lighter mt-2"
          />
          <div
            className="cursor-pointer mt-2 text-orange text-sm md:text-base "
            onClick={() => setIsTruncated(false)}
          >
            <span>Read full description</span>
          </div>
        </React.Fragment>
      ) : (
        texts.map((s, i) => (
          <p className="listing-text-lighter mt-2" key={i}>
            {s}
          </p>
        ))
      )}
    </div>
  );
}
