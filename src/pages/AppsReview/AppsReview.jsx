import React, { useState } from 'react';
import { useParams } from 'react-router';
import useCards from '../../hooks/useCards';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewImg from '../../assets/icon-review.png'
import Rating from '../../components/Rating/Rating';
import { setLocalData } from '../../LocalStorage/LocalStorage';



const AppsReview = () => {
    const [install, setInstall] = useState(false);

    const { id } = useParams();
    const paramsId = parseInt(id);
    const { cards, loading, error } = useCards();
    const cardReview = cards.find(card => card.id === paramsId);

    if (loading) return <p>Loading ....</p>
    const { downloads, ratingAvg, reviews, mb, ratings, title } = cardReview;



    const handleInstall = id => {

        setLocalData(id)
        setInstall(true)

    }
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='max-w-11/12 mx-auto'>
                <div className='flex items-center pt-[80px] '>
                    <div className=' h-[350px] w-[350px] bg-[#D9D9D9] mr-[40px] '>

                    </div>
                    <div>
                        <div className=''>
                            <h2 className='font-bold text-[32px] text-[##001931] '>{title}</h2>
                            <p className=' text-[20px] text-[#627382] mt-2 '>Developed by <span className='font-semibold text-[20px] bg-[linear-gradient(160deg,#632EE3,#9F62F2)] bg-clip-text text-transparent'>productive.io</span></p>
                        </div>
                        <hr className='border-[1px] border-[#D2D2D2] my-[25px] w-full' />
                        <div>
                            <div className=' flex gap-6 '>
                                <div className='pr-[50px]'>
                                    <img src={downloadImg} alt="Download Image" />
                                    <p className='text-[#001931] mt-3'>Downloads</p>
                                    <h2 className=' font-extrabold mt-0 text-[40px] text-[#001931] '>{downloads}</h2>
                                </div>
                                <div className='pr-[50px]'>
                                    <img src={ratingImg} alt="Download Image" />
                                    <p className='text-[#001931] mt-3'>Average Ratings</p>
                                    <h2 className=' font-extrabold mt-0 text-[40px] text-[#001931] '>{ratingAvg}</h2>
                                </div>
                                <div className='pr-[50px]'>
                                    <img src={reviewImg} alt="Download Image" />
                                    <p className='text-[#001931] mt-3'>Total Reviews</p>
                                    <h2 className=' font-extrabold mt-0 text-[40px] text-[#001931] '>{reviews}</h2>
                                </div>
                            </div>
                            <div className='mt-[25px]'>
                                <button onClick={() => handleInstall(id)} className='cursor-pointer bg-[#00D390] px-[20px] py-[14px] rounded-[4px] font-semibold text-white text-[20px] '>{
                                    install ?
                                        "Installed" : `Install Now (${mb})`
                                }</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-[1px] border-[#D2D2D2] my-[40px] w-full' />
                <div>
                    {
                        ratings.map((rating, index) => <Rating key={index} rating={rating} ></Rating>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppsReview;