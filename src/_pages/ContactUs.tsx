import {
  Input,
  Textarea,
  Select,
  SelectItem,
  useDisclosure,
} from '@nextui-org/react';
import Button from '@/components/Button/Button';
import React, { useState } from 'react';
import useFetch from '@/hooks/useFetch';
import { BACKEND_BASE_URL } from '@/utils/baseUrl';
import ConfettiLottie from './ConfettiLottie';
import { LetsTalkType } from '@/types/letsTalk';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

interface Props {
  title: string | React.ReactNode;
  header: string | React.ReactNode;
  type: LetsTalkType;
}

function ContactUs({ title, header, type }: Props) {
  const {
    isOpen: isLottieOpen,
    onOpenChange: onLottieOpenChange,
    onOpen: onLottieOpen,
  } = useDisclosure();
  const services = ['Tools', 'Consulting', 'Project Management', 'Others'];
  const defaultData = {
    Name: '',
    Email: '',
    ServiceOfInterest: null,
    Details: '',
    Number: null,
  };
  const defaultValidation = {
    Name: false,
    Email: false,
    ServiceOfInterest: false,
  };

  const [data, setData] = useState<{
    Name: string;
    Email: string;
    ServiceOfInterest: string | null;
    Details: string;
    Number: string | null;
  }>(defaultData);
  const [validation, setValidation] = useState(defaultValidation);
  const [formStatus, setFormStatus] = useState<'success' | 'failed'>();

  const { request } = useFetch();
  const contactInfoURL = `${BACKEND_BASE_URL}/api/v1/api/contact_info`;

  const validateName = (value: string) =>
    value.match(/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/g);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isEmailInvalid = React.useMemo(() => {
    if (data.Email === '') return false;
    return validateEmail(data.Email) ? false : true;
  }, [data.Email]);

  const isNameInvalid = React.useMemo(() => {
    if (data.Name === '') return false;
    return validateName(data.Name) ? false : true;
  }, [data.Name]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setData((prev) => ({ ...prev, [name]: value }));

    if (name === 'Email') {
      if (validateEmail(value)) {
        setValidation((prev) => ({ ...prev, [name]: true }));
      } else {
        setValidation((prev) => ({ ...prev, [name]: false }));
      }
    } else if (name === 'Name') {
      if (validateName(value)) {
        setValidation((prev) => ({ ...prev, [name]: true }));
      } else {
        setValidation((prev) => ({ ...prev, [name]: false }));
      }
    }
  };

  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let value = event.target.value;
    let updatedData = { ...data, ServiceOfInterest: value };
    setData(updatedData);
    if (services.includes(value)) {
      setValidation((prev) => ({ ...prev, ServiceOfInterest: true }));
    } else {
      setValidation((prev) => ({ ...prev, ServiceOfInterest: false }));
    }
  };

  const onPhoneNumberChange = (e: any) => {
    setData({ ...data, Number: e });
  };

  const handleSubmit = async () => {
    if (data && validation.Name && validation.Email) {
      if (type === LetsTalkType.GET_STARTED) {
        if (validation.ServiceOfInterest) {
          const response = await request({
            url: contactInfoURL,
            method: 'POST',
            body: data,
          });
          if (response.responseCode === 200) {
            setFormStatus('success');
            onLottieOpen();
            setData(defaultData);
            setValidation(defaultValidation);
          } else {
            setFormStatus('failed');
          }
        } else {
          setFormStatus('failed');
        }
      }
      if (type === LetsTalkType.SUPPORT) {
        const response = await request({
          url: contactInfoURL,
          method: 'POST',
          body: data,
        });
        if (response.responseCode === 200) {
          setFormStatus('success');
          onLottieOpen();
          setData(defaultData);
          setValidation(defaultValidation);
        } else {
          setFormStatus('failed');
        }
      }
    } else {
      setFormStatus('failed');
    }
  };

  return (
    <div className=''>
      <ConfettiLottie
        isOpen={isLottieOpen}
        onOpenChange={onLottieOpenChange}
        message={
          type === LetsTalkType.GET_STARTED ? (
            <>
              We got your response!, <br /> Our team will get back you shortly.
            </>
          ) : type === LetsTalkType.SUPPORT ? (
            <>
              We got your request! <br /> Hold tight; let us get back to you
              ASAP.
            </>
          ) : (
            ''
          )
        }
      />
      <div className='space-y-responsive-lg'>
        <div className='w-full font-medium text-responsive-sm leading-[1] text-center'>
          {header}
        </div>
        <div className='w-full text-responsive-2xl font-bold leading-[1] text-center'>
          {title}
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col sm:flex-row gap-5 lg:gap-10'>
            <Input
              isRequired
              name='Name'
              label='Name'
              labelPlacement='outside'
              radius='sm'
              value={data.Name}
              isInvalid={isNameInvalid}
              placeholder=' '
              type='text'
              onChange={handleChange}
            />
            <Input
              isRequired
              name='Email'
              label='Email'
              radius='sm'
              isInvalid={isEmailInvalid}
              value={data.Email}
              labelPlacement='outside'
              placeholder=' '
              type='email'
              onChange={handleChange}
            />
            {type === LetsTalkType.GET_STARTED ? (
              <Select
                size='sm'
                labelPlacement='outside'
                classNames={{
                  label: 'text-sm',
                  mainWrapper: 'h-10',
                  trigger: 'h-full',
                }}
                isRequired
                label={'Service of Interest'}
                placeholder=' '
                selectedKeys={[data.ServiceOfInterest || '']}
                onChange={handleSelectionChange}
              >
                {services.map((service) => (
                  <SelectItem
                    key={service}
                    value={service}
                    textValue={service}
                    aria-label={service}
                    className='aria-[label]: capitalize'
                  >
                    {service}
                  </SelectItem>
                ))}
              </Select>
            ) : (
              <div className='flex flex-col'>
                <label className='text-small font-medium pb-1.5 origin-top-left'>
                  Phone number
                </label>
                <PhoneInput
                  defaultCountry='IN'
                  value={data.Number || ''}
                  onChange={onPhoneNumberChange}
                  className='bg-default-100 rounded-small w-full shadow-sm px-3 gap-2 h-unit-10 min-h-unit-10 outline-none hover:bg-default-200 focus:bg-default-100 [&>input]:bg-transparent [&>input]:outline-none [&>input]:tracking-wide [&>input]:text-sm'
                />
              </div>
            )}
          </div>
          <Textarea
            name='Details'
            size='lg'
            label='Details'
            value={data.Details}
            radius='sm'
            labelPlacement='outside'
            onChange={handleChange}
            classNames={{ input: 'text-sm' }}
          />
          <div className='flex gap-5 justify-end items-center'>
            {formStatus === 'failed' && (
              <p className='text-red-500 text-responsive-xs'>
                Please check all the fields.
              </p>
            )}
            <Button
              type='button'
              onClick={handleSubmit}
              label='Submit'
              variant='tertiary'
              customClass='border border-azolla_blue font-semibold'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
