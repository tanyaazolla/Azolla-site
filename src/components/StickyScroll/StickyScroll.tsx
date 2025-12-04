interface StickyScrollProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
  customClass?: string;
  titlecustomClass?:string;
}

const StickyScroll = ({ title, children, customClass, titlecustomClass }: StickyScrollProps) => {
  return (
    <section className={`${customClass}`}>
      <h2 className={`md:sticky top-16 font-semibold w-full md:w-2/5 text-4xl text-start md:text-6xl lg:text-[70px] xl:text-[75px] lg:leading-[1.01] ${titlecustomClass}`}>
        {title}
      </h2>
      <div className={`flex flex-col items-end`}>
        <div className='w-full md:w-3/5 md:pl-10 xl:pl-14'>{children}</div>
      </div>
    </section>
  );
};

export default StickyScroll;
