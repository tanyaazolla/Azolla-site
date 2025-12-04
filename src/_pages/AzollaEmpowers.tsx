import useBreakpoints from '@/hooks/useBreakPoints';
import TextColorRevealOnScroll from '@/utils/TextColorRevealOnScroll';

const colorChangeText = [
  'Leverage our expert decarbonization',
  'strategies and turn-key solutions',
  ' to unlock opportunities.',
];

const textForMobile = [
  'Leverage our expert',
  'decarbonization',
  'strategies and',
  'turn-key solutions',
  'to unlock',
  'opportunities.',
];

function AzollaEmpowers() {
  const { isXs } = useBreakpoints();
  return (
    <div className='p-10 py-20 xl:px-24 xl:py-32 !pr-0 text-responsive-4xl lg:text-[5vw] !leading-[1.2] text-white font-[500] bg-black'>
      <TextColorRevealOnScroll text={isXs ? textForMobile : colorChangeText} />
    </div>
  );
}

export default AzollaEmpowers;
