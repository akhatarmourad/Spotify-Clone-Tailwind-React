import Display from "../components/Display";
import Player from "../components/Player";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className="w-full h-full">
        <div className="flex h-[90vh]">
          <SideBar />
          <Display />
        </div>
        <div className="h-[10%] w-full">
          <Player />
        </div>
    </div>
  )
}
