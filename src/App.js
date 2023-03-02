import CelToFah from "./pages/CelToFah";
import FahToCel from "./pages/FahToCel";
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MToKm from "./pages/MToKm";
import KmToM from "./pages/KmToM";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="CelToFah" element={<CelToFah />} />
            <Route path="FahToCel" element={<FahToCel />} />
            <Route path="MToKm" element={<MToKm />} />
            <Route path="KmToM" element={<KmToM />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
