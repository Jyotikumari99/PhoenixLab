import "../../styles/ArtificialRetrieval.css";
const ArtificialRetrieval = () => {
    return (
        <div className="aiRetrieval">
            <div className="header">
                <section className=" w-100 d-flex align-items-center">
                    <h1 className="w-75 m-auto text-center"> Artificial Retrieval</h1>
                </section>
            </div>
            <div className="card m-5 p-4">
                <p>
                    Artificial Retrieval showcases our expertise in creating AI systems that augment human capabilities. From information retrieval to data
                    analysis, this collection of projects embodies the idea that AI can be a powerful tool to amplify human intelligence and improve
                    decision-making across industries.
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

export default ArtificialRetrieval;
