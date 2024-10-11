import { useContext } from "react";
import { albumsData, songsData } from "../assets/assets";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

export default function DisplayItem() {

    const { id } = useParams();
    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext);

  return (
    <div>
      <NavBar />
      <div className="overflow-auto">
        <div className="flex w-full md:flex-row flex-col gap-5 items-start justify-start mt-5">
            <img src={albumData.image} alt={albumData.image} className="rounded-lg w-64" />
            <div>
                <h1 className="text-4xl font-semibold bg-gradient-to-r from-green-700 via-green-500 to-green-600 bg-clip-text text-transparent">{albumData.name}</h1>
                <p className="font-light text-gray-500">{albumData.desc}</p>

                <div className="text-gray-400 mt-5 font-light">
                    {/* Add bullet points */}
                    <ul className="list-inside list-disc">
                        <li><b>1,345,34</b> Likes</li>
                        <li><b>2,123,45</b> Listeners</li>
                        <li><b>12</b> Tracks</li>
                        <li>English</li>
                        <li>About <b>14</b> Artists</li>
                    </ul>
                </div>
            </div>
        </div>

        <hr className="border-gray-800 w-full mt-3 mb-1" />

        <div>
            <div className="text-sm flex items-center justify-between text-gray-400">
                <p># Title</p>
                <p>Album</p>
                <p>Release Date</p>
                <p>Duration</p>
            </div>
            <hr className="border-gray-800 w-full my-1" />

            <div>
                {
                    songsData.map((song, index) => (
                        <div onClick={() => playWithId(song.id)} key={index} className="flex items-center justify-between transition-all duration-300 hover:bg-gray-950 p-3 rounded-lg cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <p>{index + 1}</p>
                                <img src={song.image} alt={song.image} className="w-10 rounded-lg" />
                                <p className="text-sm font-light text-gray-300">{song.name}</p>
                            </div>
                            <p className="text-sm font-light text-gray-300">{albumData.name}</p>
                            <p className="text-sm font-light text-gray-300">5 Days ago</p>
                            <p className="text-sm font-light text-gray-300">3:00</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}
