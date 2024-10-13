import { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

export default function Player() {

    const { audioBar, audioBg, play, pause, playStatus, track, time, previous, next, playSongAt } = useContext(PlayerContext);

  return (
    <div className="h-full w-full flex justify-between items-center px-3 text-gray-300">
        <div className="hidden lg:flex items-center gap-3">
            <div>
                <img src={track.image} alt="Song Thumbnail" className="w-12 rounded-lg" />
            </div>
            <div>
                <p>{track.name}</p>
                <p className="text-sm text-gray-500">{track.desc.slice(0, 25) + "..."}</p>
            </div>
        </div>

        <div className="flex flex-col items-center gap-1 m-auto">
            <div className="flex gap-5">
                <img src={assets.shuffle_icon} alt="Icon" className="w-4 cursor-pointer" />
                <img onClick={previous} src={assets.prev_icon} alt="Icon" className="w-4 cursor-pointer" />
                {!playStatus ? (
                    <img onClick={play} src={assets.play_icon} alt="Icon" className={`w-4 cursor-pointer`} />
                ) : (
                    <img onClick={pause} src={assets.pause_icon} alt="Icon" className={`w-4 cursor-pointer`} />
                )}
                <img onClick={next} src={assets.next_icon} alt="Icon" className="w-4 cursor-pointer" />
                <img src={assets.shuffle_icon} alt="Icon" className="w-4 cursor-pointer" />
            </div>

            <div className="flex items-center gap-5">
                <p className="text-sm font-light">{time.current.minutes.toString().padStart(2, '0')}:{time.current.seconds.toString().padStart(2, '0')}</p>
                <div ref={audioBg} onClick={playSongAt} className="w-[55vw] max-w-[400px] rounded-full bg-gray-300 cursor-pointer">
                    <hr ref={audioBar} className="h-1 bg-gradient-to-r from-green-700 to-green-400 w-10 rounded-full border-none" />
                </div>
                <p className="text-sm font-light">{time.total.minutes.toString().padStart(2, '0')}:{time.total.seconds.toString().padStart(2, '0')}</p>
            </div>
        </div>

        <div className="hidden lg:flex items-center gap-3 opacity-65">
            <img src={assets.plays_icon} alt="Icon" className="w-4" />
            <img src={assets.mic_icon} alt="Icon" className="w-4" />
            <img src={assets.queue_icon} alt="Icon" className="w-4" />
            <img src={assets.speaker_icon} alt="Icon" className="w-4" />
            <img src={assets.volume_icon} alt="Icon" className="w-4" />
            <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
            <img src={assets.mini_player_icon} alt="Icon" className="w-4" />
            <img src={assets.zoom_icon} alt="Icon" className="w-4" />
        </div>
    </div>
  )
}
