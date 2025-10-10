import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
import { Menu } from 'lucide-react';

const Header = () => {

    const [active, setActive] = useState("home");

    const handleMenu = (m) => {
        setActive(m)
    }

    const links = <div className=' flex md:flex-row flex-col md:items-center gap-2 md:gap-8 '>
        <Link
            onClick={() => handleMenu("home")}
            to='/'
            className={active === "home" ? `font-semibold bg-white  md:bg-[linear-gradient(160deg,#632EE3,#9F62F2)] bg-clip-text text-transparent border-transparent ` : `font-medium text-white md:text-black`}>
            Home</Link>
        <Link
            onClick={() => handleMenu("apps")}
            to='/apps'
            className={active === "apps" ? `font-semibold bg-white  md:bg-[linear-gradient(160deg,#632EE3,#9F62F2)] bg-clip-text text-transparent border-transparent ` : `font-medium text-white md:text-black`}>
            Apps</Link>
        <Link
            onClick={() => handleMenu("installation")}
            to='/installation'
            className={active === "installation" ? `font-semibold bg-white  md:bg-[linear-gradient(160deg,#632EE3,#9F62F2)] bg-clip-text text-transparent border-transparent ` : `font-medium text-white md:text-black`}>
            Installation</Link>
    </div>

    const [open, setOpen] = useState(false);

    return (
        <div className='flex justify-between items-center py-3 max-w-11/12 mx-auto'>

            <div className='flex items-center '>
                <div>
                    <div className=' md:hidden lg:hidden ' onClick={() => setOpen(!open)}>
                        {
                            open ? <Menu className='text-[#9F62F2]'></Menu> : <Menu className='text-[#632EE3]'></Menu>
                        }
                    </div>

                    <div className={`absolute md:hidden lg:hidden mt-4 bg-[#9F62F2] p-2 rounded-[4px] ${open ? "" : "hidden"}  `}>
                        {links}
                    </div>
                </div>

                <Link onClick={() => handleMenu("home")} to='/'>
                    <div className='flex items-center gap-1 ml-3'>
                        <img src={logo} alt="" className='w-10 h-10' />
                        <h2 className='font-bold bg-[linear-gradient(160deg,#632EE3,#9F62F2)] bg-clip-text text-transparent  '>HERO.IO</h2>
                    </div>
                </Link>

            </div>
            <div className='hidden md:flex '>
                {links}
            </div>
            <div className=' bg-[linear-gradient(160deg,#632EE3,#9F62F2)] px-4 py-3 rounded-[4px]  '>
                <Link to="https://github.com/atikhassan64" target='-blank'><button className='font-semibold text-white cursor-pointer '><i className="fa-brands fa-github"></i> Contribute</button></Link>
            </div>
        </div>
    );
};
export default Header;