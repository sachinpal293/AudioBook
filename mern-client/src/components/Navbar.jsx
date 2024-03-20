import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contexts/AuthProvider';
const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const { user } = useContext(AuthContext)
    // console.log(user);

    //toggle menu
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.addEventListener("scroll", handleScroll)
        }
    }, [])

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "See All Book", path: "/shop" },
        { link: "Manage your book", path: "/admin/dashboard" },
    ]
    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-10 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-white" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* logo */}
                    <Link to="/" className='text-2xl font-bold text-blue-950 flex items-center gap-2'><FaBlog className='inline-block' />Audio Books</Link>

                    {/* nav item for lard=ge device */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer font-semibold hover:text-blue-800 hover:underline'>{link}</Link>
                            )
                        }
                    </ul>
                    {/* btn for large device */}

                    {/* <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' />{
                            user ? user.email : ""
                        }</button>
                    </div> */}
                    {/* <Link to="/sign-up">
                        <div class="hidden md:block px-2 py-2 text-white-700 rounded font-bold cursor-pointer">
                            Login/SignUp</div>
                    </Link> */}

                    {/* menu btn for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
                            }
                        </button>
                    </div>
                </div>

                {/* naviems for smal devicez */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar
