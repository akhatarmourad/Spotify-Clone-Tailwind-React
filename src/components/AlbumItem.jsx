import { useNavigate } from "react-router-dom"

export default function AlbumItem({image, name, desc, id}) {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/album/${id}`)} className=" min-w-[180px] p-3 rounded-lg cursor-pointer border border-gray-800 transition-all duration-300 hover:bg-gray-950 hover:bg-opacity-35">
        <img src={image} alt={image} className="rounded-lg" />
        <p className="text-md font-semibold text-white mt-3">{name}</p>
        <p className="text-sm font-light text-gray-500">{desc.slice(0, 30) + "..."}</p>
    </div>
  )
}
