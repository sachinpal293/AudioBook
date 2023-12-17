import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaHeart, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
import './single.css'
import Player from './Player'
const SingleBook = () => {
    const { _id, bookTitle, imageUrl, authorName, bookDescription } = useLoaderData()
    return (
        <div>
            <div className='flex border-t-2 mt-28 px-7 lg:px-24 '>
                <div className='mt-8 mr-20'>
                    <img src={imageUrl} alt="" className='h-96' />

                </div>
                <div className='mt-8 mr-20'>
                    <h1 className='mt-2 text-3xl'>{bookTitle}</h1>
                    <p className='text-lg'>by {authorName}</p>
                    <div className='flex'>
                        <p className='p-2'><FaHeart /></p> <p>|</p> <p className='p-2'><FaRegCommentAlt /></p><p>|</p><p className='p-2'><FaShareAlt /></p>
                    </div>
                    <div className='mt-8'>
                        <textarea>{bookDescription}</textarea>
                    </div>
                </div>
            </div>
            {/* <div className='mt-10'>
                <img src={asset9} alt="" onClick={() => { handleClick() }} />
            </div> */}
            <Player />
        </div>

    )
}

export default SingleBook
