import React from 'react';
import heroImg from '../../assets/hero.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='pt-[50px] lg:pt-[60px] max-w-11/12 mx-auto'>
            <div>
                <h2 className=' text-center font-bold text-[40px] md:text-[72px] text-[#001931]  '>We Build <br /> <span className='bg-[linear-gradient(160deg,#632EE3,#9F62F2)] bg-clip-text text-transparent '>Productive</span> Apps</h2>


                <p className='text-[16px] md:text-xl text-[#627382] text-center mt-3'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex justify-center items-center my-10 '>
                <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                    <div className=''>
                        <Link to='https://play.google.com/store/games?hl=en' target='-blank'><button className='btn  border-2 mr-4 '><i className="fa-brands text-primary fa-google-play "></i> Google Play</button></Link>
                    </div>
                    <div className=''>
                        <Link to='https://www.apple.com/app-store/' target='-blank'><button className='btn border-2 '><i className="fa-brands text-primary fa-app-store-ios"></i>App Store</button></Link>
                    </div>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="Hero Image" className='mx-auto w-[90%] md:w-170 ' />
            </div>
        </div>
    );
};

export default Banner;