import StickyScroll from '@/components/StickyScroll/StickyScroll';

function AzollaStory() {
  return (
    <StickyScroll
      title={
        <>
          The <br />
          Azolla story
        </>
      }
      customClass='mb-10 md:mb-16'
    >
      <div className='w-full pt-10 md:pt-0 text-base lg:text-3xl lg:leading-10 flex flex-col gap-5 lg:gap-10'>
        <p>
 
For years, maritime emission reduction was always perceived as a compliance burden that’s CAPEX heavy and often without any quantifiable returns on investment.        </p>
        <p>
 
Azolla was founded within Synergy Marine Group in 2019 to change this narrative. We believed that with the right expertise, data, and commercial thinking, every decarbonization decision could be planned for maximum emission reduction and measurable financial outcome.         </p>
        <p>
Today, as a trusted decarbonization partner, we help some of the world’s largest maritime companies discover their profitable pathways to maritime decarbonization - evaluating fleets for energy saving opportunities, building investment business cases, executing retrofit projects, and leveraging proprietary digital tools to monitor emissions & regulatory compliance.        </p>
       
      </div>
    </StickyScroll>
  );
}

export default AzollaStory;
