"use client";
import Badge from "@/components/badge/badge";
import { useRouter } from "next/navigation";

interface Props {
  status: "Pending" | "Resolved";
}

const ReportCard = ({ status }: Props) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`reports/23?status=${status}`)}
      className="w-full flex gap-4 p-4 md:p-6 rounded-2xl bg-gray-eleven"
    >
      <div className="flex flex-col items-start gap-1">
        <h2 className="text-lg text-black-six font-bold leading-6">
          Caution Fee Refund
        </h2>
        <p className="text-base text-start text-black-two-three leading-6 font-normal">
          My caution fee wasn&apos;t refunded after I checked out, I really want
          to know why it wasn&spos;t refunded
        </p>
        <div className="flex items-center gap-1 font-normal">
          <h3 className="text-xs leading-5 text-black-two-three">
            Adeyemi Akitoye
          </h3>
          <h4 className="text-gray-five text-xs">12/04/2023 - 09:23AM</h4>
        </div>
      </div>
      <Badge text={status} variant={reportVariants(status)} />
    </button>
  );
};

export default ReportCard;

export const reportVariants = (status: string) => {
  switch (status?.toLowerCase()) {
    case "pending":
      return "pending";

    case "resolved":
      return "success";
    default:
      return "primary";
  }
};
