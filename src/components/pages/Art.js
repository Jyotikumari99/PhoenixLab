import "../styles/Art.css";
import data_collection from "../images/data_collection.jpg";
import data_preparation from "../images/data_preparation.jpg";
import model_evaluation from "../images/model_evaluation.jpg";
import logo from "../images/logo.png";
import ailabs from "../images/ailabs.jpg";
import AiLabs from "./AiLabs";
import Data_collection from "./Data_collection";
import Data_preparation from "./Data_preparation";
import backImage from "../images/artbackground.jpg";
const Art = () => {
  return (
    <div>
      <div className="contain">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <img src={logo} alt="here is logo of the company" />
            <a className="navbar-brand" href="#">
              Phoenix Labs
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="Vision">
                    Vision
                  </a>
                </li>
                <div className="dropdown">
                  <a
                    className="btn dropdown-toggle"
                    style={{ fontSize: "1.2rem" }}
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Divisions
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/Art">
                        Artificial Intelligence Center
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="CryptoTechnologyCenter"
                      >
                        Crypto Technology Center
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="Web">
                        Web/Mobile Application Suite
                      </a>
                    </li>
                  </ul>
                </div>
                <li className="nav-item">
                  <a className="nav-link active" href="#portfolio">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="art d-flex align-items-center w-100 text-center">
          <div className="w-100">
            <h1 className="w-75 m-auto">Artificial Intelligence Center</h1>
            <p
              className="w-75 m-auto"
              style={{
                backgroundImage: "../images/artbackground.jpg",
              }}
            >
              Phoenix Labs Artificial Intelligence Center was created to further
              AI research and development. We believe that AI Research, tools,
              and laboratories should be accessible to marginalized groups. It
              is our goal to make the tools (code, datasets, models, etc.), and
              spaces available so that the aforementioned can easily access and
              use them to solve pressing problems.
            </p>
            <img
              src="../images/artbackground.jpg"
              alt=""
              height={100}
              width={100}
            />
          </div>
        </section>
      </div>
      <main className="pages side">
        <div className="sec">
          <div className="grid">
            <div className="text-center">
              <a href="/Data_collection">
                <img
                  src={data_collection}
                  alt="here is data_collection image of the company"
                />
              </a>
              <h2 className="mt-3">Data Collection</h2>
            </div>
            <div className="text-center">
              <a href="/Data_preparation">
                <img
                  src={data_preparation}
                  alt="here is data_collection image of the company"
                />
              </a>
              <h2 className="mt-3">Data Preparation</h2>
            </div>
            <div className="text-center">
              <a href="/ModelEvaluation">
                <img
                  src={model_evaluation}
                  alt="here is model_evaluation image of the company"
                />
              </a>
              <h2 className="mt-3">Model Evaluation</h2>
            </div>
            <div className="text-center">
              <a href="/Ailabs">
                <img src={ailabs} alt="here is ailabs image of the company" />
              </a>
              <h2 className="mt-3">AI Labs</h2>
            </div>
          </div>
        </div>
      </main>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="/Art">Artificial Intelligence Center</a>
                  </li>
                  <li>
                    <a href="/CryptoTechnologyCenter">
                      Crypto Technology Center
                    </a>
                  </li>
                  <li>
                    <a href="/Web">Web/Mobile Application Suite</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-7 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Phoenix Labs</h3>
                <p>
                  At Phoenix Labs, we are curious, innovative, and bold. We are
                  testing and exceeding the limitations of what technology can
                  do. We are a growing team of people with big ideas, who are
                  both thinkers and doers. Our people move quickly and thrive on
                  working towards solutions to the problems that plague
                  societies across the globe.
                </p>
              </div>
              <div className="col item social">
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
            <p>
              <a href="PrivacyPolicy" className="unicare">
                UniCare® Privacy Policy
              </a>
            </p>
            <p className="copyright">Phoenix Labs © 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Art;
