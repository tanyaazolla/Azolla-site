'use client';
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, useDisclosure, Accordion, AccordionItem, Divider } from "@nextui-org/react";
import Image from "next/image";
import useBreakpoints from "@/hooks/useBreakPoints";
import { DropDown } from "../DropDown";
import ButtonComponent from "../Button/Button";
import { ChevronDown } from "@/svg/ChevronDown";
import LetsTalk from "@/_pages/LetsTalk";

const solutionDropDownValues = [
  {
    key: 'Decarb Consulting',
    description: 'Managed key accounts in Fairhill and customer loyalty.',
    to: '/consultancy'
  },
  {
    key: 'Retrofit project solutions',
    description: 'Managed key accounts in Fairhill and customer loyalty.',
    to: '/project-management'
  },
  {
    key: 'Buy EUA',
    to: 'https://ets.azolla.sg/Buy_EUA',
    newTab: true
  },
  {
    key: 'FEUM Surplus',
    to: 'https://ets.azolla.sg/Buy_EUA',
    newTab: true
  }
]

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

  const menuItems = [
    "CASPER™",
    "Vessel EQ",
    "Solutions",
    "Insights",
    "About us",
    "Let's talk",
  ];

  return (
    <Navbar
      id='navbar'
      maxWidth='full'
      shouldHideOnScroll={!isXs}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={(value) => {
        setIsMenuOpen(value);
        handleOpen?.(value);
      }}
      classNames={{ toggleIcon: "before:h-[2px] after:h-[2px]" }}
      className='bg-black md:py-2'
    >
      <LetsTalk isOpen={isOpen} onOpenChange={onOpenChange} />

      <NavbarContent justify='start'>
        <NavbarBrand>
          <Link href='/'>
            <NavbarBrand>
              <Image
                src='/images/azolla_logo.svg'
                width={100}
                height={100}
                alt='Azolla logo'
              />
            </NavbarBrand>
          </Link>
        </NavbarBrand>

        <NavbarItem>
          <Link
            href='#'
            onClick={onOpen}
            className='lg:hidden pr-2 font-medium text-white text-lg underline underline-offset-4 active:opacity-100 active:!text-azolla_blue'
          >
            Let&apos;s talk
          </Link>
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='text-white lg:hidden'
        />
      </NavbarContent>

      <NavbarContent className='hidden lg:flex gap-8' justify='end'>
        <NavbarItem>
          <Link
            className='text-white !text-responsive-sm font-medium after:bg-azolla_blue after:absolute after:h-[0.2rem] after:w-0 after:-bottom-[27px] after:left-0 hover:after:w-full after:transition-all hover:opacity-90'
            href='/casper'
            rel={'noopener noreferrer'}
          >
            {menuItems[0]}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className='text-white !text-responsive-sm font-medium after:bg-azolla_blue after:absolute after:h-[0.2rem] after:w-0 after:-bottom-[27px] after:left-0 hover:after:w-full after:transition-all hover:opacity-90'
            href={'https://eet.azolla.sg/'}
            rel={'noopener noreferrer'}
            target={'_blank'}
          >
            {menuItems[1]}
          </Link>
        </NavbarItem>

        <NavbarItem>
          <DropDown dropDownItems={solutionDropDownValues}>
            <Button
              disableRipple
              endContent={<ChevronDown fill={'white'} />}
              className='text-white px-0 py-10 bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:opacity-90 !text-responsive-sm font-medium after:bg-azolla_blue after:absolute after:h-[0.2rem] after:w-0 after:-bottom-0 after:left-0 hover:after:w-full after:transition-all mx-2'
              radius='none'
              variant='light'
            >
              {menuItems[2]}
            </Button>
          </DropDown>
        </NavbarItem>
        <NavbarItem>
          <Link
            className='text-white !text-responsive-sm font-medium after:bg-azolla_blue after:absolute after:h-[0.2rem] after:w-0 after:-bottom-[27px] after:left-0 hover:after:w-full after:transition-all hover:opacity-90'
            href='/insights'
          >
            {menuItems[3]}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className='text-white !text-responsive-sm font-medium after:bg-azolla_blue after:absolute after:h-[0.2rem] after:w-0 after:-bottom-[27px] after:left-0 hover:after:w-full after:transition-all hover:opacity-90'
            href='/about-us'
          >
            {menuItems[4]}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ButtonComponent
            label={menuItems[5]}
            variant='tertiary'
            onClick={onOpen}
            customClass='!text-responsive-sm !py-2 !px-12 !font-bold hover:!border-white'
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='bg-white md:pt-8 !px-0 gap-0'>
        <NavbarMenuItem>
          <Link
            className='py-4 px-6 w-full !text-black !text-xl font-medium active:opacity-100 active:!text-azolla_blue'
            href={'/casper'}
            rel={'noopener noreferrer'}
          >
            {menuItems[0]}
          </Link>
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem>
          <Link
            className='py-4 px-6 w-full !text-black !text-xl font-medium active:opacity-100 active:!text-azolla_blue'
            href={'https://eet.azolla.sg/'}
            rel={'noopener noreferrer'}
            target={'_blank'}
          >
            {menuItems[1]}
          </Link>
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem className='p-0'>
          <Accordion className='px-0 py-0'>
            <AccordionItem
              indicator={<ChevronDown fill='black' />}
              title={menuItems[2]}
              classNames={{
                trigger: 'py-0 pr-5',
                title:
                  'py-4 px-6 !text-black !text-xl font-medium active:opacity-100 active:!text-azolla_blue',
                content: "py-0 bg-gray-100"
              }}
            >
              <ul className='flex flex-col'>
                {solutionDropDownValues.map((solution, index) => (
                  <li key={index} className={`border-t border-t-gray-300`}>
                    <Link
                      className='w-full pl-14  py-4 !text-black !text-lg font-medium active:opacity-100 active:!text-azolla_blue'
                      href={solution.to}
                      target={solution.newTab ? '_blank' : undefined }
                    >
                      {solution.key}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem>
          <Link
            className='w-full py-4 px-6 !text-black !text-xl font-medium active:opacity-100 active:!text-azolla_blue'
            href='/insights'
          >
            {menuItems[3]}
          </Link>
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem>
          <Link
            className='w-full py-4 px-6 !text-black !text-xl font-medium active:opacity-100 active:!text-azolla_blue'
            href='/about-us'
          >
            {menuItems[4]}
          </Link>
        </NavbarMenuItem>
        <Divider />
      </NavbarMenu>
    </Navbar>
  );
}
