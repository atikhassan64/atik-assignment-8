import React, { useEffect } from 'react';
import { getLocalData } from '../../LocalStorage/LocalStorage';
import useCards from '../../hooks/useCards';
import InstallCard from '../../components/InstallCard/InstallCard';

const Installation = () => {

    const { cards, loading, error } = useCards();
    // const data = cards
    // console.log(cards)

    const storedAppsData = getLocalData();
    const convertedStoredData = storedAppsData.map(d => parseInt(d));
    const installationData = cards.filter(card => convertedStoredData.includes(card.id));
    // console.log(installationData)


    return (
        <div className='bg-[#F5F5F5]'>
            <div className='max-w-11/12 mx-auto'>
                <div className='text-center pt-[70px] mb-[50px]'>
                    <h2 className='font-bold text-[48px] text-[#001931] '>Your Installed Apps</h2>
                    <p className=' text-xl text-[#627382] mt-3 '>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div>
                    <div>
                        <h2 className='font-semibold text-[24px] text-[#001931] '>{installationData.length} Apps Found</h2>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='pb-[80px]'>
                    {
                        installationData.map(installData=><InstallCard 
                            key={installData.id}
                            installData={installData}
                            ></InstallCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;