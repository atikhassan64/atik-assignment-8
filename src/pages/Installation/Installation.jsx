import { getLocalData, setLocalData, setUnInstallData } from '../../LocalStorage/LocalStorage';
import useCards from '../../hooks/useCards';
import InstallCard from '../../components/InstallCard/InstallCard';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Installation = () => {

    const [installationData, setInstallationData] = useState([])
    const { cards, loading, error } = useCards();
    const [sort, setSort] = useState('none')

    useEffect(() => {
        const storedAppsData = getLocalData();
        const convertedStoredData = storedAppsData.map(d => parseInt(d));
        const installData = cards.filter(card => convertedStoredData.includes(card.id));
        setInstallationData(installData)
    }, [cards]);

    const sortItem = () => {
        if (sort === 'download-asc') {
            const downloadASC = [...installationData].sort((a, b) => parseInt(a.downloads.trim("M"," ")) - parseInt(b.downloads.trim("M"," ")))
            return downloadASC;
        }
        else if (sort === 'download-desc') {
            const downloadASC = [...installationData].sort((a, b) => parseInt(b.downloads.trim("M"," ")) - parseInt(a.downloads.trim("M"," ")))
            return downloadASC
        }
        else {
            return installationData;
        }
    }

    const handleUninstall = (id) => {
        const storedAppsData = getLocalData()
        const convertedStoredData = storedAppsData.map(d => parseInt(d));
        const uninstallData = convertedStoredData.filter(un => un !== id)
        setUnInstallData(uninstallData)
        const updateUiData = installationData.filter(ui => ui.id !== id)
        setInstallationData(updateUiData);
        toast("! Uninstall is success")
    }

    return (
        <div className='bg-[#F5F5F5]'>
            <div className='max-w-11/12 mx-auto'>
                <div className='text-center pt-[50px] md:pt-[70px] mb-[50px]'>
                    <h2 className='font-bold text-[30px] lg:text-[48px] text-[#001931] '>Your Installed Apps</h2>
                    <p className=' text-[16px] lg:text-xl text-[#627382] mt-3 '>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='font-semibold text-[18px] lg:text-[24px] text-[#001931] '>{installationData.length} Apps Found</h2>
                    </div>
                    <div>
                        <label className='from-control w-full max-w-xs cursor-pointer'>
                            <select className='select select-bordered outline-none focus:outline-none focus:ring-0 active:border-transparent' value={sort} onChange={e => setSort(e.target.value)}>
                                <option className='text-[##627382]' value="none">Sort By Size</option>
                                <option className='text-[##627382]' value="download-asc">Low-High</option>
                                <option className='text-[##627382]' value="download-desc">high-Low</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className='pb-[80px]'>
                    {
                        sortItem().map(installData => <InstallCard
                            key={installData.id}
                            installData={installData}
                            handleUninstall={handleUninstall}
                        ></InstallCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;