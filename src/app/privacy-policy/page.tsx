import HomePage from '@/_pages/HomePage';
import NewFooter from '@/_pages/NewFooter';
import PrivacyPolicy from '@/_pages/PrivacyPolicy';
import NavBar from '@/components/Navbar/index';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Privacy policy | Azolla',
    description:
      'Explore our Privacy Policy to understand how we handle your information.',
    metadataBase: new URL('https://azolla.sg'),
    alternates: {
      canonical: '/privacy-policy'
    },
    openGraph: {
      title: 'Privacy policy | Azolla',
      description:
        'Explore our Privacy Policy to understand how we handle your information.',
      images: [{ url: 'https://azolla.sg/icon.png' }],
      url: 'https://azolla.sg/privacy-policy',
      type: 'website',
    },
    twitter: {
      title: 'Privacy policy | Azolla',
      description:
        'Explore our Privacy Policy to understand how we handle your information.',
      images: [{ url: 'https://azolla.sg/icon.png' }],
    },
  };
};

function Privacy() {
  return (
    <>
      <NavBar />
      <HomePage type='Privacy Policy' />
      <PrivacyPolicy />
      <NewFooter type='Privacy Policy' />
    </>
  );
}

export default Privacy;
