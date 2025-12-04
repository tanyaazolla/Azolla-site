'use client';

import { Divider, Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import { Jobs } from '@/types/job';
import Button from '@/components/Button/Button';

const Openings = ({ jobs }: { jobs: Jobs }) => {
  const getTeams = jobs.data.map((job) => {
    const team = job.attributes.team;
    return team;
  });
  const teams = ['All Teams', ...getTeams];
  const [value, setValue] = useState<string>('All Teams');

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className='px-10 md:px-20 xl:px-24'>
      <Divider className='bg-black' />
      <div id='openings' className='py-14 md:py-20 xl:py-32'>
        <h1 className='text-start md:text-center font-semibold leading-[1.02] md:text-[4rem] sm:text-[3rem] xxs:text-[2.25rem] text-[1.75rem] xl:text-responsive-4xl'>
          Openings
        </h1>
        {jobs.data.length > 0 ? (
          <>
            <div className='py-10 md:py-20 flex justify-end'>
              <Select
                size='lg'
                classNames={{
                  base: 'w-[250px] outline-0',
                  value: 'capitalize',
                }}
                labelPlacement='outside'
                label={' '}
                selectedKeys={value ? [value] : [teams[0]]}
                onChange={handleSelectionChange}
              >
                {teams.map((team) => (
                  <SelectItem
                    key={team}
                    value={team}
                    textValue={team}
                    aria-label={team}
                    className='aria-[label]: capitalize'
                  >
                    {team}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <div className='hidden md:flex uppercase pb-2 font-medium gap-6'>
                <div className='w-1/3'>Team</div>
                <div className='w-1/3'>Role</div>
                <div className='w-1/3'>Location</div>
              </div>
              <Divider className='hidden md:block bg-black' />
              {jobs.data.map((opening, index) => {
                const { team, jobInfo } = opening.attributes;
                if (value === 'All Teams' || value === '') {
                  return (
                    <div key={index}>
                      <div className='flex flex-col md:flex-row py-4 gap-4 items-baseline'>
                        <div className='w-full md:w-1/3 font-bold text-responsive-xl capitalize'>
                          {team}
                        </div>
                        <div className='w-full md:w-2/3 justify-center flex flex-col gap-4'>
                          {jobInfo?.map((role, index) => (
                            <div key={role.id}>
                              <div className='flex flex-col gap-0 md:flex-row md:gap-4 w-full text-responsive-md'>
                                <div className='w-full md:w-1/2 font-semibold capitalize'>
                                  {role.role}
                                </div>
                                <div className='w-full md:w-1/2 capitalize flex flex-col md:flex-row items-start md:items-center gap-2 justify-between'>
                                  <div>{role.location}</div>
                                  <div>
                                    <Button
                                      href={role.link || '/careers'}
                                      label='Apply'
                                      size='md'
                                      customClass='!py-2 !px-4 border border-azolla_blue'
                                      variant='tertiary'
                                    />
                                  </div>
                                </div>
                              </div>
                              <Divider
                                className={`${
                                  index === jobInfo.length - 1
                                    ? 'invisible'
                                    : 'visible mt-4'
                                }`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <Divider className='bg-black' />
                    </div>
                  );
                }
                if (team === value) {
                  return (
                    <div key={index}>
                      <div className='flex flex-col md:flex-row py-4 gap-4 items-baseline'>
                        <div className='w-full md:w-1/3 font-bold text-responsive-xl capitalize'>
                          {team}
                        </div>
                        <div className='w-full md:w-2/3 justify-center flex flex-col gap-4'>
                          {jobInfo?.map((role, index) => (
                            <div key={role.id}>
                              <div className='flex flex-col gap-0 md:flex-row md:gap-4 w-full text-responsive-md'>
                                <div className='w-full md:w-1/2 font-semibold capitalize'>
                                  {role.role}
                                </div>
                                <div className='w-full md:w-1/2 capitalize flex flex-col md:flex-row items-start md:items-center gap-2 justify-between'>
                                  <div>{role.location}</div>
                                  <div>
                                    <Button
                                      href={role.link || '/careers'}
                                      label='Apply'
                                      size='md'
                                      customClass='!py-2 !px-4 border border-azolla_blue'
                                      variant='tertiary'
                                    />
                                  </div>
                                </div>
                              </div>
                              <Divider
                                className={`${
                                  index === jobInfo.length - 1
                                    ? 'invisible'
                                    : 'visible mt-4'
                                }`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <Divider className='bg-black' />
                    </div>
                  );
                }
              })}
            </div>
          </>
        ) : (
          <div className='text-start md:text-center pt-10 text-[4vw] md:text-[2.5vw] 2xl:text-[2vw]'>
            Currently, all positions are filled. We appreciate your interest in
            joining our team and encourage you to check back for updates in the
            future. Thank you!
          </div>
        )}
      </div>
    </div>
  );
};

export default Openings;
