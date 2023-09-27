import logo from "../images/logo.png";

const CryptoTechnologyCenter = () => {
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
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item" href="/Art">
                                                Artificial Intelligence Center
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/CryptotechnologyCenter">
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
                                {/* <li className="nav-item">
                            <a className="nav-link active" href="#contacts">Contacts</a>
                        </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                <section className="ap">
                    <h1> Crypto Technology Center</h1>
                    {/* <h4 style={{ margin: "1.4rem 0rem;" }}>Buy and Sell Crypto</h4>
            <button type="button" className="btn btn-primary btn-lg"> <a style={{ color: "aliceblue", textDecoration: "none;" }}>Laern more</a> </button> */}
                </section>
            </div>

            <main className="pages side">
                <img src="/images/pexels-tima-miroshnichenko-7567532.jpg" alt="" srcSet="" />
                <p>
                    Our innovative platform and Machine Learning tools allow those within our network to upload their data to our global lexicon to provide
                    annotations, judgments, and labels, creating extremely high-quality labeled data for others models within the network. We then provide
                    leading knowledge graphs and support to ensure that data becomes intelligence.
                </p>
            </main>

            <section className="gpo side">
                <h1>Global Digital Assets Platform (GDAP)</h1>
                <div className="imo">
                    <p>
                        The Global Digital Assets Platform (GDAP) is a blockchain-based network that enables processing, recording, and peer-to-peer (P2P)
                        exchange of digital assets across asset classes. The network provides access to the Noir Coin system, which is leveraged to support the
                        payment arm of Global Digital Asset Platform transactions.
                    </p>
                    <ul>
                        <li>The Global Digital Assets Platform (GDAP) provides a suite of services and benefits to members of our network.</li>
                        <li>
                            Rapid Market Adaptation members in our network are able to bring digital use cases to life using distributed-ledger technology
                            (DLT), which saves time, resources, and costs.
                        </li>
                        <li>
                            Vetted Network- Our members comprise an established network, which processes the equivalent of billions of dollars in digital assets
                            in on-chain transactions.
                        </li>
                    </ul>
                </div>
            </section>

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
                                    At Phoenix Labs, we are curious, innovative, and bold. We are testing and exceeding the limitations of what technology can
                                    do. We are a growing team of people with big ideas, who are both thinkers and doers. Our people move quickly and thrive on
                                    working towards solutions to the problems that plague societies across the globe.
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

export default CryptoTechnologyCenter;
