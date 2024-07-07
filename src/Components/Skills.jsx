
import React from 'react';

import { FaPeopleGroup } from 'react-icons/fa6';
import { GiTeamUpgrade } from 'react-icons/gi';
import { GrUserExpert } from 'react-icons/gr';
import { IoMdDoneAll } from 'react-icons/io';
import { LuCalendarClock } from 'react-icons/lu';
import { PiBrain } from 'react-icons/pi';
import { RiUserVoiceLine } from 'react-icons/ri';

const Skills = () => {
    return (
        <div id='skill' className='py-10 mt-12 max-w-6xl mx-auto'>
            <p className='text-xl text-center text-primary font-semibold'>Skills</p>
            <div className='mt-4'>
                <h3 className='text-6xl text-center font-semibold'>Soft Skills</h3>
                <div className="">
                    <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="overflow-hidden bg-[#1D1E1F]  rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <span className='bg-primary p-3 rounded-full'><RiUserVoiceLine className='text-3xl text-white' /></span>
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-primary2">Communication</p>
                                        <p className="mt-px text-sm ">Essential Skill</p>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed  mt-7">Effectively convey and receive messages in various formats, ensuring clarity and understanding.</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-[#1D1E1F]  rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <span className='bg-primary p-3 rounded-full'><FaPeopleGroup className='text-3xl text-white' /></span>
                                    
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-primary2">Teamwork</p>
                                        <p className="mt-px text-sm ">Collaborative Effort</p>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed  mt-7">Work harmoniously with others towards common goals, fostering a supportive and efficient environment.</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-[#1D1E1F]  rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <span className='bg-primary p-3 rounded-full'><IoMdDoneAll className='text-3xl text-white' /></span>
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-primary2">Problem-solving</p>
                                        <p className="mt-px text-sm ">Analytical Skill</p>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed  mt-7">Identify, analyze, and resolve issues efficiently, employing innovative solutions and critical thinking.</p>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-[#1D1E1F]  rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <span className='bg-primary p-3 rounded-full'><PiBrain className='text-3xl text-white' /></span>
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-primary2">Creativity</p>
                                        <p className="mt-px text-sm ">Innovative Thinking</p>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed  mt-7">Generate new and innovative ideas, approaches, and solutions to problems, enhancing overall effectiveness and efficiency.</p>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-[#1D1E1F]  rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <span className='bg-primary p-3 rounded-full'><LuCalendarClock className='text-3xl text-white' /></span>
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-primary2">Time Management</p>
                                        <p className="mt-px text-sm ">Efficiency</p>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed  mt-7">Prioritize tasks and manage time effectively to maximize productivity and meet deadlines.</p>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-[#1D1E1F]  rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <span className='bg-primary p-3 rounded-full'><GrUserExpert className='text-3xl text-white' /></span>
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-primary2">Adaptability</p>
                                        <p className="mt-px text-sm ">Flexibility</p>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed  mt-7">Adjust effectively to new situations, environments, and challenges, maintaining productivity and composure under pressure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;
