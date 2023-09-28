import "../../styles/Data_preparation.css";
const Data_preparation = () => {
    return (
        <div className="dataPreparation">
            <div className="Header d-flex align-items-center w-100">
                <h1 className="w-75 text-center m-auto">Data Preparation</h1>
            </div>
            <main className="p-4">
                <div className="m-4 p-3" id="classify">
                    <h1>Classify</h1>
                    <p className="text-justify">
                        Welcome to our Classify page, where you can unlock the power of our innovative platform and machine learning tools to classify your data
                        with precision and accuracy. Our cutting-edge technology allows you to leverage the collective intelligence of our global network to
                        create highly reliable labeled data for your models.
                        <span className="d-block mt-2"></span>
                        By uploading your data to our platform, you gain access to a vast global lexicon where experts and contributors provide annotations,
                        judgments, and labels. This collaborative approach ensures that your data receives the highest level of quality and accuracy, empowering
                        your models to make intelligent decisions.
                        <span className="d-block mt-2"></span>
                        Whether you're working on sentiment analysis, object recognition, or any other classification task, our platform provides the tools and
                        support you need. With our advanced knowledge graphs and continuous updates, you can stay ahead of the curve and ensure your data
                        becomes actionable intelligence. Start classifying your data today and unlock the full potential of your models. Join our network of
                        experts and contributors, and together, let's revolutionize the way we classify data.
                    </p>
                </div>
                <div id="annotate" className="m-4 p-3">
                    <h1>Annotate</h1>
                    <p className="text-justify">
                        Welcome to our Annotate page, where you can harness the power of our innovative platform and machine learning tools to annotate your
                        data with exceptional precision and detail. Our platform enables you to contribute to the creation of highly accurate and valuable
                        labeled data that fuels the growth of intelligent models within our network.
                        <span className="d-block mt-2"></span>
                        By uploading your data to our global lexicon, you join a community of experts and contributors who provide annotations, judgments, and
                        labels, enriching the understanding and quality of data across various domains. Your contributions play a vital role in ensuring that
                        our network thrives on high-quality labeled data. Whether you're annotating images, documents, or audio files, our platform offers
                        intuitive tools and interfaces that streamline the annotation process. Our collaborative approach ensures that data becomes intelligence
                        by leveraging the collective expertise of our network.
                        <span className="d-block mt-2"></span>
                        Join us in revolutionizing the way we annotate data. Start contributing to our global lexicon today and be part of the movement that
                        drives innovation and advancement in machine learning.
                    </p>
                </div>
                <div id="transcribe" className="m-4 p-3">
                    <h1>Transcribe</h1>
                    <p>
                        Welcome to our Transcribe page, where you can leverage our innovative platform and machine learning tools to transcribe your data with
                        exceptional accuracy and efficiency. Our cutting-edge technology empowers you to convert audio recordings, interviews, and any other
                        spoken content into written form, unlocking the potential of your data.
                        <span className="d-block mt-2"></span>
                        By uploading your audio files to our platform, you gain access to a global network of experts and contributors who provide annotations,
                        judgments, and labels. This collaborative effort ensures that your transcriptions are of the highest quality, capturing every detail and
                        nuance.
                        <span className="d-block mt-2"></span>
                        Our platform offers advanced tools and algorithms that optimize the transcription process, saving you time and effort. Whether you're
                        transcribing interviews, podcasts, or conference recordings, our technology enables you to convert spoken content into valuable text
                        data.
                        <span className="d-block mt-2"></span>
                        Join our network of experts and contributors today, and together, let's transform spoken content into actionable intelligence.
                        Experience the power of our platform and witness how data becomes intelligence through accurate transcriptions.
                    </p>
                </div>
                <div id="translate" className="m-4 p-3">
                    <h1>Translate</h1>
                    <p>
                        Welcome to our Translate page, where you can unlock the power of our innovative platform and machine learning tools to translate your
                        content with unparalleled accuracy and fluency. Our cutting-edge technology allows you to break language barriers and communicate
                        seamlessly across cultures and regions.
                        <span className="d-block mt-2"></span>
                        By uploading your text or audio files to our platform, you gain access to a global lexicon where experts and contributors provide
                        annotations, judgments, and labels, ensuring the highest quality translations. Our collaborative approach leverages the collective
                        intelligence of our network to deliver exceptional results.
                        <span className="d-block mt-2"></span>
                        Whether you're translating documents, website content, or multimedia materials, our platform offers a range of tools and features to
                        simplify the translation process. From neural machine translation to fine-tuning with human expertise, our technology ensures that your
                        translations are precise, natural, and culturally adapted. <br />
                        <br />
                        Join our network of experts and contributors today and experience the transformative power of our platform. Break down language
                        barriers, expand your reach, and witness how data becomes intelligence through accurate and fluent translations.
                    </p>
                </div>
                <div className="m-4 d-flex justify-content-evenly">
                    <a className="btn btn-primary btn-lg" style={{ color: "aliceblue", textDecoration: "none" }} href="/art">
                        Back
                    </a>

                    <a className="btn btn-primary btn-lg" style={{ color: "aliceblue", textDecoration: "none" }} href="/dataCollection">
                        Learn more
                    </a>
                </div>
            </main>
        </div>
    );
};

export default Data_preparation;
