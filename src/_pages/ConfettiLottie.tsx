import { Modal, ModalBody, ModalContent } from '@nextui-org/react';
import Lottie from 'lottie-react';
import confetti from '../../public/animations/colourful-confetti.json';

interface Props {
  message?: string | React.ReactNode;
  messageCustomClass?: string;
  isOpen: boolean;
  onOpenChange: () => void;
}

function ConfettiLottie({
  message,
  messageCustomClass,
  isOpen,
  onOpenChange,
}: Props) {
  return (
    <Modal
      size='full'
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className='bg-transparent bg-none'
      classNames={{
        backdrop: 'bg-black/70',
        closeButton:
          'z-10 md:mr-10 mt-10 flex justify-center items-center [&>svg]:w-6 [&>svg]:h-6 [&>svg]:stroke-white [&>svg]:hover:stroke-black',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <ModalBody>
            <div className='relative h-full w-full flex justify-center items-center'>
              <div
                className={`absolute text-white text-responsive-xl leading-[1.25] font-medium text-center ${messageCustomClass}`}
              >
                {message}
              </div>
              <Lottie
                animationData={confetti}
                loop={1}
                onComplete={onClose}
                className='h-full'
              />
            </div>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ConfettiLottie;
