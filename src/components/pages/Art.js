import data_collection from "../images/data_collection.jpg";
import data_preparation from "../images/data_preparation.jpg";
import model_evaluation from "../images/model_evaluation.jpg";
import ailabs from "../images/ailabs.jpg";
import "../../styles/Art.css";
const Art = () => {
    return (
        <div className="ART">
            <div className="header">
                <div>
                    <h1 className="Heading">Artificial Intelligence Center</h1>
                    <p className="SubHeading">
                        Phoenix Labs Artificial Intelligence Center was created to further AI research and development. We believe that AI Research, tools, and
                        laboratories should be accessible to marginalized groups. It is our goal to make the tools (code, datasets, models, etc.), and spaces
                        available so that the aforementioned can easily access and use them to solve pressing problems.
                    </p>
                </div>
            </div>
            <main className="d-flex align-items-center justify-content-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3 text-center ">
                            <a href="/dataCollection" className="d-flex justify-content-center align-items-center card">
                                <img className="CoverImg" src={data_collection} alt="Data Collection" />
                                <h4 className="mt-3">Data Collection</h4>
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 text-center">
                            <a href="/dataPreparation" className="d-flex justify-content-center align-items-center card">
                                <img className="CoverImg" src={data_preparation} alt="Data Preparation" />
                                <h4 className="mt-3">Data Preparation</h4>
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 text-center">
                            <a href="/modelEvaluation" className="d-flex justify-content-center align-items-center card">
                                <img className="CoverImg" src={model_evaluation} alt="Model Evaluation" />
                                <h4 className="mt-3">Model Evaluation</h4>
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 text-center">
                            <a href="/aiLabs" className="d-flex justify-content-center align-items-center card">
                                <img className="CoverImg" src={ailabs} alt="Ai Labs" />
                                <h4 className="mt-3">AI Labs</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Art;
