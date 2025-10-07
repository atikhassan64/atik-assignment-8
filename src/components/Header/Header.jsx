import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

const Header = () => {

    const links = <div className=' flex md:flex-row flex-col md:items-center list-none gap-2 md:gap-8 '>
        <Link><li className='font-medium text-white md:text-black '>Home</li></Link>
        <Link><li className='font-medium text-white md:text-black '>Apps</li></Link>
        <Link><li className='font-medium text-white md:text-black '>Installation</li></Link>
    </div>

    const [open, setOpen] = useState(false);

    return (
        <div className='flex justify-between items-center py-5 max-w-11/12 mx-auto'>

            <div className='flex items-center '>
                <div>
                    <div className=' md:hidden lg:hidden ' onClick={() => setOpen(!open)}>
                        {
                            open ? <Menu className='text-[#9F62F2]'></Menu> : <Menu className='text-[#632EE3]'></Menu>
                        }
                    </div>

                    <div className={`absolute md:hidden lg:hidden mt-4 bg-[#9F62F2] p-2 rounded-[4px] ${open? "":"hidden"}  `}>
                        {links}
                    </div>
                </div>

                <div className='flex items-center gap-1 ml-3'>
                    <img src={logo} alt="" className='w-10 h-10' />
                    <h2 className='font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  '>HERO.IO</h2>
                </div>

            </div>
            <div className='hidden md:flex '>
                {links}
            </div>
            <div className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-3 rounded-[4px]  '>
                <a href=""><button className='font-semibold text-white'><i class="fa-brands fa-github"></i> Contribute</button></a>
            </div>
        </div>
    );
};

export default Header;