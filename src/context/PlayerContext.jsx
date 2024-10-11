import { createContext, useRef, useState } from 'react';
import { songsData } from '../assets/assets';

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
    
    const audioRef = useRef();
    const audioBar = useRef();
    const audioBg = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        current: {seconds: 0, minutes: 0},
        total: {seconds: 0, minutes: 0}
    });

    const contextValue = { audioRef, audioBar, audioBg, track, setTrack, playStatus, setPlayStatus, time, setTime };

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    );
}

export default PlayerContextProvider;