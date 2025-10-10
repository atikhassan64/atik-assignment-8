import React from 'react';
import { Link } from 'react-router';
import errorImg from '../../assets/App-Error.png'

const ErrorApps = () => {
    return (
        <div>
            <div className='mt-[80px] pb-[80px]'>
                <img src={errorImg} alt="" className='mx-auto px-5 ' />
                <h1 className=' font-semibold text-[#001931] text-[30px] md:text-[48px] text-center mt-4 '>OPPS!! APP NOT FOUND</h1>
                <p className=' text-[14px] md:text-[20px] text-[#627382] text-center mt-1'>The App you are requesting is not found on our system.  please try another apps</p>
                <div className='flex justify-center items-center mt-4 '>
                    <Link to='/apps'><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-10 py-3 rounded-[4px] cursor-pointer text-white '>Show All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorApps;