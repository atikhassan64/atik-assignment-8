import React from 'react';

const InstallCard = ({ installData }) => {
    console.log(installData)
    const { ratingAvg, downloads, mb, title } = installData
    return (
        <div className='flex justify-between items-center bg-white p-4 rounded-[4px] shadow-sm mt-4 '>
            <div className='flex items-center '>
                <div className='w-[80px] h-[80px] bg-amber-300 rounded-[8px] mr-4 '>

                </div>
                <div>
                    <h1 className=' font-medium text-[20px] text-[#001931] '>{title}</h1>
                    <div className='flex items-center gap-4 mt-4'>
                        <h4 className='font-medium text-[#00D390] '><i className="fa-solid mr-1 fa-download"></i>{downloads}</h4>
                        <h4 className='font-medium text-[#FF8811]'><i className="fa-solid mr-1 fa-star"></i>{ratingAvg}</h4>
                        <h4 className='font-medium text-[#627382] '>{mb}</h4>
                    </div>
                </div>
            </div>
            <div>
                <button className='cursor-pointer bg-[#00D390] px-[20px] py-[14px] rounded-[4px] font-semibold text-white text-[20px] '>Uninstall</button>
            </div>
        </div>
    );
};

export default InstallCard;