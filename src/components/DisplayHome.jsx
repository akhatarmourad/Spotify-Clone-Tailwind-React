import Albums from "./Albums";
import NavBar from "./NavBar";

export default function DisplayHome() {
  return (
    <div className="w-full h-full overflow-auto">
      <NavBar />
      <Albums />
    </div>
  )
}
