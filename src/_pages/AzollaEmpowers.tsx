import useBreakpoints from '@/hooks/useBreakPoints';
// import TextColorRevealOnScroll from '@/utils/TextColorRevealOnScroll';

const colorChangeText = [
  'Azolla enables customers to move beyond compliance to performance,',
  ' delivering decarbonization solutions that reduce cost,',
  'improve efficiency, and enhance asset value.',
  ' Backed by Synergy Group, it combines advisory, execution,',
  ' and digital capabilities to deliver measurable impact at scale.',
];

const textForMobile = [
  'Azolla enables customers to move beyond compliance to performance,',
  'delivering decarbonization solutions that reduce cost,',
  'improve efficiency, and enhance asset value.',
  'Backed by Synergy Group, it combines advisory, execution,',
  ' and digital capabilities to deliver measurable impact at scale.',
  
];

function AzollaEmpowers() {
  const { isXs } = useBreakpoints();
  return (
   <div className='p-6 md:p-10 xl:p-20 text-responsive-4xl lg:text-[2.5vw] !leading-[1.2] text-white font-[500] bg-black'>
      {isXs ? textForMobile : colorChangeText}
    </div>
  );
}

export default AzollaEmpowers;
