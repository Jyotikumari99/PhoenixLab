import "../../styles/DnaTracing.css";
const DnaTracing = () => {
    return (
        <div className="dnaTracing">
            <div className="header">
                <section className=" w-100 d-flex align-items-center">
                    <h1 className="w-75 m-auto text-center"> Dna Tracing</h1>
                </section>
            </div>
            <div className=" card m-5 p-4">
                <p>
                    Unraveling the mysteries of human ancestry and genetics, DNA Tracing is a testament to our commitment to advancing scientific knowledge. By
                    applying AI to genomic data, we gain invaluable insights into human history, migration patterns, and genetic diversity. The discoveries made
                    in DNA Tracing pave the way for breakthroughs in medicine, anthropology, and beyond.
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

export default DnaTracing;
