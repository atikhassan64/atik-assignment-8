import React from 'react';
import useCards from '../../hooks/useCards';
import HomeCard from '../HomeCard/HomeCard';
import { Link } from 'react-router';

const TrendingApps = () => {

    const { cards, loading, error } = useCards()
    const featuredCards = cards.slice(0, 8)
    // console.log(featuredCards)


    return (
        <div className='max-w-11/12 mx-auto mt-[80px]'>
            <div className='text-center mb-[40px]'>
                <h2 className='font-bold text-[48px] text-[#001931] '>Trending Apps</h2>
                <p className=' text-xl text-[#627382] mt-4 '>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className=' grid grid-cols-1 m:grid-cols-2 lg:grid-cols-4 gap-4 '>
                {
                    featuredCards.map(homeCard => <HomeCard
                        key={homeCard.id}
                        homeCard={homeCard}
                    ></HomeCard>)
                }
            </div>
            <div className='flex justify-center items-center mt-[40px] pb-[80px]  '>
                <Link to='/apps'><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-10 py-3 rounded-[4px] cursor-pointer text-white '>Show All</button></Link>
            </div>
        </div>
    );
};

export default TrendingApps;