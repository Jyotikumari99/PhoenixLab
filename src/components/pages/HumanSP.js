
import logo from "../images/logo.png";

const HumanSP = () => {
  return (
    <div>
      <div className="contain">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <img src={logo} alt="here is logo  of the company" />
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
                {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="ailabs.html">Home</a>
                    </li> */}
                {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="ailabs.html">Mass Incarceration</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="ailabs.html">Self Suicide Prevention</a>
                    </li> */}
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Healthcare
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Unicare
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="UrbanAg"
                  >
                    Urban Ag
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Food Security
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="fFoodProduction"
                  >
                    Food Production
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="art w-100 d-flex align-items-center">
          <h1 className="w-75 m-auto text-center">
            Human Sustainability Projects
          </h1>
        </section>
      </div>
      <div className="card m-5 p-4">
        <p>
          The Human Sustainability Project exemplifies our dedication to
          leveraging AI for the betterment of humanity. This visionary
          initiative focuses on projects aimed at addressing global challenges,
          from healthcare to environmental sustainability. Through collaboration
          and innovation, we envision a future where AI-driven solutions drive
          lasting positive change for all.
        </p>
      </div>
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
                  societies across the globe..
                </p>
              </div>
              <div className="col item social">
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>{" "}
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

export default HumanSP;
