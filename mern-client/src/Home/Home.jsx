import React from 'react'
// import Banner from '../components/Banner'
import BestSellerBook from './BestSellerBook'
import FavBook from './FavBook'
// import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
// import Review from './Review'
import Hero from '../hero/Hero'
import Trending from '../trending/Trending'
import Card from '../card/Card'
const Home = () => {
    return (
        <div className=''>
            {/* <Banner /> */}
            <Hero />
            <Card />
            <BestSellerBook />
            {/* <PromoBanner /> */}
            <Trending />
            <OtherBooks />
            {/* <Review /> */}
            {/* <FavBook /> //attach with footer */}
        </div>
    )
}

export default Home
