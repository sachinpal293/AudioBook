import React from 'react'
import './hero.css'
import banner from '../assets/bookImg/banner.png'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link"
const Hero = () => {
    return (
        <>
            <div className="hero-section flex p-10 border-t-2">

                <div className="hero ml-10">
                    <img src={banner} alt="" />
                </div>
                <div className='content-hero'>
                    <h1 className="heading">Listen & Learn</h1>
                    <p className="para">Choose from  online audio books with<br />
                        new published every month</p>
                    <Link to="#otherbooks" className='block' smooth>
                        <button className='btn mt-2'>Start Learning</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Hero
