'use client';

import Image from 'next/image';
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { PromiseCardProps } from '@/types/data';

function PromiseCard({
  imageSource,
  id,
  title,
  subtitle,
  description,
  showSubtitle = true,
}: PromiseCardProps) {
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  return (
    <div className='relative shrink-0 flex flex-col space-y-responsive-xs rounded-[25px] p-8 bg-white w-[90%] md:w-[372px] h-[310px] select-none'>
      <Image src={imageSource} alt={id} width={48} height={48} loading='lazy' />
      <div className='text-3xl leading-[1.1] font-bold break-words line-clamp-4'>
        {title}
      </div>
      {showSubtitle && (
        <div className='text-lg font-normal leading-[1.2] break-words line-clamp-3'>
          {subtitle}
        </div>
      )}
      <Button
        isIconOnly
        className='!bg-transparent hover:!bg-transparent !rounded-full absolute z-10 bottom-3 right-4'
        onClick={onOpen}
      >
        <Image
          src={'/images/plus-icon.svg'}
          alt='Plus Icon'
          width={36}
          height={36}
        />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        size='3xl'
        className='max-w-[820px] max-h-[480px] overflow-y-auto'
        classNames={{ closeButton: 'bg-azolla_blue/20 hover:bg-azolla_blue/20 text-xl text-azolla_blue m-2'}}
      >
        <ModalContent className='p-10 md:p-16 lg:p-20'>
          <ModalBody className='p-0 space-y-responsive-2xs'>
            <Image src={imageSource} alt={id} width={56} height={56} loading='lazy' />
            <div className='text-responsive-3xl font-bold'>{title}</div>
            <div className='text-responsive-sm'>{description}</div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default PromiseCard;
