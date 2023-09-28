import "../../styles/Footer.css";
const Footer = () => {
    return (
        <div className="Footer bg-dark p-2 px-sm-4 py-sm-3 px-md-5 py-md-4">
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col col-sm-6 col-md-3">
                        <p className="text-white heading">Services</p>
                        <a href="/art">Artificial Intelligence Center</a>
                        <a href="/cryptoTechnologyCenter">Crypto Technology Center</a>
                        <a href="/web">Web/Mobile Application Suite</a>
                    </div>
                    <div className="col col-sm-6 col-md-3">
                        <p className="text-white heading">About</p>
                        <a href="/">Company</a>
                        <a href="/">Team</a>
                        <a href="/">Careers</a>
                        <a href="/privacyPolicy">UniCare® Privacy Policy</a>
                    </div>
                    <div className="col-12 col-md-6 mt-2 mt-sm-1 mt-md-0">
                        <p className="text-white heading">Phoenix Labs</p>
                        <p className="text-justify text" style={{ color: "rgba(192, 192, 192, 1)" }}>
                            At Phoenix Labs, we are curious, innovative, and bold. We are testing and exceeding the limitations of what technology can do. We
                            are a growing team of people with big ideas, who are both thinkers and doers. Our people move quickly and thrive on working towards
                            solutions to the problems that plague societies across the globe.
                        </p>
                    </div>
                </div>
                <div className="row mt-2 mt-md-3">
                    <div className="col-12 col-sm-6 d-flex justify-content-around">
                        <a href="/">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="/">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="/">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="/">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                        <p className="text-white m-0 text-center">Phoenix Labs © 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
