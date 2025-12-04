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
          Our story began within the heart of a renowned ship management
          company, Synergy, where the seeds of innovation were sown to combat
          one of the most significant challenges of our time - climate change.
        </p>
        <p>
          Traditionally, sustainability was often seen as a burden on
          businesses, requiring hefty investments without straightforward
          returns.
        </p>
        <p>
          At Synergy, we recognized that this perception needed to change. We
          realized that for decarbonization efforts to be sustainable, they
          needed to generate value for both the company and its partners. Thus
          laying the foundation for Azolla.
        </p>
        <p>
          Today, Azolla empowers committed maritime companies to facilitate
          change and fast-track a seamless transition to cleaner energy sources.
        </p>
      </div>
    </StickyScroll>
  );
}

export default AzollaStory;
