import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import asset9 from '../assets/bookImg/asset 9.png'
import { useSpeechSynthesis } from 'react-speech-kit'
import './single.css'
const SingleBook = () => {
    const { _id, bookTitle, imageUrl, authorName, bookDescription } = useLoaderData()

    const [text, setText] = useState('');
    const { speak } = useSpeechSynthesis();
    const handleClick = () => {
        speak({ text: text })
    }
    return (
        <div className='flex border-t-2 mt-28 px-7 lg:px-24 '>
            <div className='mt-10 mr-20'>
                <img src={imageUrl} alt="" className='h-96' />

                <div className='mt-10'>
                    <img src={asset9} alt="" onClick={() => { handleClick() }} />
                </div>

            </div>
            <div className='mt-10 mr-20'>
                <h1 className='mt-3 text-3xl'>{bookTitle}</h1>
                <p className='text-lg'>by {authorName}</p>

                <div className='mt-10'>
                    <textarea onChange={(e) => { setText(e.target.value) }}></textarea>
                </div>
            </div>
        </div>

    )
}

export default SingleBook
