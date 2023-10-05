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
import DataCollection from "./components/pages/Data_collection";
import DataPreparation from "./components/pages/Data_preparation";
import ModelEvaluation from "./components/pages/ModelEvaluation";
import AiLabs from "./components/pages/AiLabs";
import AiLabsList from "./components/pages/AiLabsList";
import LearningLabs from "./components/pages/LearningLabs";
import HumanSP from "./components/pages/HumanSP";
import HistoricalClassification from "./components/pages/HistoricalClassifictaion";
import SkyLab from "./components/pages/SkyLab";
// import UrbanAg from "./components/pages/UrbanAg";
// import FoodProduction from "./components/pages/FoodProduction";
// import HumanOa from "./components/pages/HumanOa";
// import DnaTracing from "./components/pages/DnaTracing";
// import ArtificialRetrieval from "./components/pages/ArtificialRetrieval";
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
                <Route path="/dataCollection" element={<DataCollection />} />
                <Route path="/dataPreparation" element={<DataPreparation />} />
                <Route path="/modelEvaluation" element={<ModelEvaluation />} />
                <Route path="/ailabs" element={<AiLabs />} />
                <Route path="/aiLabsList" element={<AiLabsList />} />
                <Route path="/learningLab" element={<LearningLabs />} />
                <Route path="/humanSustainabilityProject" element={<HumanSP />} />
                <Route path="/historicalClassification" element={<HistoricalClassification />} />
                <Route path="/skyLab" element={<SkyLab />} />
                {/* <Route path="/UrbanAg" element={<UrbanAg />} /> */}
                {/* <Route path="/FoodProduction" element={<FoodProduction />} /> */}
                {/* <Route path="/HumanOa" element={<HumanOa />} /> */}
                {/* <Route path="/DnaTracing" element={<DnaTracing />} /> */}
                {/* <Route path="/ArtificialRetrieval" element={<ArtificialRetrieval />} /> */}
                {/* <Route path="/IoLab" element={<IoLab />} /> */}
                {/* <Route path="/GLab" element={<GLab />} /> */}
                {/* <Route path="/XLab" element={<XLab />} /> */}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
