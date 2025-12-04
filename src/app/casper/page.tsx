import { Metadata } from 'next';
import CasperNavbar from '@/components/CasperNavbar';
import CasperContent from '@/_pages/CasperContent';
import NewFooter from '@/_pages/NewFooter';
import LogoMarquee from '@/_pages/LogoMarquee';
import CasperSolution from '@/_pages/CasperSolution';
import CasperCompliance from '@/_pages/CasperCompliance';
import MeetTeam from '@/_pages/MeetTeam';

export const generateMetadata = (): Metadata => {
  return {
    title: 'CASPER™ – Simplifying FEUM & EU ETS Compliance',
    description:
      'CASPER™ streamlines compliance for Fuel EU Maritime and EU ETS by automating compliance calculations and helping shipowners and operators stay ahead of penalties. Discover real-time insights into your compliance balance, penalty exposure, and regulatory requirements.',
    metadataBase: new URL('https://azolla.sg'),
    alternates: {
      canonical: '/casper'
    },
    openGraph: {
      title: 'CASPER™ – Simplifying FEUM & EU ETS Compliance',
      description:
        'CASPER™ streamlines compliance for Fuel EU Maritime and EU ETS by automating compliance calculations and helping shipowners and operators stay ahead of penalties. Discover real-time insights into your compliance balance, penalty exposure, and regulatory requirements.',
      // images: [{ url: 'https://azolla.sg/images/azolla-team.webp' }],
      url: 'https://azolla.sg/casper',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'CASPER™ – Simplifying FEUM & EU ETS Compliance',
      description:
        'CASPER™ streamlines compliance for Fuel EU Maritime and EU ETS by automating compliance calculations and helping shipowners and operators stay ahead of penalties. Discover real-time insights into your compliance balance, penalty exposure, and regulatory requirements.',
      // images: [{ url: 'https://azolla.sg/images/azolla-team.webp' }],
    },
  };
};

              
function Casper() {
  
  return (
    <>
      <CasperNavbar />
      <CasperContent />
      {/*FIXME: Commenting for now  */}
      {/* <div className='bg-[#545454] w-full py-4 lg:py-8 -mt-6 md:-mt-8 xl:-mt-10 z-20 relative'>
        <p className="text-[#FFF] font-[500] flex text-responsive-sm !xxs:text-[3.4vw] justify-center mt-0 xxs:mt-5 sm:mt-0 md:mt-0 lg:mt-0">TRANSFORMING EMISSION COMPLIANCE AT</p>
        <div className='py-4 text-white md:mt-4'>
            <LogoMarquee/>
        </div>
      </div> */}
      <CasperCompliance/>
      <CasperSolution/>
      <MeetTeam />
      <NewFooter type={'Casper'} />
    </>
  );
}
export default Casper;


