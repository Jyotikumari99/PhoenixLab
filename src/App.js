import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Helpers/Navbar";
import Footer from "./components/Helpers/Footer";
import Home from "./components/pages/Home";
import Vision from "./components/pages/Vision";
import Art from "./components/pages/Art";
import CryptoTechnologyCenter from "./components/pages/CryptoTechnologyCenter";
import Web from "./components/pages/Web";
import Projects from "./components/pages/Projects";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Data_collection from "./components/pages/Data_collection";
// import AiLabs from "./components/pages/AiLabs";
// import Data_preparation from "./components/pages/Data_preparation";
// import ModelEvaluation from "./components/pages/ModelEvaluation";
// import AiLabsList from "./components/pages/AiLabsList";
// import LearningLabs from "./components/pages/LearningLabs";
// import HumanSP from "./components/pages/HumanSP";
// import HistoricalClassification from "./components/pages/HistoricalClassifictaion";
// import UrbanAg from "./components/pages/UrbanAg";
// import FoodProduction from "./components/pages/FoodProduction";
// import HumanOa from "./components/pages/HumanOa";
// import DnaTracing from "./components/pages/DnaTracing";
// import ArtificialRetrieval from "./components/pages/ArtificialRetrieval";
// import SkyLab from "./components/pages/SkyLab";
// import IoLab from "./components/pages/IoLab";
// import GLab from "./components/pages/GLab";
// import XLab from "./components/pages/XLab";
import "./styles/App.css";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/art" element={<Art />} />
                <Route path="/cryptoTechnologyCenter" element={<CryptoTechnologyCenter />} />
                <Route path="/web" element={<Web />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/dataCollection" element={<Data_collection />} />
                {/* <Route path="/ailabs" element={<AiLabs />} /> */}
                {/* <Route path="/Data_preparation" element={<Data_preparation />} /> */}
                {/* <Route path="/ModelEvaluation" element={<ModelEvaluation />} /> */}
                {/* <Route path="/AiLabsList" element={<AiLabsList />} /> */}
                {/* <Route path="/LearningLabs" element={<LearningLabs />} /> */}
                {/* <Route path="/HumanSP" element={<HumanSP />} /> */}
                {/* <Route path="/HistoricalClassification" element={<HistoricalClassification />} /> */}
                {/* <Route path="/UrbanAg" element={<UrbanAg />} /> */}
                {/* <Route path="/FoodProduction" element={<FoodProduction />} /> */}
                {/* <Route path="/HumanOa" element={<HumanOa />} /> */}
                {/* <Route path="/DnaTracing" element={<DnaTracing />} /> */}
                {/* <Route path="/ArtificialRetrieval" element={<ArtificialRetrieval />} /> */}
                {/* <Route path="/SkyLab" element={<SkyLab />} /> */}
                {/* <Route path="/IoLab" element={<IoLab />} /> */}
                {/* <Route path="/GLab" element={<GLab />} /> */}
                {/* <Route path="/XLab" element={<XLab />} /> */}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
