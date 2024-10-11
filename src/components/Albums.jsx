import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

export default function Albums() {
  return (
    <div className="w-full h-full overflow-auto">
        <div className="mt-5">
            <p className="font-semibold mb-2">Trending Albums</p>
            <div className="relative flex gap-3 overflow-auto">
                {
                    albumsData.map((album) => {
                        return (
                            <AlbumItem key={album.id} image={album.image} name={album.name} desc={album.desc} id={album.id} />
                        );
                    })
                }
            </div>
        </div>

        <div className="mt-5">
            <p className="font-semibold mb-2">Best Songs</p>
            <div className="relative flex gap-3 overflow-auto">
                {
                    songsData.map((song) => {
                        return (
                            <SongItem key={song.id} image={song.image} name={song.name} desc={song.desc} id={song.id} />
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}
