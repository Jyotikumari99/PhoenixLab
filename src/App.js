import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Helpers/Navbar";
import Footer from "./components/Helpers/Footer";
import Home from "./components/pages/Home";
import Vision from "./components/pages/Vision";
// import AiLabs from "./components/pages/AiLabs";
// import Art from "./components/pages/Art";
// import Data_collection from "./components/pages/Data_collection";
// import Data_preparation from "./components/pages/Data_preparation";
// import ModelEvaluation from "./components/pages/ModelEvaluation";
// import CryptoTechnologyCenter from "./components/pages/CryptoTechnologyCenter";
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
// import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import "./styles/App.css";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vision" element={<Vision />} />
                {/* <Route path="/ailabs" element={<AiLabs />} />
                <Route path="/Art" element={<Art />} />
                <Route path="/Data_collection" element={<Data_collection />} />
                <Route path="/Data_preparation" element={<Data_preparation />} />
                <Route path="/ModelEvaluation" element={<ModelEvaluation />} />
                <Route path="/CryptoTechnologyCenter" element={<CryptoTechnologyCenter />} />
                <Route path="/AiLabsList" element={<AiLabsList />} />
                <Route path="/LearningLabs" element={<LearningLabs />} />
                <Route path="/HumanSP" element={<HumanSP />} />
                <Route path="/HistoricalClassification" element={<HistoricalClassification />} />
                <Route path="/UrbanAg" element={<UrbanAg />} />
                <Route path="/FoodProduction" element={<FoodProduction />} />
                <Route path="/HumanOa" element={<HumanOa />} />
                <Route path="/DnaTracing" element={<DnaTracing />} />
                <Route path="/ArtificialRetrieval" element={<ArtificialRetrieval />} />
                <Route path="/SkyLab" element={<SkyLab />} />
                <Route path="/IoLab" element={<IoLab />} />
                <Route path="/GLab" element={<GLab />} />
                <Route path="/XLab" element={<XLab />} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} /> */}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
