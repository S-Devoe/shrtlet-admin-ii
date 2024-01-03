import BackBtn from "@/components/buttons/backButton";
import Button from "@/components/buttons/button";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import ListingCard2 from "../../components/ListingCard2";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AcceptListingModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent className="!w-full !mx-4 !rounded-[1rem] !p-[1.5rem] md:!p-[2.5rem] !max-w-[40rem]">
        <BackBtn onClick={onClose} />
        <ModalBody className="!p-0 md:!p-4">
          <section className="w-full flex flex-col items-center gap-4">
            <ModalHeader className="md:!mt-[4rem] !font-serif !p-0 !text-center !text-primary-lighter !text-[1.5rem]">
              You have successfully approved this listing.
            </ModalHeader>
            <ListingCard2 />
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

export default AcceptListingModal;
