import { Routes, Route } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayItem from "./DisplayItem";

export default function Display() {
  return (
    <div className="w-[100%] p-3 text-gray-300 lg:w-[75%]">
      <div className="rounded-lg bg-gray-900 p-5 h-[83vh] overflow-hidden">
        <Routes>
          <Route path="/" element={<DisplayHome />} />
          <Route path="/album/:id" element={<DisplayItem />} />
        </Routes>
      </div>
    </div>
  )
}
