import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";
import ArtistDetailPage from "./pages/ArtistDetailPage"; // ← baru

function App() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar />

      <Routes>
        {/* Home utama */}
        <Route path="/" element={<HomePage />} />

        {/* Halaman list artist (yang ada Our Artist Visual Art + cards biography) */}
        <Route path="/artist" element={<ArtistPage />} />

        {/* Halaman detail personal artist */}
        <Route path="/artist/:id" element={<ArtistDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
