import "../../styles/SkyLab.css";
const SkyLab = () => {
    return (
        <div className="skyLab">
            <div className="header">
                <section className=" w-100 d-flex align-items-center">
                    <h1 className="w-75 m-auto text-center shadow">Sky Lab</h1>
                </section>
            </div>
            <div className="card m-5 p-4 shadow">
                <h4 className="text-center">Satellite/Network Connectivity Research and Development</h4>
                <p className="text-justify">
                    <br />
                    At Sky Lab, we are reaching for the heavens - quite literally. Our mission is to revolutionize satellite and network connectivity through
                    AI-driven research and development. By pushing the boundaries of communication technology, we aim to create a world where seamless
                    connectivity transcends barriers, empowering communities worldwide.
                    <br />
                    <br />
                    Through strategic partnerships and groundbreaking projects, Sky Lab is paving the way for a new era of communication, where every corner of
                    the globe is within reach. From satellite constellations to network optimization, we are engineering a connected future that knows no
                    limits.
                </p>
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
                            Welcome to the "Sky Lab." Level 2 verification is required to proceed beyond this point. Please complete the following biometric
                            authentication."
                        </p>
                    </li>
                </ul>
                <div className="chat-input">
                    <textarea placeholder="Enter a message..." spellCheck="false" required></textarea>
                    <span id="send-btn" className="material-symbols-rounded">
                        send
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SkyLab;
