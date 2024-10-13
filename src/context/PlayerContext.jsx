import { createContext, useEffect, useRef, useState } from 'react';
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

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                audioBar.current.style.width = Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100).toString() + "%";
                setTime({
                    current: {
                        minutes: Math.floor(audioRef.current.currentTime / 60),
                        seconds: Math.floor(audioRef.current.currentTime % 60)
                    },
                    total: {
                        minutes: Math.floor(audioRef.current.duration / 60),
                        seconds: Math.floor(audioRef.current.duration % 60)
                    }
                })
            }
        }, 1000);

    }, [audioRef]);

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async () => {
        if(track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            await setPlayStatus(true);
        }
    }

    const next = async () => {
        if(track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            await setPlayStatus(true);
        }
    }

    const playSongAt = async (event) => {
        audioRef.current.currentTime = ((event.nativeEvent.offsetX / audioBg.current.offsetWidth) * audioRef.current.duration);
    }

    const contextValue = { audioRef, audioBar, audioBg, track, setTrack, playStatus, setPlayStatus, time, setTime,
                           play, pause, playWithId, previous, next, playSongAt };

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    );
}

export default PlayerContextProvider;