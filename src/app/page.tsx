'use client';

import { useState } from 'react';
import HeroBanner from '@/_pages/HeroBanner';
import NewFooter from '@/_pages/NewFooter';
import HomePageVideo from '@/_pages/HomePageVideo';
import DecarbSolutions from '@/_pages/DecarbSolutions';
import AzollaEmpowers from '@/_pages/AzollaEmpowers';
import Services from '@/_pages/Services';
import NavBar from '@/components/Navbar/index';
import AzollaPromise from '@/_pages/AzollaPromise';
import BlogsDetails from '@/_pages/BlogsDetails';
import AnnouncementBanner from '@/_pages/AnnouncementBanner';
import Brightside from '@/_pages/Brightside';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>();
  const handleOpen = (value: boolean) => {
    setIsMenuOpen(value);
  };
  
  return (
    <>
      {!isMenuOpen && <AnnouncementBanner />}
      <NavBar isMenu={isMenuOpen} handleOpen={handleOpen} />
      <HeroBanner />
      {/* <HomePageVideo /> */}
      <Brightside />
      <Services />
      <AzollaEmpowers />
      <DecarbSolutions />
      <BlogsDetails />
      {/* <AzollaPromise /> */}
      <NewFooter />
    </>
  );
}
