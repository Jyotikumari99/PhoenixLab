import "../../styles/CryptoTechnologyCenter.css";
import Img from "../images/pexels-tima-miroshnichenko-7567532.jpg";
const CryptoTechnologyCenter = () => {
    return (
        <div className="Crypto">
            <div className="Header">
                <section>
                    <h1 className="Heading"> Crypto Technology Center</h1>
                    <p className="SubHeading">
                        Our innovative platform and Machine Learning tools allow those within our network to upload their data to our global lexicon to provide
                        annotations, judgments, and labels, creating extremely high-quality labeled data for others models within the network. We then provide
                        leading knowledge graphs and support to ensure that data becomes intelligence.
                    </p>
                </section>
            </div>
            <main className="d-flex justify-content-center align-items-center">
                <section className="m-5">
                    <h1 className="text-center">Global Digital Assets Platform (GDAP)</h1>
                    <div className="">
                        <p className="text-justify">
                            The Global Digital Assets Platform (GDAP) is a blockchain-based network that enables processing, recording, and peer-to-peer (P2P)
                            exchange of digital assets across asset classes. The network provides access to the Noir Coin system, which is leveraged to support
                            the payment arm of Global Digital Asset Platform transactions.
                        </p>
                        <ul>
                            <li>The Global Digital Assets Platform (GDAP) provides a suite of services and benefits to members of our network.</li>
                            <li>
                                Rapid Market Adaptation members in our network are able to bring digital use cases to life using distributed-ledger technology
                                (DLT), which saves time, resources, and costs.
                            </li>
                            <li>
                                Vetted Network- Our members comprise an established network, which processes the equivalent of billions of dollars in digital
                                assets in on-chain transactions.
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CryptoTechnologyCenter;
