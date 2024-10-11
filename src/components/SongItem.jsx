import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"

export default function SongItem({image, name, desc, id}) {

    const { playWithId } = useContext(PlayerContext);

    return (
      <div onClick={() => playWithId(id)} className=" min-w-[180px] p-3 rounded-lg cursor-pointer border border-gray-800 transition-all duration-300 hover:bg-gray-950 hover:bg-opacity-35">
          <img src={image} alt={image} className="rounded-lg" />
          <p className="text-md font-semibold text-white mt-3">{name}</p>
          <p className="text-sm font-light text-gray-500">{desc.slice(0, 30) + "..."}</p>
      </div>
    )
  }
  