import React from 'react';
import Banner from '../../components/Banner/Banner';
import Testimonial from '../../components/Testimonial/Testimonial';
import TrendingApps from '../../components/TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div>
                <Banner/>
                <Testimonial/>
                <TrendingApps/>
            </div>
        </div>
    );
};

export default Home;