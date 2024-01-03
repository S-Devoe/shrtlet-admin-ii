"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import ListingCard2 from "../../components/ListingCard2";
import Textarea from "@/components/forms/textarea/textarea";
import Button from "@/components/buttons/button";
import BackBtn from "@/components/buttons/backButton";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DeclineListingModal = ({ isOpen, onClose }: Props) => {
  const methods = useForm();
  const [stage, setStage] = useState(1);

  const onSubmit = (data: any) => {
    console.log(data);
    methods.reset();
    setStage(2);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent className="!w-full !mx-4 !rounded-[1rem] !p-[1.5rem] md:!p-[2.5rem] !max-w-[40rem]">
        <BackBtn onClick={onClose} />
        <ModalBody className="!p-0 md:!p-4">
          {stage <= 1 ? (
            <>
              <ModalHeader className=" md:!mt-[3rem] !font-serif !p-0 !text-center !text-primary-lighter !text-[1.5rem]">
                Are you sure you want to decline this listing?
              </ModalHeader>
              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit(onSubmit)}
                  className="mt-1 w-full flex flex-col gap-5 items-center"
                >
                  <Textarea
                    required
                    name="comment"
                    className="bg-gray-ten"
                    placeholder="Please state your reason for declining"
                  />
                  <div className="mt-4 w-full md:max-w-[16rem] flex flex-col items-center gap-4 ">
                    <Button
                      type="submit"
                      text="Yes, decline listing"
                      className="w-full py-3"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      text="No, cancel"
                      className="w-full py-3"
                      onClick={onClose}
                    />
                  </div>
                </form>
              </FormProvider>
            </>
          ) : (
            <section className="w-full flex flex-col items-center gap-4">
              <ModalHeader className="md:!mt-[4rem] !font-serif !p-0 !text-center !text-primary-lighter !text-[1.5rem]">
                You have successfully declined this listing.
              </ModalHeader>
              <ListingCard2 />
              <Button
                onClick={() => {
                  onClose();
                  setStage(1);
                }}
                text="Finish"
                className="w-full md:max-w-[15rem] py-3"
              />
            </section>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeclineListingModal;
