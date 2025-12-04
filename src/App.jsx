import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";

function App() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artist" element={<ArtistPage />} />
      </Routes>
    </div>
  );
}

export default App;
