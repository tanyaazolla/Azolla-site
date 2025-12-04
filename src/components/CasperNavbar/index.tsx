'use client';
import React from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, useDisclosure, Accordion, AccordionItem, Divider } from "@nextui-org/react";
import useBreakpoints from "@/hooks/useBreakPoints";
import ButtonComponent from "../Button/Button";
import { scheduleCallCasper } from "@/utils/schedular";


export default function App({
  isMenu = false,
  handleOpen,
}: {
  isMenu?: boolean;
  handleOpen?: (value: boolean) => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(isMenu);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isXs } = useBreakpoints();

  return (
    <Navbar
      id='casperNavbar'
      maxWidth='full'
      shouldHideOnScroll={!isXs}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={(value) => {
        setIsMenuOpen(value);
        handleOpen?.(value);
      }}
      classNames={{ toggleIcon: "before:h-[2px] after:h-[2px]" }}
      className='bg-black md:py-2 border-b-0 xxs:!border-b-[0.5px] lg:border-b-0'
    >
      <NavbarContent justify='start'>
        <NavbarBrand>
          <Link href='/casper'>
            <NavbarBrand className="xl:pl-6 xxs:pl-2 py-2">
              <Image
                  src='/images/casper/Casper-logo.svg'
                  alt='casper-logo'
                  width={isXs? 120: 160}
                  height={isXs? 30: 60}
                />
              </NavbarBrand>
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='text-white lg:hidden'
        />
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-8" justify="end">
        <NavbarItem>
            <Link
              href='https://casper.azolla.sg/login'
              onClick={onOpen}
              className='text-white !text-responsive-sm font-medium after:bg-azolla_purple lg:mr-4 after:absolute after:h-[0.2rem] after:w-0 after:-bottom-[27px] after:left-0 hover:after:w-full after:transition-all hover:opacity-90'
              target='_blank'
            >
              Login
            </Link>
          </NavbarItem>

          <NavbarItem>
            <ButtonComponent
              label='Book Demo'
              variant='tertiary'
              onClick={scheduleCallCasper}
              customClass='!text-responsive-sm !py-2 !px-8 lg:!px-8 xxs:text-responsive-sm xxs:!px-2 !font-semibold hover:!border-white'
            />
          </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='bg-white md:pt-8 !px-0 gap-0'>
      <NavbarItem>
            <Link
              href='https://casper.azolla.sg/login'
              onClick={onOpen}
              className='py-4 px-6 w-full !text-black !text-xl font-medium active:opacity-100 active:!text-azolla_blue'
              target='_blank'
              rel={'noopener noreferrer'}
            >
              Login
            </Link>
          </NavbarItem>
          <Divider />
          <NavbarItem>
            <Link
              onClick={scheduleCallCasper}
              className='py-4 px-6 w-full !text-black !text-xl font-medium active:opacity-100 active:!text-azolla_blue'
              target='_blank'
              rel={'noopener noreferrer'}
            >
              Book Demo
            </Link>
          </NavbarItem>
         <Divider/>
      </NavbarMenu>
    </Navbar>
  );
}
