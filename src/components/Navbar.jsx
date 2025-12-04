import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-[#111111]">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6 text-sm text-gray-200">
        {/* Logo / Brand */}
        <NavLink
          to="/"
          className="tracking-[0.25em] text-xs font-semibold"
        >
          ARTCONNECT
        </NavLink>

        {/* Menu */}
        <ul className="flex items-center gap-10">
          {/* HOME -> balik ke route "/" */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b border-white pb-1 text-white"
                  : "hover:text-white"
              }
            >
              Home
            </NavLink>
          </li>

          {/* Gallery Art & Community masih boleh pakai anchor / nanti bisa di-improve */}
          <li>
            <a href="#gallery" className="hover:text-white">
              Gallery Art
            </a>
          </li>

          {/* ARTIST -> route "/artist" */}
          <li>
            <NavLink
              to="/artist"
              className={({ isActive }) =>
                isActive
                  ? "border-b border-white pb-1 text-white"
                  : "hover:text-white"
              }
            >
              Artist
            </NavLink>
          </li>

          <li>
            <a href="#community" className="hover:text-white">
              Community
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
