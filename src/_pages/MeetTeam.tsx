'use client'

import {useState} from 'react';
import {Image} from "@nextui-org/image";
import { Link } from '@nextui-org/react';


const members = [
    { src: '/images/team/Kiran.png', alt: 'Kiran Shet', name: 'Kiran Shet', profile: 'Business Head', link: 'https://www.linkedin.com/in/kiran-shet-1850a125/' },
    { src: '/images/team/Aditya.png', alt: 'Aditya Srivastsava', name: 'Aditya Srivastsava', profile: 'Manager - Energy Efficiency & Decarbonization' , link: 'https://www.linkedin.com/in/aditya-srivastava-04231722/' },
    { src: '/images/team/Ashwin.png', alt: 'Ashwin', name: 'Ashwin', profile: 'Growth Manager', link: 'https://www.linkedin.com/in/ashwin-kathiresan/' },
    { src: '/images/team/Pinaac.png', alt: 'Pinaac Makwana', name: 'Pinaac Makwana, Ph.D.', profile: 'Senior Project Manager' , link: 'https://www.linkedin.com/in/pinaac-makwana-ph-d-mimarest-57bb7624/'},
];


const OurTeam = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const handleSelectedMember = (index: any) => {
        setSelectedMember(index);
    }
    return (
        <div className="flex flex-col mt-16" onMouseLeave={()=> setSelectedMember(null)}>
            <div className='lg:flex hidden pl-5 mb-8 items-center'>
                <div className='flex justify-center items-center py-2 md:py-2 xl:py-10 xl:px-9 h-[50px] !leading-[1] text-responsive-lg'>
                    <p className='font-[600] text-responsive-xl'>Meet</p>
                    {selectedMember === null ? (
                        <p className='font-[600] ml-2 text-responsive-xl'> the Team </p>
                    ) : ( 
                        <div className='flex gap-4 ml-2 justify-center items-center capitalize translate-y-0.5'>
                            
                    {members[selectedMember].name} - {members[selectedMember].profile}
                    <Link
                        href={members[selectedMember].link}
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        <div className='p-2 lg:flex hidden justify-center items-center'>
                          <Image
                            src={`/images/media/linkedin-blue.svg`}
                            alt="linkedinicon"
                            width={28}
                            height={28}
                            className='cursor-pointer rounded-none'
                          />
                          </div>
                    </Link>
                </div>
                 )}               
            </div>
            </div>
            <div className='lg:hidden flex flex-col mt-10 md:pl-10 pl-6 mb-8'>
            <div className='flex flex-col py-2 md:py-2 xl:p-10 !leading-[1] text-responsive-lg justify-center'>
                {selectedMember === null ? (
                <span className='font-[600] h-[50px]'>Meet the Team</span>
                ) : (
                <div className='flex flex-col justify-center h-[50px]'>
                    <div className='flex gap-2 items-center'>
                        <span className='font-[600]'>Meet</span> 
                        <span className='capitalize'>{members[selectedMember]?.name}</span>
                        <Link
                            href={members[selectedMember]?.link}
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <div className='p-2'>
                            <Image
                                src={`/images/media/linkedin-blue.svg`}
                                alt="linkedinicon"
                                width={18}
                                height={18}
                                className='cursor-pointer rounded-none'
                            />
                            </div>
                        </Link>
                    </div>

                    <div className='text-responsive-sm'>
                    {members[selectedMember]?.profile}
                    </div>
                </div>
                )}
            </div>
            </div>
            <div className='flex md:gap-8 w-full justify-between md:-mb-6 lg:-mb-32 -mb-6'>
                {members.map((member, index) => (
                    <Image
                     key={index}
                     src={member.src}
                     alt={member.alt}
                     onTouchStart={() => handleSelectedMember(index)}
                     onClick={()=>handleSelectedMember(index)}
                     onMouseEnter={() => handleSelectedMember(index)}
                     className={`lg:w-[350px] cursor-auto transition-all z-0 duration-300 ${
                        selectedMember === index ? 'grayscale-0' : 'grayscale'}`}
                    />  
                ))
                }
            </div>
        </div>
    );
};

export default OurTeam;
