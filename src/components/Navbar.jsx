import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-black/80 text-white fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-sm">
        <Link to="/" className="font-semibold tracking-wide">
          ArtConnect
        </Link>

        <div className="flex gap-6">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/artist" className="hover:underline">
            Artist
          </NavLink>
          {/* menu lain boleh menyusul */}
        </div>
      </div>
    </nav>
  );
}
