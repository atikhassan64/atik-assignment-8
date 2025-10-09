import React, { useState } from 'react';
import useCards from '../../hooks/useCards';
import AppCard from '../../components/AppCard/AppCard';

const Apps = () => {
    const { cards, loading, error } = useCards();

    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searchCards = term
        ? cards.filter(card =>
            card.title.toLocaleLowerCase().includes(term)
        )
        : cards

    return (
        <div className='bg-[#F5F5F5]'>
            <div className='max-w-11/12 mx-auto'>
                <div className='pt-[50px] pb-[80px]'>
                    <div className='text-center mb-[40px]'>
                        <h2 className='font-bold text-[48px] text-[#001931] '>Our All Applications</h2>
                        <p className=' text-xl text-[#627382] mt-4 '>Explore All Apps on the Market developed by us. We code for Millions</p>
                    </div>
                    <div className=' flex md:flex-row flex-col justify-between items-center mb-4 '>
                        <div>
                            <h3 className='font-semibold text-[24px] text-[#001931] mb-5 md:mb-0 '>({searchCards.length}) Apps Found</h3>
                        </div>
                        <label className='border-[1.5px] border-[#D2D2D2] rounded-[4px] px-4 py-2 '>
                            <i className="fa-solid font-light fa-magnifying-glass"> </i> <span>
                                <input
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    type="search"
                                    placeholder='search Apps' className=' outline-none ' />
                            </span>
                        </label>
                    </div>
                    <div className='grid grid-cols-1 m:grid-cols-2 lg:grid-cols-4 gap-4 '>
                        {
                            searchCards.map(appCard => <AppCard
                                key={appCard.id}
                                appCard={appCard}
                            ></AppCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apps;