import React from 'react';

const Testimonial = () => {
    return (
        <div className=' bg-[linear-gradient(160deg,#632EE3,#9F62F2)] '>
            <div className='max-w-11/12 mx-auto py-[60px]'>
                <div>
                    <h2 className=' font-bold text-[30px] md:text-[48px] text-white text-center '>Trusted by Millions, Built for You</h2>
                </div>
                <div className='flex md:flex-row flex-col justify-center gap-10 md:gap-32 items-center mt-[30px]'>
                    <div>
                        <p className='text-center text-white '><small>Total Downloads</small></p>
                        <h2 className='text-center text-white font-bold text-[64px] '>29.6M</h2>
                        <p className='text-center text-white '>21% more than last month</p>
                    </div>
                    <div>
                        <p className='text-center text-white '><small>Total Reviews</small></p>
                        <h2 className='text-center text-white font-bold text-[64px] '>906K</h2>
                        <p className='text-center text-white '>46% more than last month</p>
                    </div>
                    <div>
                        <p className='text-center text-white '><small>Active Apps</small></p>
                        <h2 className='text-center text-white font-bold text-[64px] '>132+</h2>
                        <p className='text-center text-white '>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;