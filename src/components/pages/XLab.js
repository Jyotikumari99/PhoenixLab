import "../../styles/XLab.css";
const XLab = () => {
    return (
        <div className="xLab">
            <div className="header">
                <section className=" w-100 d-flex align-items-center">
                    <h1 className="w-75 m-auto text-center shadow">X Lab</h1>
                </section>
            </div>
            <div className="card m-5 p-4">
                <h4 className="text-center"> Special Operations Research and Development</h4>
                <p className="text-justify">
                    <br />
                    X Lab represents the cutting edge of AI research with a focus on special operations. Here, we explore applications of AI that transcend
                    conventional boundaries, revolutionizing fields such as defense, security, and beyond. Our audacious projects redefine the art of the
                    possible and set new standards for technological innovation.
                    <br />
                    <br />
                    With a team composed of experts from diverse backgrounds, X Lab tackles complex challenges head-on. From autonomous systems to advanced
                    robotics, our research lays the groundwork for a safer, more secure future, where AI becomes the cornerstone of progress.
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
                            Welcome to the "X Lab." Level 2 verification is required to proceed beyond this point. Please complete the following biometric
                            authentication.
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

export default XLab;
