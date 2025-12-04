'use client';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import Link from 'next/link';

export const DropDown = ({ children, dropDownItems }: any) => {
  return (
    <Dropdown className='dark'>
      <DropdownTrigger>
        {children}
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown"
      >
        {
          dropDownItems.map((item: any) => {
            return <DropdownItem
              key={item.key}
            >
              <Link href={item.to} className='text-white text-xl font-medium p-3 block' rel={item.newTab  ? "noopener noreferrer" : ''} target={item.newTab  ? "_blank" : ''}>
                {item.key}
              </Link>
            </DropdownItem>
          })
        }
      </DropdownMenu>
    </Dropdown>
  )
}
