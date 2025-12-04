import { Modal, ModalContent, ModalBody } from '@nextui-org/react';
import Arrow from '@/svg/PromiseArrow';
import React, { useEffect, useState } from 'react';
import ContactUs from './ContactUs';
import { scheduleCall } from '@/utils/schedular';
import { LetsTalkType } from '@/types/letsTalk';

interface Props {
  type?: LetsTalkType;
  isOpen: boolean;
  onOpenChange: () => void;
}

function LetsTalk({ type = LetsTalkType.HOME, isOpen, onOpenChange }: Props) {
  const [talkType, setTalkType] = useState<LetsTalkType>();

  useEffect(() => {
    setTalkType(type);
  }, [type]);

  let title: string | React.ReactNode;
  let header: string | React.ReactNode;
  let contactUsType: LetsTalkType;

  switch (talkType) {
    case LetsTalkType.GET_STARTED:
      title = (
        <>
          Yay! Let’s unlock value and{' '}
          <p className='inline lg:inline-block'>future-proof your business.</p>
        </>
      );
      header = 'Get Started';
      contactUsType = LetsTalkType.GET_STARTED;
      break;
    case LetsTalkType.SUPPORT:
      title = (
        <div className='text-responsive-xl leading-[1.1]'>
          Hey, we hope everything is fine.{' '}
          <p className='inline lg:inline-block'>
            Our compassionate support team is here for you.
          </p>
        </div>
      );
      header = 'Support';
      contactUsType = LetsTalkType.SUPPORT;
      break;
  }

  return (
    <Modal
      size='5xl'
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={() => setTalkType(type)}
      className='max-h-[90vh] md:h-auto overflow-y-auto'
      classNames={{ closeButton: 'scale-150 m-2.5 p-1' }}
    >
      <ModalContent>
        {(onClose) => (
          <ModalBody>
            {talkType === LetsTalkType.HOME ? (
              <div className='pb-0 py-10'>
                <div className='xl:px-10 text-responsive-3xl leading-[1] text-start md:text-center'>
                  Hello there! We&apos;d love to hear{' '}
                  <p className='inline lg:inline-block'>from you.</p>
                </div>
                <div className='p-10 flex flex-col md:flex-row gap-10 justify-center'>
                  <button
                    onClick={() => {
                      onClose();
                      scheduleCall();
                    }}
                    className='rounded-full px-10 py-3 text-xl font-semibold border-2 border-black/50 hover:bg-black/5'
                  >
                    Schedule a call
                  </button>

                  <button
                    className='rounded-full px-10 py-3 text-xl font-semibold border-2 border-black/50 hover:bg-black/5'
                    onClick={() => setTalkType(LetsTalkType.GET_STARTED)}
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => setTalkType(LetsTalkType.SUPPORT)}
                    className='rounded-full px-10 py-3 text-xl font-semibold border-2 border-black/50 hover:bg-black/5'
                  >
                    Support
                  </button>
                </div>
              </div>
            ) : (
              <div className='py-10 lg:px-10'>
                <Arrow
                  title='Back'
                  customClass={`absolute top-9 z-10 w-10 h-10 hover:bg-black/5 rounded-full !cursor-pointer p-2 ${
                    type !== LetsTalkType.HOME && 'invisible'
                  }`}
                  onClick={() => setTalkType(LetsTalkType.HOME)}
                />
                <ContactUs
                  title={title && title}
                  header={header && header}
                  type={contactUsType}
                />
              </div>
            )}
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}

export default LetsTalk;
