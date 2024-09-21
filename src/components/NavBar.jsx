import { assets } from "../assets/assets";

export default function NavBar() {
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
            <img src={assets.arrow_left} alt="Icon" className="w-8 p-2 bg-gray-950 rounded-xl  cursor-pointer" />
            <img src={assets.arrow_right} alt="Icon" className="w-8 p-2 bg-gray-950 rounded-xl cursor-pointer" />
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-gray-950 text-white px-3 py-1 rounded-lg border border-green-600 font-light hover:bg-gray-900 transition-all duration-300 hidden md:block">Get the App</button>
          <button className="bg-gradient-to-r from-green-700 via-green-500 to-green-600 text-white px-3 py-1 rounded-lg font-light hover:bg-opacity-85 transition-all duration-300 hidden md:block">Discover Platinium</button>
          <div className="flex items-center justify-center w-9 h-9 border border-green-600 cursor-pointer bg-gray-950 text-green-600 rounded-full font-semibold">AM</div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 pb-3">
        <button className="font-light px-3 py-1 rounded-full cursor-pointer transition-all duration-200 bg-green-600 hover:bg-opacity-70">Latest</button>
        <button className="font-light px-3 py-1 rounded-full cursor-pointer transition-all duration-200 bg-gray-950 hover:bg-opacity-70">Popular</button>
        <button className="font-light px-3 py-1 rounded-full cursor-pointer transition-all duration-200 bg-gray-950 hover:bg-opacity-70">Favorites</button>
        <button className="font-light px-3 py-1 rounded-full cursor-pointer transition-all duration-200 bg-gray-950 hover:bg-opacity-70">Soon</button>
      </div>
    </div>
  )
}
