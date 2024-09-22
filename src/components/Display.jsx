import { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayItem from "./DisplayItem";
import { albumsData } from "../assets/assets";

export default function Display() {

  const ref = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("/album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if(isAlbum) {
      ref.current.style.background = bgColor;
    }
    else {
      ref.current.style.background = "#111827";
    }
  });

  return (
    <div className="w-[100%] p-3 text-gray-300 lg:w-[75%]">
      <div ref={ref} className="rounded-lg bg-gray-900 p-5 h-[83vh] overflow-auto">
        <Routes>
          <Route path="/" element={<DisplayHome />} />
          <Route path="/album/:id" element={<DisplayItem />} />
        </Routes>
      </div>
    </div>
  )
}
