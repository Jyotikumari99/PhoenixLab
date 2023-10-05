import "../../styles/LearningLab.css";
const LearningLab = () => {
    return (
        <div className="learningLab">
            <div className="header">
                <section className=" w-100 d-flex align-items-center">
                    <h1 className="w-75 m-auto text-center">Learning Lab</h1>
                </section>
            </div>
            <div className="m-4 d-flex justify-content-center">
                <button type="button" className="btn btn-primary btn-lg">
                    <a style={{ color: "aliceblue", textDecoration: "none" }} href="/learningLab">
                        Get Started Today
                    </a>
                </button>
            </div>
            <div className="card shadow m-5 p-4">
                <p>
                    <b> Home of Phoenix Academy</b>
                    <br />
                    Welcome to Learning Labs, the beating heart of Phoenix Academy. Here, we nurture minds and cultivate excellence in the field of artificial
                    intelligence. Through cutting-edge courses, workshops, and mentorship programs, we empower individuals to become the next generation of AI
                    pioneers.
                    <br />
                    <br />
                    Our esteemed faculty, composed of leading experts in AI, ensures that students receive a comprehensive and hands-on education. From
                    foundational concepts to advanced applications, Learning Labs provides a nurturing environment for aspiring AI enthusiasts to flourish and
                    bring their boldest ideas to life.
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
                        <p>Welcome to the "Learning Lab".Would you like to continue where you left off, or would you like to learn something new?</p>
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

export default LearningLab;
