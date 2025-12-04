import Image from 'next/image';
import { STRAPI_BASE_URL } from '@/utils/baseUrl';
import { useEffect, useState } from 'react';

async function getTestimonials(type: string) {
  const res = await fetch(
    `${STRAPI_BASE_URL}/api/testimonials?filters[category][$eq]=${type}&populate=*`,
    { cache: 'no-cache' }
  );
  const response = await res.json();
  return response;
}

const defaultValue = {
  quote:
    'We are very pleased with the quality of work and service provided by Azolla. Their professionalism, attention to detail and adherence to industry regulations ensured successful project outcomes. We highly recommend Azolla as a reliable and competent solution partner.',
  customerRole: 'Head, Asset Performance, Maersk Tankers.',
  customerName: 'Santhosh Khsola',
};

function Testimonial({ type }: { type: string }) {
  const [testimonial, setTestimonial] = useState<any>();

  useEffect(() => {
    (async () => {
      if (type) {
        const testimonials = await getTestimonials(type);
        if (testimonials && testimonials?.data?.length > 0) {
          setTestimonial(testimonials?.data[0].attributes);
        } else {
          setTestimonial(defaultValue);
        }
      }
    })();
  }, []);

  return (
    <div className='mt-5 md:mt-0'>
      {testimonial && (
        <div className='max-sm:bg-gray-100 max-sm:rounded-xl p-5'>
          <q className='text-responsive-xl leading-[0]'>
            <blockquote className='before:p-px after:p-px inline text-pretty text-responsive-md font-medium leading-[1.4]'>
              {testimonial.quote}
            </blockquote>
          </q>
          <div className='flex pt-5 gap-5 items-center'>
            <Image
              width={46}
              height={46}
              className='rounded-md'
              src={
                testimonial?.image?.data?.length > 0
                  ? STRAPI_BASE_URL + testimonial.image.data[0]?.attributes.url
                  : '/images/avatar.png'
              }
              alt={'image'}
            />
            <div>
              <div className='text-lg font-bold'>
                {testimonial.customerName}
              </div>
              <div className='leading-[1.2] font-normal'>
                {testimonial.customerRole}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonial;
