import "../../styles/AiLabsList.css";
const LearningLabImg = "https://media.glassdoor.com/l/01/de/51/61/passionate-and-enthusiastic-teacher-in-action.jpg";
const HumanSPImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFD5TH2wJ4fQiL36elyVJE1kQM1B16oTh-Q&usqp=CAU";
const HistoricalClassificationImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIhtLBm2RizY3cSeP9rhOf7L6SXj8b_DMJyA&usqp=CAU";
const SkyLabImg = "https://cdn.britannica.com/22/71322-050-1AB5E6E7/space-station-orbit-astronauts-Skylab-4-crew-February-8-1974.jpg";
const IoLabImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZtmhF7E0xh1tpQ8UVvcAnNv2ocJmvFBmBmQ&usqp=CAU";
const GLabImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jn6zYNQV8Z49YLquhQZBHOHefP-L25wjVQ&usqp=CAU";
const XLabImg =
    "data:image/png;base64,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";
const AiLabsList = () => {
    return (
        <div className="aiLabsList">
            <div className="header">
                <section className="art d-flex justify-content-center w-100">
                    <h1 className="w-75 text-center m-auto">AI Labs</h1>
                </section>
            </div>
            <main className="p-4">
                <p>
                    Welcome to AI Labs at Phoenix Labs, where innovation knows no bounds, and the future unfolds before our eyes. Our AI Labs encompass a
                    multitude of groundbreaking research and development projects aimed at revolutionizing various industries. Each lab is a testament to our
                    unwavering commitment to pushing the boundaries of what's possible and harnessing the power of artificial intelligence to create a better
                    world.
                </p>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-6 col-md-3 card my-3">
                            <a href="/learningLab" className="text-center">
                                <img src={LearningLabImg} height={200} alt="Learning Lab" />
                                <h3>Learning Lab</h3>
                            </a>
                        </div>
                        <div className="col-6 col-md-3 card my-3">
                            <a href="/humanSustainabilityProject" className="text-center">
                                <img src={HumanSPImg} height={190} alt="Learning Lab" />
                                <h3>Human Sustainability Project</h3>
                            </a>
                        </div>
                        <div className="col-6 col-md-3 card my-3">
                            <a href="/historicalClassification" className="text-center">
                                <img src={HistoricalClassificationImg} height={170} alt="Learning Lab" />
                                <h3>Historical Classification</h3>
                            </a>
                        </div>
                        <div className="col-6 col-md-3 card my-3">
                            <a href="/skyLab" className="text-center">
                                <img src={SkyLabImg} height={200} alt="Learning Lab" />
                                <h3>Sky Lab</h3>
                            </a>
                        </div>
                        <div className="col-6 col-md-3 card my-3">
                            <a href="/ioLab" className="text-center">
                                <img src={IoLabImg} height={200} alt="Learning Lab" />
                                <h3>IO Lab</h3>
                            </a>
                        </div>
                        <div className="col-6 col-md-3 card my-3">
                            <a href="/gLab" className="text-center">
                                <img src={GLabImg} height={200} alt="Learning Lab" />
                                <h3>G Lab</h3>
                            </a>
                        </div>
                        <div className="col-6 col-md-3 card my-3">
                            <a href="/xLab" className="text-center">
                                <img src={XLabImg} height={200} alt="Learning Lab" />
                                <h3>X Lab</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AiLabsList;
