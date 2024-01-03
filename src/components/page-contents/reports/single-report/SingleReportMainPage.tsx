"use client";
import { useSearchParams } from "next/navigation";
import { reportTab } from "../ReportPageContent";
import BackBtn from "@/components/buttons/backButton";
import ReportInfo from "./components/ReportInfo";

const SingleReportMainPage = () => {
  const params = useSearchParams();
  const activeTab = params.get("status");

  return (
    <section className="flex flex-col gap-8 w-full max-w-[55rem]">
      <section className="flex items-center w-full overflow-x-scroll hide-scroll md:justify-center">
        {reportTab.map((item, i) => (
          <div
            className={`w-full whitespace-nowrap flex justify-center capitalize px-8 md:px-20 pb-3 font-medium text-base border-b ${
              activeTab?.toLowerCase() === item.value
                ? "text-orange border-b-orange"
                : " text-gray-three border-b-gray-three"
            } `}
            key={`tab-${i + 1}`}
          >
            {item.label}
          </div>
        ))}
      </section>
      <BackBtn />
      <ReportInfo />
    </section>
  );
};

export default SingleReportMainPage;
