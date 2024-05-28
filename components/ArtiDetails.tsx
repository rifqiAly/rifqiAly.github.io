import { detailProps } from "@/types";
import React from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
} from "@nextui-org/react";
import utils from "@/utils";

interface Details {
  open: boolean;
  closeModal: () => void;
  data: detailProps;
}

const ArtiDetails = ({ open, closeModal, data }: Details) => {
  const picArr = data.media[0]["media-metadata"];
  const alt = data.media[0].caption;
  const pic = picArr[picArr.length - 1];
  return (
    <Modal
      backdrop={"blur"}
      isOpen={open}
      onClose={closeModal}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      hideCloseButton={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {data.title}
            </ModalHeader>
            <ModalBody>
              <Divider />
              <div className="flex flex-row justify-between items-center">
                <span className="text-[12px]">{utils.formatPublish(data.published_date)}</span>
                <span className="text-[12px]">{data.byline}</span>
              </div>
              <Image
                src={pic.url}
                alt={alt}
                priority
                width={pic.width}
                height={pic.height}
              />
              <p>{data.abstract}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              {/* <Button color="primary" onPress={onClose}>
                Action
              </Button> */}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ArtiDetails;
