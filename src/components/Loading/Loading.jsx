import React from 'react';
import loadingImg from '../../assets/logo.png'

const Loading = () => {
    return (
        <div className='flex justify-center items-center '>
            <div className='flex items-center text-gray-500 gap-3 font-bold text-[50px]'>
                <h2>L</h2>
                <img src={loadingImg} alt="Loading"  className=' animate-spin w-10 ' />
                <h2>OADING</h2>
            </div>
        </div>
    );
};

export default Loading;