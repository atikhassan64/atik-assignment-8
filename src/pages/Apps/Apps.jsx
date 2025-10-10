import React, { useState } from 'react';
import useCards from '../../hooks/useCards';
import AppCard from '../../components/AppCard/AppCard';
import ErrorApps from '../../components/ErrorApps/ErrorApps';

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
                <div className='pt-[50px] lg:pt-[70px] pb-[80px]'>
                    <div className='text-center mb-[40px]'>
                        <h2 className='font-bold text-3xl lg:text-[48px] text-[#001931] '>Our All Applications</h2>
                        <p className='text-[16px] lg:text-xl text-[#627382] mt-4 '>Explore All Apps on the Market developed by us. We code for Millions</p>
                    </div>
                    <div className=' flex justify-between items-center mb-4 '>
                        <div>
                            <h3 className='font-semibold text-[16px] md:text-[24px] text-[#001931] '>({searchCards.length}) Apps Found</h3>
                        </div>
                        <div>
                            <label className='border-[1.5px] border-[#D2D2D2] rounded-[4px] px-[8px] md:px-4 py-[4px] md:py-2 pr-0 '>
                                <i className="fa-solid font-light text-[10px] md:text-[16px] fa-magnifying-glass"> </i> <span>
                                    <input
                                        value={search}
                                        onChange={e => setSearch(e.target.value)}
                                        type="search"
                                        placeholder='search Apps'
                                        className=' outline-none text-[11px] md:text-[16px] ' />
                                </span>
                            </label>
                        </div>
                    </div>
                    {
                        searchCards.length === 0 ?
                            <div>
                                <ErrorApps ></ErrorApps>
                            </div>
                            :
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                                {
                                    searchCards.map(appCard => <AppCard
                                        key={appCard.id}
                                        appCard={appCard}
                                    ></AppCard>)
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;