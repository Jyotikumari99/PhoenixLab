import "../../styles/UrbanAg.css";
const UrbanAg = () => {
    return (
        <div className="urbanAg">
            <div className="header">
                <section className=" w-100 d-flex align-items-center">
                    <h1 className="w-75 m-auto text-center"> Urban Ag</h1>
                </section>
            </div>
            <div className=" card m-5 p-4">
                <p className="text-justify">
                    Urban Agriculture is a testament to our dedication to fostering sustainable and inclusive urban environments. By integrating AI with urban
                    farming practices, we envision cities where fresh, locally grown produce is accessible to all. This section showcases how technology can
                    transform urban spaces, promoting healthier lifestyles and reducing our ecological footprint.
                    <br />
                    <br />
                    At Phoenix Labs, our history drives us, and our AI Labs inspire us. We invite you to explore our transformative projects that push the
                    boundaries of possibility and redefine the role of AI in shaping a brighter future for all. Join us on this journey of curiosity,
                    innovation, and bold vision. Together, we will bridge the gap between lack and abundance, forging a path to a more connected, sustainable,
                    and inclusive world
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

export default UrbanAg;
