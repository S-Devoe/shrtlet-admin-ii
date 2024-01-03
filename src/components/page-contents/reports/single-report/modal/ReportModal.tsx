import BackBtn from "@/components/buttons/backButton";
import Button from "@/components/buttons/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ReportModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        w={"100%"}
        mx={"4"}
        borderRadius={"16px"}
        p={{ base: "6", md: "10" }}
        maxWidth={"40rem"}
      >
        <BackBtn onClick={onClose} />
        <ModalBody
          p={{ base: 0, md: "4" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <section className="w-full flex flex-col items-center gap-4">
            <ModalHeader
              my={"6"}
              fontWeight={"semibold"}
              p={0}
              textAlign={"center"}
              fontSize={"1.5rem"}
              className="!font-serif !text-primary-lighter"
            >
              You have successfully resolved this report.
            </ModalHeader>

            <Button
              onClick={onClose}
              text="Finish"
            
              className="w-full md:max-w-[15rem] py-3"
            />
          </section>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ReportModal;
