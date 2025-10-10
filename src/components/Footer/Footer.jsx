import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='bg-[#001931] '>
            <div className='py-[35px] max-w-11/12 mx-auto '>
                <div className='flex lg:flex-row flex-col justify-between items-start border-b-[0.25px] pb-3 border-white gap-4'>
                    <div>
                        <div className='flex items-center gap-1'>
                            <img src={logo} alt="" className='w-10 h-10' />
                            <h2 className='font-bold text-white  '>HERO.IO</h2>
                        </div>
                        <div className='text-white text-[10px] mt-3 '>
                            <p className='md:w-[300px]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-[20px] font-medium text-white mb-1'>Most Company</h2>
                        </div>
                        <div className='text-[10px] text-white'>
                            <ul>
                                <li>ClarityWorks</li>
                                <li>MindFlow</li>
                                <li>ZenMind</li>
                                <li>MindWorks</li>
                                <li>ZenLabs</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-[20px] font-medium text-white mb-1'>Most Popular Apps</h2>
                        </div>
                        <div className='text-[10px] text-white'>
                            <ul>
                                <li>Focus for Productivity</li>
                                <li>Pomodoro Timer</li>
                                <li>Meditation & Focus</li>
                                <li>Productivity Planner</li>
                                <li>Deep Work Timer</li>
                            </ul>
                        </div>
                    </div>
                    <div className=''>
                        <h2 className='text-[20px] font-medium text-white mb-1'>Social Links</h2>
                        <div className='font-normal text-[10px] text-white '>
                            <h3><i className="fa-brands text-white mr-1 fa-square-x-twitter"></i> Twitter</h3>
                            <h3><i className="fa-brands text-white mr-1 fa-linkedin"></i> Linkedin</h3>
                            <h3><i className="fa-brands text-white mr-1 fa-square-facebook"></i> Facebook</h3>
                        </div>
                    </div>
                </div>
            </div>
            <span><small><p className='text-white text-center pb-8' >Copyright © 2025 - All right reserved</p></small></span>
        </div>
    );
};

export default Footer;