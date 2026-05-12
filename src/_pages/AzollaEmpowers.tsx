import useBreakpoints from '@/hooks/useBreakPoints';
// import TextColorRevealOnScroll from '@/utils/TextColorRevealOnScroll';

const colorChangeText = [
  'Azolla enables customers to move beyond compliance to performance, delivering decarbonization solutions that reduce cost, improve efficiency, and enhance asset value. ',
  ' Backed by Synergy Group, it combines advisory, execution, and digital capabilities to deliver measurable impact at scale.',
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
    <div className='p-10 py-20 xl:px-24 xl:py-32 !pr-0 text-responsive-4xl lg:text-[3vw] !leading-[1.2] text-white font-[500] bg-black'>
      {isXs ? textForMobile : colorChangeText}
    </div>
  );
}

export default AzollaEmpowers;
