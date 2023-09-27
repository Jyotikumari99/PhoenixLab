
import logo from "../images/logo.png";
const Vision = () => {
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
                  <a className="nav-link active " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Vision">
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
                      <a className="dropdown-item" href="Art">
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
                  <a className="nav-link active" href="/Vision">
                    Projects
                  </a>
                </li>
                {/* <li className="nav-item">
                        <a className="nav-link active" href="#contacts">Contacts</a>
                    </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <section className="vision">
          <h1>Our Vision</h1>
        </section>
      </div>
      <main className="pages side">
        <p>
          At Phoenix Labs, we are curious, innovative, and bold. We are testing
          and exceeding the limitations of what technology can do. We are a
          growing team of people with big ideas, who are both thinkers and
          doers. Our people move quickly and thrive on working towards solutions
          to the problems that plague societies across the globe.{" "}
        </p>

        <p>
          We are committed to recruiting talented individuals, groups, and
          teams, and providing them with opportunities to influence the future
          of marginalized groups for the better. It is here that we take risks,
          promote visionary expression, and focus on bridging the gap between
          Lack and Abundance by seamlessly integrating diverse humans and
          technology.
        </p>
      </main>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
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
              <div class="col-sm-7 col-md-3 item">
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
              <div class="col-md-6 item text">
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
            <p className="copyright">Pheonix Labs © 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Vision;
