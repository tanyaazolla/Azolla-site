import { Metadata } from 'next';
import NewFooter from '@/_pages/NewFooter';
import NavBar from '@/components/Navbar/index';
import InsightsHeader from '@/_pages/InsightsHeader';
import React from 'react';
import InsightsContent from '@/_pages/InsightsContent';
export const generateMetadata = (): Metadata => {
  return {
    title: 'Insights & Strategies for Maritime Decarbonization | Azolla',
    description:
      'Explore the latest insights, innovations, and strategies to navigate the maritime decarbonization journey. Stay informed on profitable pathways to compliance, fuel efficiency, and sustainability in shipping.',
    metadataBase: new URL('https://azolla.sg'),
    alternates: {
      canonical: '/insights'
    },
    openGraph: {
      title: 'Insights & Strategies for Maritime Decarbonization | Azolla',
      description:
        'Explore the latest insights, innovations, and strategies to navigate the maritime decarbonization journey. Stay informed on profitable pathways to compliance, fuel efficiency, and sustainability in shipping.',
      images: [{ url: 'https://azolla.sg/icon.png' }],
      url: 'https://azolla.sg/insights',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Insights & Strategies for Maritime Decarbonization | Azolla',
      description:
        'Explore the latest insights, innovations, and strategies to navigate the maritime decarbonization journey. Stay informed on profitable pathways to compliance, fuel efficiency, and sustainability in shipping.',
      images: [{ url: 'https://azolla.sg/icon.png' }],
    },
  };
};
function Insights() {
  return (
    <>
      <NavBar />
      <InsightsHeader/>
      <InsightsContent/>
      <NewFooter />
    </>
  );
}
export default Insights;