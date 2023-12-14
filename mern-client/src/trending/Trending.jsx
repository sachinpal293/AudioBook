import React from 'react'
import './trending.css'
import asset12 from '../assets/bookImg/asset 12.png'
import { TopicsList } from '../utils/TopicsList';
const Trending = () => {
    return (
        <div className='trend row'>
            <div className="dayChallenge col-4">
                <span className='language mt-2'>book of the day</span>
                <h1 className='mt-3'>21</h1>
                <h1>DAYS</h1>
                <p>CHALLANGES</p>
                <button className='btn btn-warning' type='button'>Start Now</button>
            </div>

            <div className="trendingTopics col-8">{
                TopicsList.map(topics => (
                    <div className="topic flex ">
                        <img src={asset12} alt="" className='pic-img' />
                        <span className='top'>{topics.topicName}</span>
                    </div>
                ))
            }
            </div>

        </div>
    )
}

export default Trending
