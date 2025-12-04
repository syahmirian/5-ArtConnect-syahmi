import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#463b33] text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Gallery Art</a>
          <a href="#" className="hover:underline">Artist</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">About</a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 text-xl mb-6">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-300">
          ArtConnect © 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
