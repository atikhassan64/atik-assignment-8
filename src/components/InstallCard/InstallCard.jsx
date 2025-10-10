import React from 'react';

const InstallCard = ({ installData, handleUninstall }) => {
    const { ratingAvg, downloads, mb, title, id, image } = installData
    return (
        <div className='flex justify-between items-center bg-white p-2 md:p-4 rounded-[4px] shadow-sm mt-4 '>
            <div className='flex items-center justify-center '>
                <div className=' w-[80px] h-[80px] rounded-[8px] mr-4 '>
                    <img src={image} alt={title} className='rounded-[8px] w-[80px] h-[80px] object-cover '  />
                </div>
                <div>
                    <h1 className=' font-medium text-[16px] md:text-[20px] text-[#001931] '>{title}</h1>
                    <div className='flex items-center gap-1 md:gap-4 mt-4'>
                        <h4 className='font-medium text-[10px] md:text-[16px] text-[#00D390] '><i className="fa-solid mr-1 fa-download"></i>{downloads}</h4>
                        <h4 className='font-medium text-[10px] md:text-[16px] text-[#FF8811]'><i className="fa-solid mr-1 fa-star"></i>{ratingAvg}</h4>
                        <h4 className='font-medium text-[10px] md:text-[16px] text-[#627382] '>{mb}</h4>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={()=>handleUninstall(id)} className='cursor-pointer bg-[#00D390] px-[16px] md:px-[20px] py-[10px] md:py-[14px] rounded-[4px] font-semibold text-white text-[16px] md:text-[20px] '>Uninstall</button>
            </div>
        </div>
    );
};

export default InstallCard;