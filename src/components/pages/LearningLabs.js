import "../styles/Style.css";
import logo from "../images/logo.png";
import "../styles/LearningLab.css";

const LearningLab = () => {
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
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="AiLabs"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Divisions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Workshops
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Mentorship
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Phoenix Academy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="art w-100 d-flex align-items-center">
          <h1 className="w-75 m-auto text-center">Learning Lab</h1>
        </section>
      </div>
      <div className="m-4 d-flex justify-content-center">
        <button type="button" className="btn btn-primary btn-lg">
          <a
            style={{ color: "aliceblue", textDecoration: "none" }}
            href="LearningLabs"
          >
            Get Started Today
          </a>
        </button>
      </div>
      <div className="card m-5 p-4">
        <p>
          {" "}
          <b> Home of Phoenix Academy</b>
          <br />
          Welcome to Learning Labs, the beating heart of Phoenix Academy. Here,
          we nurture minds and cultivate excellence in the field of artificial
          intelligence. Through cutting-edge courses, workshops, and mentorship
          programs, we empower individuals to become the next generation of AI
          pioneers.
          <br />
          <br />
          Our esteemed faculty, composed of leading experts in AI, ensures that
          students receive a comprehensive and hands-on education. From
          foundational concepts to advanced applications, Learning Labs provides
          a nurturing environment for aspiring AI enthusiasts to flourish and
          bring their boldest ideas to life.
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
      <button className="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot">
        <header>
          <h2>Chatbot</h2>
          <span className="close-btn material-symbols-outlined">close</span>
        </header>
        <ul className="chatbox">
          <li className="chat incoming">
            <span className="material-symbols-outlined">smart_toy</span>
            <p>
              Welcome to the "Learning Lab".Would you like to continue where you
              left off, or would you like to learn something new?
            </p>
          </li>
        </ul>
        <div className="chat-input">
          <textarea
            placeholder="Enter a message..."
            spellCheck="false"
            required
          ></textarea>
          <span id="send-btn" className="material-symbols-rounded">
            send
          </span>
        </div>
      </div>
    </div>
  );
};

export default LearningLab;
