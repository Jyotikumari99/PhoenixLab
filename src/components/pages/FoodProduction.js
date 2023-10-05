import "../../styles/FoodProduction.css";
const FoodProduction = () => {
    return (
        <div className="foodProduction">
            <div className="header">
                <section className=" w-100 d-flex align-items-center">
                    <h1 className="w-75 m-auto text-center"> Food Production</h1>
                </section>
            </div>
            <div className=" card m-5 p-4">
                <p>
                    At Phoenix Labs, we recognize the critical importance of food production and security. This section highlights our endeavors to harness AI
                    to enhance agricultural practices, optimize crop yields, and ensure food security for a growing global population. Through sustainable and
                    data-driven approaches, we are shaping a more resilient and abundant future for agriculture.
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

export default FoodProduction;
