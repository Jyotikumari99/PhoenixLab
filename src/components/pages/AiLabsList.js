import "../styles/Style.css";
import logo from "../images/logo.png";
import "../styles/AiLabsList.css";

const AiLabsList = () => {
  return (
    <div>
      <div className="contain">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <img src={logo} alt="here is logo  of the company" />
            <a className="navbar-brand" href="#">
              Phoenix Labs
            </a>

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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/Ailabs"
                  >
                    Back
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="art d-flex justify-content-center w-100">
          <h1 className="w-75 text-center m-auto">AI Labs</h1>
        </section>
      </div>
      <main className="p-4">
        <p>
          Welcome to AI Labs at Phoenix Labs, where innovation knows no bounds,
          and the future unfolds before our eyes. Our AI Labs encompass a
          multitude of groundbreaking research and development projects aimed at
          revolutionizing various industries. Each lab is a testament to our
          unwavering commitment to pushing the boundaries of what's possible and
          harnessing the power of artificial intelligence to create a better
          world.
        </p>
        <ul>
          <li>
            <a href="LearningLab">Learning Labs</a>
          </li>
          <li>
            <a href="HumanSP">Human Sustainability Project</a>
          </li>
          <li>
            <a href="HistoricalClassification">Historical Classification</a>
          </li>
          <li>
            <a href="SkyLab">Sky Lab</a>
          </li>
          <li>
            <a href="IoLab">Io Lab</a>
          </li>
          <li>
            <a href="GLab">G Lab</a>
          </li>
          <li>
            <a href="Xlab">X Lab</a>
          </li>
        </ul>
      </main>
      <div className="footer-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="/Art">Artificial Intelligence Center</a>
                </li>
                <li>
                  <a href="/CryptoTechnologyCenter">Crypto Technology Center</a>
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
                testing and exceeding the limitations of what technology can do.
                We are a growing team of people with big ideas, who are both
                thinkers and doers. Our people move quickly and thrive on
                working towards solutions to the problems that plague societies
                across the globe.
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
          <p className="copyright">Phoenix Labs©2023</p>
        </div>
      </div>
    </div>
  );
};

export default AiLabsList;
