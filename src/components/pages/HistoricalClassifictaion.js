import "../../styles/HistoricalClassification.css";
const historicalclassification = () => {
    return (
        <div className="historicalC">
            <div className="header">
                <section className=" w-100 d-flex align-items-center">
                    <h1 className="w-75 shadow m-auto text-center">Historical Classification</h1>
                </section>
            </div>
            <div className="card m-5 p-4 shadow-lg">
                <p>
                    Welcome to the Historical Classification section, where we celebrate the legacy of Phoenix Labs and our pivotal contributions to shaping the
                    world through technology and innovation. Our historical projects showcase a journey marked by curiosity, compassion, and an unwavering
                    commitment to human progress.
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

export default historicalclassification;
