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
                        <a href="humanownershiparchives.html">Human Ownership Archives</a>
                    </li>
                    <li>
                        <a href="DnaTracing">DNA Tracing</a>
                    </li>
                    <li>
                        <a href="ArtificialRetrieval">Artificial Retrieval</a>
                    </li>
                    <li>
                        <a href="FoodProduction">Food Production & Food Security</a>
                    </li>
                    <li>
                        <a href="UrbanAg">Urban Ag</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default historicalclassification;
