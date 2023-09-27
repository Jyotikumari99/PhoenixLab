import front_video from "../images/front_video.mp4";
import "../../styles/Home.css";
const Home = () => {
    return (
        <div className="Home">
            <div className="contain">
                <video autoPlay loop muted playsInline className="vb">
                    <source src={front_video} type="video/mp4" />
                </video>
            </div>
            <div className="hero">
                <div className="cont">
                    <h1 className="glowing-text">Phoenix Labs</h1>
                    <p>
                        Phoenix Labs operates a high-growth platform that enables our global network to innovate and execute. We build, expand, and improve upon
                        world-class AI, Crypto, and web/mobile application initiatives.
                    </p>
                    <button type="button" className="btn btn-primary btn-lg">
                        <a style={{ color: "aliceblue", textDecoration: "none" }} href="/Vision">
                            Learn More
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
