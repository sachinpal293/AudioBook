import React from 'react'
import favBookImg from "../assets/bookImg/asset 13.png"
import asset14 from "../assets/bookImg/asset 14.png"
import asset15 from "../assets/bookImg/asset 15.png"
import asset16 from "../assets/bookImg/asset 16.png"
import '../hero/hero.css'
// import { Link } from 'react-router-dom';
const FavBook = () => {
    return (
        <div className='hero-section justify-between space-x-20 pt-5 lg:px-12 my-19 flex md:flex-row'>
            <div className='ml-10 md:w-1/2 '>
                <img src={favBookImg} alt="" className='md:w-10/12' />
            </div>
            <div className='block pl-10'>
                <img src={asset14} alt="" />
                <h2 className='text-5xl font-bold my-3 md:w-3/4 leading-snug text-blue-950'>KEEP YOUR BOOK ON YOUR <span className='text-blue-700'>FINGURE TIPS</span> </h2>
                <div className='flex flex-col sm:flex-row gap-2 md:w-3/4 my-6'>
                    <img src={asset15} alt="" />
                    <img src={asset16} alt="" />
                </div>
                {/* <Link to="/shop" className='mt-12 block'>
                        <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button>
                    </Link> */}
            </div>
        </div>
    )
}

export default FavBook
