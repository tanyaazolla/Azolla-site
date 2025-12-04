import Button from '@/components/Button/Button';
import { Avatar, Image, Divider } from '@nextui-org/react';
import { STRAPI_BASE_URL } from '@/utils/baseUrl';
import { useEffect, useState } from 'react';
import { StrapiImage } from '@/types/blog';

interface RecordDetails {
  id: number;
  attributes: {
    keyPoint: string;
    ketPointDescription: string;
    quote: string;
    customerName: string | null;
    customerRole: string;
    buttonText: string | null;
    buttonLink: string;
    image: StrapiImage;
    customerLogo: StrapiImage;
    customerImage: StrapiImage;
  };
}

async function getDetails() {
  const res = await fetch(`${STRAPI_BASE_URL}/api/track-records?populate=*`, {
    cache: 'no-cache',
  });
  const response = await res.json();
  return response;
}

function TrackRecordForBlog() {
  const [details, setDetails] = useState<RecordDetails[]>();

  useEffect(() => {
    (async () => {
      const response = await getDetails();
      setDetails(response.data);
    })();
  }, []);

  return (
    <section className='bg-black px-10 xl:px-24'>
      {details && details.length > 0 && (
        <div>
          <Divider className='bg-dark_gray' />
          <div className='py-14 md:py-20 flex flex-col gap-10'>
            {details.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col-reverse lg:flex-row text-white bg-black_shade_2 rounded-lg my-0 lg:my-10 2xl:justify-between'
                >
                  <div className='w-full lg:w-[75%] p-5 md:px-10 md:py-16 space-y-responsive-md'>
                    <Image
                      src={
                        STRAPI_BASE_URL +
                        item.attributes.customerLogo?.data?.attributes?.url
                      }
                      alt='logo'
                      radius='none'
                      className='w-[80%]'
                    />
                    <div>
                      <h3 className='font-extrabold text-responsive-4xl'>
                        {item.attributes.keyPoint}
                      </h3>
                      <p className='text-responsive-sm'>
                        {item.attributes.ketPointDescription}
                      </p>
                    </div>
                    <div className=''>
                      <q className="text-7xl relative -bottom-5 text-white leading-[0] after:content-['']" />{' '}
                      <blockquote className='inline text-responsive-sm'>
                        {item.attributes.quote}
                      </blockquote>
                    </div>
                    <div className='w-full flex flex-col md:flex-row gap-5 justify-between pb-5 md:pb-0 md:items-center'>
                      <div className='flex flex-row gap-4 items-center'>
                        <Avatar
                          size='lg'
                          showFallback
                          src={
                            STRAPI_BASE_URL +
                              item.attributes.customerImage?.data?.attributes
                                ?.url || ''
                          }
                          className='shrink-0'
                        />
                        <div className='text-responsive-xs'>
                          <div className='font-semibold capitalize'>
                            {item.attributes.customerName}
                          </div>
                          <div>{item.attributes.customerRole}</div>
                        </div>
                      </div>
                      <Button
                        label={
                          item.attributes.buttonText ||
                          'Read customer success story'
                        }
                        variant='tertiary'
                        href={
                          item.attributes.buttonLink ||
                          '/blog/arcelor-mittal-tracking-efficiency-post-propeller-retrofit'
                        }
                        customClass='w-auto  shrink-0'
                      />
                    </div>
                  </div>
                  <Image
                    fallbackSrc={'/images/TrackRecordShip.webp'}
                    src={
                      STRAPI_BASE_URL +
                      item.attributes.image?.data?.attributes?.url
                    }
                    alt='Ship in track record section'
                    radius='none'
                    classNames={{
                      img: 'w-full lg:w-full object-cover h-[200px] md:h-[300px] lg:h-full',
                      wrapper:
                        'bg-no-repeat bg-cover bg-center w-full !max-w-full lg:!max-w-[25%] !rounded-t-lg lg:!rounded-r-lg lg:!rounded-l-none',
                    }}
                    className='!rounded-t-lg lg:!rounded-r-lg lg:!rounded-l-none'
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default TrackRecordForBlog;
