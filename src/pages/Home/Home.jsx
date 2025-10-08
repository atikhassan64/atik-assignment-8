import React from 'react';
import Banner from '../../components/Banner/Banner';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div>
                <Banner/>
                <Testimonial/>
            </div>
        </div>
    );
};

export default Home;