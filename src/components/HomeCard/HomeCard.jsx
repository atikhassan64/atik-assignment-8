import React from 'react';
import { Link } from 'react-router';

const HomeCard = ({ homeCard }) => {
    const { title, downloads, ratingAvg, id } = homeCard

    return (
        <Link to={`/review/${id}`}>
            <div className='bg-white p-[16px] rounded-[4px] shadow-sm '>
                <div className='mb-4 h-[300px] w-full bg-[#D9D9D9] rounded-[8px]'>

                </div>
                <div>
                    <h2 className='font-medium text-[15px] text-[#0A0113] '>{title}</h2>
                    <div className='flex justify-between items-center mt-4 '>
                        <h4 className='font-medium text-[#00D390] px-[10px] py-[6px] bg-[#F1F5E8] rounded-[4px] '><i className="fa-solid mr-2 fa-download"></i>{downloads}</h4>
                        <h4 className='font-medium text-[#FF8811] px-[10px] py-[6px] bg-[#FFF0E1] rounded-[4px] gap-2 '><i className="fa-solid mr-2 fa-star"></i>{ratingAvg}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default HomeCard;