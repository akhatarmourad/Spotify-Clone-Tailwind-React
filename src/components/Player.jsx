
import { assets, songsData } from "../assets/assets";

export default function Player() {
  return (
    <div className="h-[10%] flex justify-between items-center px-3 text-gray-300">
        <div className="hidden lg:flex items-center gap-3">
            <div>
                <img src={songsData[0].image} alt="Song Thumbnail" className="w-12 rounded-lg" />
            </div>
            <div>
                <p>{songsData[0].name}</p>
                <p className="text-sm text-gray-500">{songsData[0].desc.slice(0, 25) + "..."}</p>
            </div>
        </div>

        <div className="flex flex-col items-center gap-1 m-auto">
            <div className="flex gap-5">
                <img src={assets.shuffle_icon} alt="Icon" className="w-4 cursor-pointer" />
                <img src={assets.prev_icon} alt="Icon" className="w-4 cursor-pointer" />
                <img src={assets.play_icon} alt="Icon" className="w-4 cursor-pointer" />
                <img src={assets.next_icon} alt="Icon" className="w-4 cursor-pointer" />
                <img src={assets.shuffle_icon} alt="Icon" className="w-4 cursor-pointer" />
            </div>

            <div className="flex items-center gap-5">
                <p className="text-sm font-light">0:00</p>
                <div className="w-[55vw] max-w-[400px] rounded-full bg-gray-300 cursor-pointer">
                    <hr className="h-1 bg-gradient-to-r from-green-700 to-green-400 w-10 rounded-full border-none" />
                </div>
                <p className="text-sm font-light">3:00</p>
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
