import React from 'react';
import { IoReloadCircle } from 'react-icons/io5';
import { MdOutlineVerified } from 'react-icons/md';

const Education = () => {
    return (
        <div>
            <div>
                <h1 className='text-6xl text-center mt-20'>Education</h1>
            </div>
            <ul className="timeline timeline-vertical mt-12">
                <li>
                    <div className="timeline-start">2024</div>
                    <div className="timeline-middle">
                        <IoReloadCircle className='text-2xl text-primary'/>
                    </div>
                    <div className=" bg-[#1D1E1F] border-primary timeline-end timeline-box">Studying Hons 4th Year</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start">2019</div>
                    <div className="timeline-middle">
                        <MdOutlineVerified className='text-2xl text-primary' />
                    </div>
                    <div className="bg-[#1D1E1F] mt-6 border-primary timeline-end timeline-box">Graduate HSC (Higher School Certificate)</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start">2017</div>
                    <div className="timeline-middle">
                        <MdOutlineVerified className='text-2xl text-primary' />
                    </div>
                    <div className="bg-[#1D1E1F] mt-6 border-primary timeline-end timeline-box">Graduate SSC (Secondary School Certificate)</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start">2015</div>
                    <div className="timeline-middle">
                        <MdOutlineVerified className='text-2xl text-primary' />
                    </div>
                    <div className="bg-[#1D1E1F] mt-6 border-primary timeline-end timeline-box">Graduate JSC (Junior School Certificate)</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start">2011</div>
                    <div className="timeline-middle">
                        <MdOutlineVerified className='text-2xl text-primary' />
                    </div>
                    <div className="bg-[#1D1E1F] mt-6 border-primary timeline-end timeline-box">Graduate PSC (Primary School Certificate)</div>
                </li>
            </ul>
        </div>
    );
};

export default Education;