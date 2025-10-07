import React from 'react';
import Footer from '../../components/Footer/Footer';
import errorImg from '../../assets/error-404.png'
import Header from '../../components/Header/Header';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Header />
            <div className='bg-[#F5F5F5]'>
                <div className='max-w-11/12 mx-auto py-[80px]'>
                    <div>
                        <img src={errorImg} alt="" className='mx-auto px-5 ' />
                        <h1 className=' font-semibold text-[#001931] text-[30px] md:text-[48px] text-center mt-4 '>Oops, page not found!</h1>
                        <p className=' text-[14px] md:text-[20px] text-[#627382] text-center mt-1'>The page you are looking for is not available.</p>
                        <div className='flex justify-center items-center mt-4 '>
                            <Link to='/'><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-10 py-3 rounded-[4px] cursor-pointer text-white '>Go Back!</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;