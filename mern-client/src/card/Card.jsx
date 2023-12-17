import React from 'react'
import './card.css'
import BannerCard from '../Home/BannerCard'
import { Link } from 'react-router-dom'
const Card = () => {
    return (
        <div className='main flex gap-12'>
            <div className="first flex">

                {/* <div className="first-img"><img src="/image/thumb_2030.png" alt="" style={{ width: 170, height: 250 }} /></div> */}
                <BannerCard />
                <div className="name block mt-10">
                    <span className='btn-small mt-2'>book of the day</span>
                    <h1 className='book-heading mt-2'>KEY PERSON <br />OF INFLUENCE-THE</h1>
                    <p className="disc mt-2">by tanny hotthey and deny persthey</p>
                    <Link to="/shop" className='block'>
                        <button className='btn mt-2'>Start Learning</button>
                    </Link>
                </div>
            </div>

            <div className="second flex">
                {/* <div className="first-img"><img src="/image/thumb_1957.png" alt="" style={{ width: 170, height: 250 }} /></div> */}
                <BannerCard />
                <div className="name block mt-10 ml-10">
                    <span className='btn-small mt-2'>book of the day</span>
                    <h1 className='book-heading mt-2'>OWN YOUR OWN <br />CORPORATION -WHY</h1>
                    <p className="disc mt-2">by gratt suttan</p>
                    <Link to="/shop" className='block'>
                        <button className='btn mt-2'>Start Learning</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
