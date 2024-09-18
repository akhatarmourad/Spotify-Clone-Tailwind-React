import { assets } from "../assets/assets";
import { RiHome6Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";

export default function SideBar() {
  return (
    <div className="w-[25%] h-[90%] p-3 flex-col hidden lg:flex text-white gap-3">
        <div className="bg-gray-900 flex flex-col justify-around rounded-lg gap-2 p-5">
            <div className="flex items-center gap-3 cursor-pointer mb-3">
                <img src='/Spotify_logo_with_text.png' alt={assets.spotify_logo} className="h-10"/>
            </div>
            <div className="flex items-center gap-3 cursor-pointer text-gray-400 hover:bg-gray-950 p-1 rounded-lg transition-all duration-300">
                <RiHome6Line className="text-4xl" />
                <p>Home</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer text-gray-400 hover:bg-gray-950 p-1 rounded-lg transition-all duration-300">
                <IoMdSearch className="text-4xl" />
                <p>Search</p>
            </div>
        </div>

        <div className="flex flex-col gap-3">
            <div className="p-5 flex items-center justify-between border bg-gradient-to-r from-gray-900 border-gray-900 rounded-lg">
                <div className="flex items-center gap-3">
                    <img src={assets.stack_icon} className="w-8" alt={assets.stack_icon} />
                    <p>My Library</p>
                </div>
                <div className="flex items-center gap-3">
                    <img src={assets.arrow_icon} className="w-5" alt={assets.arrow_icon} />
                    <img src={assets.plus_icon} className="w-5" alt={assets.plus_icon} />
                </div>
            </div>

            <div className="p-5 border bg-gradient-to-r from-gray-900 border-gray-900 rounded-lg flex flex-col items-start justify-start gap-1">
                <h1 className="text-lg">Create a Playlist</h1>
                <p className="text-sm font-light text-gray-400">Create a playlist for your favorite songs</p>
                <button className="font-light bg-gray-300 px-3 text-gray-800 py-1 rounded-full mt-3">Create Playlist</button>
            </div>

            <div className="p-5 cursor-pointer hover:bg-opacity-80 transition-all duration-300 border bg-gradient-to-r from-gray-900 border-gray-900 rounded-lg flex flex-col items-start justify-start gap-1">
                <h1 className="text-lg">Discover Podcasts</h1>
                <p className="text-sm font-light text-gray-400">Discover new podcasts based on your interests</p>
            </div>
        </div>
    </div>
  )
}
