//AudioPlayer.jsx

import {useState,useRef } from 'react';
import src from '../assets/audio/EnchantedShadows.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const AudioPlayer = () => {
  const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);


  const handleAudio = () => {
    setIsPlaying(!isPlaying);
    const audio = audioRef.current;
    audio.loop = true; 
    audio.volume = 0.2;
    
    if(!isPlaying){
      audio.play();
      
    } else {
        audio.pause();
        }

    }

   return(
    <div>
     <audio ref={audioRef} src={src} />;

    <button onClick={handleAudio}>{!isPlaying ? <FontAwesomeIcon icon={faVolumeXmark} /> : <FontAwesomeIcon icon={faVolumeHigh} /> }</button>
    </div>
    )
  
};

export default AudioPlayer;
