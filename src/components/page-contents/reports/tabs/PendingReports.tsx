import React from "react";
import ReportCard from "../component/ReportCard";

const PendingReports = () => {
  return (
    <section className="flex flex-col gap-6">
      {Array(4)
        .fill("")
        .map((_, i) => (
          <ReportCard status="Pending" key={`card-${i}`} />
        ))}
    </section>
  );
};

export default PendingReports;
