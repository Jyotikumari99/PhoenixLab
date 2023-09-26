const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="/art.html">Artificial Intelligence Center</a>
                </li>
                <li>
                  <a href="/crypto">Crypto Technology Center</a>
                </li>
                <li>
                  <a href="/web.html">Web/Mobile Application Suite</a>
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
            <a href="privacypolicy.html" className="unicare">
              UniCare® Privacy Policy
            </a>
          </p>
          <p className="copyright">Phoenix Labs © 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
