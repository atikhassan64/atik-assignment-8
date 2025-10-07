import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='bg-[#001931] '>
            <div className='py-[35px] max-w-11/12 mx-auto '>
                <div className='flex justify-between items-start border-b-[0.25px] border-white'>
                    <div className='flex items-center gap-1'>
                        <img src={logo} alt="" className='w-10 h-10' />
                        <h2 className='font-bold text-white  '>HERO.IO</h2>
                    </div>
                    <div className=''>
                        <h2 className='text-[20px] font-medium text-white mb-4'>Social Links</h2>
                        <i className="fa-brands text-white mr-2 fa-square-x-twitter"></i>
                        <i className="fa-brands text-white mr-2 fa-linkedin"></i>
                        <i className="fa-brands text-white mr-2 fa-square-facebook"></i>
                    </div>
                </div>
            </div>
            <span><small><p className='text-white text-center pb-8' >Copyright © 2025 - All right reserved</p></small></span>
        </div>
    );
};

export default Footer;