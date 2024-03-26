import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompSc from "./Pages/CompSc";
import Math from "./Pages/Math";
import GeneralKnowledge from "./Pages/Gk";
import Mythology from "./Pages/Myth";
import Politics from "./Pages/Pts";
import Film from "./Pages/Film";
import Geogra from "./Pages/Geogra";
import History from "./Pages/History";
import Sports from "./Pages/Sports";
import Music from "./Pages/Music";
import MainHome from "./Pages/MainHome";
import MyPage from "./Pages/MyPage";
import NavBar from "./Pages/NavBar";
import EasyCompSc from "./EasyLevels/EasyCompSc";
import TimerComponent from "./Pages/TimerComponent";
import HardCompSc from "./HardLevels/HardCompsc";
import MediumCompSc from "./MediumLevels/MediumCOmpSc";
import Measy from "./EasyLevels/Measy";
import Mhard from "./HardLevels/Mhard";
import Mmedium from "./MediumLevels/Mmedium";
import SportsEasy from "./EasyLevels/SpEasy";
import SportsHard from "./HardLevels/SpHard";
import SportsMedium from "./MediumLevels/SpMd";
import HistoryEasy from "./EasyLevels/Heasy";
import HistoryHard from "./HardLevels/Hhard";
import HistoryMedium from "./MediumLevels/Hmedium";
import FilmEasy from "./EasyLevels/FilmEasy";
import FilmHard from "./HardLevels/FilmHard";
import FilmMedium from "./MediumLevels/FilmMedium";
import Geasy from "./EasyLevels/Geasy";
import Ghard from "./HardLevels/GHard";
import Gmedium from "./MediumLevels/Gmedium";
import GkEasy from "./EasyLevels/GkEasy";
import GkHard from "./HardLevels/GkHard";
import GkMedium from "./MediumLevels/GkMedium";
import TelevisionEasy from "./EasyLevels/Teasy";
import TelevisionHard from "./HardLevels/Thard";
import TelevisionMedium from "./MediumLevels/Tmedium";
import NatureEasy from "./EasyLevels/Neasy";
import NatureHard from "./HardLevels/Nhard";
import NatureMedium from "./MediumLevels/Nmedium";
import PoliEasy from "./EasyLevels/PoliEasy";
import PoliHard from "./HardLevels/PoliHard";
import PoliMedium from "./MediumLevels/PoliMedium";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index="true"  element={<MainHome />}   />
        <Route path="/Home"  element={<Home />} />
        <Route path="/ComputerScience" element={<CompSc />}  />
        <Route path="/Television" element={<Math />}  />
        <Route path="/GeneralKnowledge" element={<GeneralKnowledge />}  />
        <Route path="/Nature" element={<Mythology />}  />
        <Route path="/Politics" element={<Politics />}  />
        <Route path="/Film" element={<Film />}  />
        <Route path="/Geography" element={<Geogra />}  />
        <Route path="/History" element={<History />}  />
        <Route path="/Sports" element={<Sports />}  />
        <Route path="/Music" element={<Music />}  />
        <Route path="/myPage" element={<MyPage />}  />
        <Route path="/nb" element={<NavBar />}  />
        <Route  path="/ecompsc" element={<EasyCompSc />} />
        <Route  path="/hcompsc" element={<HardCompSc />} />
        <Route  path="/mcompsc" element={<MediumCompSc />} />
        <Route  path="/measy" element={<Measy />} />
        <Route  path="/mhard" element={<Mhard />} />
        <Route  path="/mmedium" element={<Mmedium />} />
        <Route  path="/speasy" element={<SportsEasy />} />
        <Route  path="/sphard" element={<SportsHard />} />
        <Route  path="/spmedium" element={<SportsMedium />} />
        <Route  path="/heasy" element={<HistoryEasy />} />
        <Route  path="/hhard" element={<HistoryHard />} />
        <Route  path="/hmedium" element={<HistoryMedium />} />
        <Route  path="/feasy" element={<FilmEasy />} />
        <Route  path="/fhard" element={<FilmHard />} />
        <Route  path="/fmedium" element={<FilmMedium />} />
        <Route  path="/geasy" element={<Geasy />} />
        <Route  path="/ghard" element={<Ghard />} />
        <Route  path="/gmedium" element={<Gmedium />} />
        <Route  path="/gkeasy" element={<GkEasy />} />
        <Route  path="/gkhard" element={<GkHard />} />
        <Route  path="/gkmedium" element={<GkMedium />} />
        <Route  path="/teasy" element={<TelevisionEasy />} />
        <Route  path="/thard" element={<TelevisionHard />} />
        <Route  path="/tmedium" element={<TelevisionMedium />} />
        <Route  path="/neasy" element={<NatureEasy />} />
        <Route  path="/nhard" element={<NatureHard />} />
        <Route  path="/nmedium" element={<NatureMedium />} />
        <Route  path="/polieasy" element={<PoliEasy />} />
        <Route  path="/polihard" element={<PoliHard />} />
        <Route  path="/polimedium" element={<PoliMedium />} />
        <Route path="/timer" element={<TimerComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

