import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { useLoaderData } from 'react-router-dom'
function Play()
{
    
  const { speak , voices} = useSpeechSynthesis();
//   const { _id, bookTitle, imageUrl, authorName, bookDescription } = useLoaderData();
  const [value, setValue] = useState("");

  const [voiceIndex, setVoiceIndex] = useState("");


  return (
    <div>
        <h1>Text to speech app</h1>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <br/>
      <select style={{width:'100px'}}
        value={voiceIndex}
        onChange={(e)=>setVoiceIndex(e.target.value)}
       >
        <option value="">Default</option>
         {voices.map((item,index)=>(
            <option key={item.name} value={index}> {item.name}</option>
         ))}
      </select>
      <button onClick={() => speak({text:value, rate:1, voice:voices[voiceIndex]})}>Speak</button>
    </div>
  );
}

export default Play