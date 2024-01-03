"use client";
import dynamic from "next/dynamic";
import Badge from "@/components/badge/badge";
import { useSearchParams } from "next/navigation";
import { reportVariants } from "../../component/ReportCard";
import CautionImage from "@/assets/images/caution-img.png";
import Image from "next/image";
import Button from "@/components/buttons/button";
import { Fragment } from "react";
import { useDisclosure } from "@chakra-ui/react";
const ReportModal = dynamic(() => import("../modal/ReportModal"));

const ReportInfo = () => {
  const params = useSearchParams();
  const status = params.get("status") as string;

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Fragment>
      <section>
        <div>
          <Badge text={status || ""} variant={reportVariants(status)} />
          <h1 className="text-[2.5rem] font-serif">Caution Fee Refund</h1>
          <div className="flex items-center gap-1 font-normal text-xs">
            <h3 className="leading-5 text-black-two-three">Adeyemi Akitoye</h3>
            <h4 className="text-gray-five">12/04/2023 - 09:23AM</h4>
          </div>
          <p className="w-full text-base font-normal text-black-two-three mt-8 mb-4">
            My caution fee wasn&apos;t refunded after I checked out, I really
            want to know why it wasn&apos;t refunded. I have attached an image
            of the screenshot of my reservation details.
          </p>
        </div>
        <div>
          <div className="relative h-[29rem] w-[16rem]">
            <Image
              src={CautionImage}
              alt="img"
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="w-full text-sm font-normal text-black-two-three my-4">
            Reported via email
          </p>
        </div>
        <Button
          disabled={status?.toLowerCase() === "resolved"}
          text="Mark as resolved"
          className="!py-4 w-full max-w-[17rem] mt-8"
          onClick={onOpen}
        />
      </section>
      <ReportModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
};

export default ReportInfo;
