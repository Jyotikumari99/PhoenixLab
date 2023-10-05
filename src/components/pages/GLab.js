import "../../styles/GLab.css";
const GLab = () => {
    return (
        <div className="gLab">
            <div className="header">
                <section className=" w-100 d-flex align-items-center">
                    <h1 className="w-75 m-auto text-center">G Lab</h1>
                </section>
            </div>
            <div className="card m-5 p-4">
                <h1 className="text-center">Genealogy/Genomic Research and Development</h1>
                <p className="text-justify">
                    <br />
                    Unlocking the secrets of life itself, G Lab is at the forefront of genealogy and genomic research. Here, we delve into the intricate code of
                    life, exploring how AI can accelerate breakthroughs in healthcare, agriculture, and beyond. Our work is driven by the belief that genomics
                    holds the key to a healthier, more sustainable future.
                    <br />
                    <br />
                    Through collaborations with leading geneticists and bioinformaticians, G Lab is uncovering the hidden potential of genetic data. From
                    personalized medicine to crop resilience, we are harnessing the power of AI to decode the language of life and shape a brighter tomorrow.
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
                            Welcome to the "G Lab." Level 2 verification is required to proceed beyond this point. Please complete the following biometric
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

export default GLab;
