import "../../styles/IoLab.css";
const IoLab = () => {
    return (
        <div className="ioLab">
            <div className="header">
                <section className=" w-100 d-flex align-items-center">
                    <h1 className=" w-75 m-auto text-center">Io Lab</h1>
                </section>
            </div>
            <div className="card m-5 p-4">
                <h4 className="text-center"> AI Model Generation/Deployment</h4>
                <p className="text-justify">
                    <br />
                    Welcome to IO Lab, where artificial intelligence is brought to life. This is where our exceptional team of AI engineers and data scientists
                    work tirelessly to develop cutting-edge AI models that redefine industries. We believe in the power of AI to drive meaningful change, and IO
                    Lab is the heart of that transformation.
                    <br />
                    <br />
                    With a focus on robust model generation and seamless deployment, IO Lab ensures that our AI solutions are not just accurate but also
                    scalable and adaptable to diverse applications. We strive to create AI that understands, learns, and augments human capabilities, making the
                    world a better place through intelligence.
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
                            Welcome to the "I.O. Lab." Level 2 verification is required to proceed beyond this point. Please complete the following biometric
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

export default IoLab;
