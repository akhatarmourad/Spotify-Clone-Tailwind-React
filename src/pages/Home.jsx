import { useContext } from "react";
import Display from "../components/Display";
import Player from "../components/Player";
import SideBar from "../components/SideBar";
import { PlayerContext } from "../context/PlayerContext";

export default function Home() {

  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="w-full h-full">
        <div className="flex h-[90vh]">
          <SideBar />
          <Display />
        </div>
        <div className="h-[10%] w-full">
          <Player />
        </div>
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  )
}
