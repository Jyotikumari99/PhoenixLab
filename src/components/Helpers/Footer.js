import "../../styles/Footer.css";
const Footer = () => {
    return (
        <div className="Footer bg-dark p-3 p-sm-4 p-md-5" style={{ marginTop: "100px" }}>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col col-sm-6 col-md-3">
                        <h3 className="text-white">Services</h3>
                        <a href="/art">Artificial Intelligence Center</a>
                        <a href="/cryptoTechnologyCenter">Crypto Technology Center</a>
                        <a href="/web">Web/Mobile Application Suite</a>
                    </div>
                    <div className="col col-sm-6 col-md-3">
                        <h3 className="text-white">About</h3>
                        <a href="/">Company</a>
                        <a href="/">Team</a>
                        <a href="/">Careers</a>
                        <a href="/" className="unicare">
                            UniCare® Privacy Policy
                        </a>
                    </div>
                    <div className="col-12 col-md-6 mt-4 mt-md-0">
                        <h3 className="text-white">Phoenix Labs</h3>
                        <p className="text-justify" style={{ color: "rgba(192, 192, 192, 1)" }}>
                            At Phoenix Labs, we are curious, innovative, and bold. We are testing and exceeding the limitations of what technology can do. We
                            are a growing team of people with big ideas, who are both thinkers and doers. Our people move quickly and thrive on working towards
                            solutions to the problems that plague societies across the globe.
                        </p>
                    </div>
                </div>
                <div className="row">
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
                    <div className="col-12 col-sm-6 mt-4 mt-sm-0">
                        <p className="text-white m-0 text-center">Phoenix Labs © 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
