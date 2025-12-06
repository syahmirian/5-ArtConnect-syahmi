// src/components/Navbar.jsx
import { NavLink, Link } from "react-router-dom";
import { FiUser } from "react-icons/fi"; // ikon user

const navItems = [
  { label: "Home", to: "/" },
  // sementara Gallery & Community tetap ke "/" (nanti bisa dihubungkan ke section)
  { label: "Gallery Art", to: "/" },
  { label: "Artist", to: "/artist" },
  { label: "Community", to: "/" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-[#f5eee7] border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
        {/* LEFT – NAV LINKS */}
        <nav className="flex-1">
          <ul className="flex items-center gap-6 text-xs md:text-sm text-[#333]">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "hover:text-black transition-colors",
                      item.to === "/artist" || item.to === "/"
                        ? isActive && "font-semibold text-black"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                  end={item.to === "/"} // supaya Home aktif hanya di "/"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CENTER – BRAND */}
        <div className="flex-1 flex justify-center">
          <Link
            to="/"
            className="font-serif italic text-lg md:text-xl tracking-wide text-[#222]"
          >
            ArtConnect
          </Link>
        </div>

        {/* RIGHT – USER ICON */}
        <div className="flex-1 flex justify-end">
          <button
            type="button"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#222] flex items-center justify-center hover:bg-black/5 transition"
          >
            <FiUser className="text-lg md:text-xl text-[#222]" />
          </button>
        </div>
      </div>
    </header>
  );
}
