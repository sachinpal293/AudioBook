import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaHeart, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
import { useSpeechSynthesis } from "react-speech-kit";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';
import './single.css'
import Player from './Player'
const SingleBook = () => {
    const { _id, bookTitle, imageUrl, authorName, bookDescription } = useLoaderData()
    const path = window.location.href;



    const [value, setValue] = useState(bookDescription);



    const { speak, voices, cancel, speaking } = useSpeechSynthesis();

    const [voiceIndex, setVoiceIndex] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);



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
                        {/* <textarea>{bookDescription}</textarea> */}
                        <textarea
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                        />
                    </div>
                    <select style={{ width: '100px' }}
                        value={voiceIndex}
                        onChange={(e) => setVoiceIndex(e.target.value)}
                    >
                        <option value="">Default</option>
                        {voices.map((item, index) => (
                            <option key={item.name} value={index}> {item.name}</option>
                        ))}
                    </select>
                    {/* <button onClick={() => speak({ text: value, rate: 0.95, voice: voices[voiceIndex] })}>Speak</button><br/>
                    <button onClick={() => cancle({text:value})}>getvoice</button> */}
                    {speaking ? (

                        // <PauseIcon className="sound-btn" onClick={cancel} />
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={cancel}>
                            Pause
                        </button>
                    ) : (
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => speak({ text: value, voice: voices[voiceIndex] })}>
                            Play
                        </button>
                        
                    )}
                    {/* <Player/> */}
                </div>
            </div>
        </div>

    )
}

export default SingleBook
