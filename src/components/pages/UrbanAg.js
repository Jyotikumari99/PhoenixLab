import "../styles/Style.css";
import logo from "../images/logo.png";
import "../styles/UrbanAg.css";

const UrbanAg = () => {
  return (
    <div>
      <div className="contain">
        <nav className="navbar navbar-expand-lg navbar-light bg-ligh fixed-top">
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
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="art w-100 d-flex align-items-center">
          <h1 className="w-75 m-auto text-center"> Urban Ag</h1>
        </section>
      </div>
      <div className="ailabslist card m-5 p-4">
        <p>
          Urban Agriculture is a testament to our dedication to fostering
          sustainable and inclusive urban environments. By integrating AI with
          urban farming practices, we envision cities where fresh, locally grown
          produce is accessible to all. This section showcases how technology
          can transform urban spaces, promoting healthier lifestyles and
          reducing our ecological footprint.
          <br />
          <br />
          At Phoenix Labs, our history drives us, and our AI Labs inspire us. We
          invite you to explore our transformative projects that push the
          boundaries of possibility and redefine the role of AI in shaping a
          brighter future for all. Join us on this journey of curiosity,
          innovation, and bold vision. Together, we will bridge the gap between
          lack and abundance, forging a path to a more connected, sustainable,
          and inclusive world
        </p>
      </div>
      <div className="ailabslist card m-5 p-4">
        <ul>
          <li>
            <a href="HumanOa">Human Ownership Archives</a>
          </li>
          <li>
            <a href="DnaTracing">DNA Tracing</a>
          </li>
          <li>
            <a href="ArtificialRetrieval">Artificial Retrieval</a>
          </li>
          <li>
            <a href="FoodProduction">Food Production & Food Security</a>
          </li>
          <li>
            <a href="UrbanAg">Urban Ag</a>
          </li>
        </ul>
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
                  societies across the globe.
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

export default UrbanAg;
