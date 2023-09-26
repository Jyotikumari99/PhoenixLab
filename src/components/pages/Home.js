import "../styles/Home.css";
import logo from "../images/logo.png";
import front_video from "../images/front_video.mp4";
const Home = () => {
  return (
    <>
      <div className="contain">
        <video autoPlay loop muted playsInline className="vb">
          {/* Use the imported front_video variable as the src */}
          <source src={front_video} type="video/mp4" />
        </video>
        <nav className="navbar navbar-expand-lg navbar-light bg-ligh fixed-top mb-5">
          {/* <!-- Rest of your HTML... --> */}
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
                      <a className="dropdown-item" href="/Art">
                        Artificial Intelligence Center
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/CryptoTechnologyCenter"
                      >
                        Crypto Technology Center
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/web">
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
      </div>
      <div className="hero">
        <div className="cont">
          <h1 className="glowing-text">Phoenix Labs</h1>
          <p>
            Phoenix Labs operates a high-growth platform that enables our global
            network to innovate and execute. We build, expand, and improve upon
            world-class AI, Crypto, and web/mobile application initiatives.
          </p>
          <button type="button" className="btn btn-primary btn-lg">
            <a
              style={{ color: "aliceblue", textDecoration: "none" }}
              href="/Vision"
            >
              Learn More
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
