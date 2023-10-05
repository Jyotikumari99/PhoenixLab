import "../../styles/HumanOa.css";
const HumanOa = () => {
    return (
        <div className="humanOA">
            <div className="header">
                <section className=" w-100 d-flex align-items-center">
                    <h1 className="w-75 m-auto text-center">Human Ownership Archives</h1>
                </section>
            </div>
            <div className="card m-5 p-4">
                <p>
                    The Human Ownership Archives serve as a testament to our commitment to transparency and ethics. We maintain a record of our early projects
                    that explored AI and its potential societal impact. By acknowledging and learning from our past, we strive to pave a more responsible and
                    accountable path for the future of AI.
                </p>
            </div>
            <div className=" card m-5 p-4">
                <ul>
                    <li>
                        <a href="/humanOA">Human Ownership Archives</a>
                    </li>
                    <li>
                        <a href="/dnaTracing">DNA Tracing</a>
                    </li>
                    <li>
                        <a href="/artificialRetrieval">Artificial Retrieval</a>
                    </li>
                    <li>
                        <a href="/foodProduction">Food Production & Food Security</a>
                    </li>
                    <li>
                        <a href="/urbanAg">Urban Ag</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HumanOa;
