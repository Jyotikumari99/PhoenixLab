import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../../styles/Ailabs.css";
import faceIO from "@faceio/fiojs";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const faceio = new faceIO(process.env.REACT_APP_FACEIO_KEY);
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 330,
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};
const AiLabs = () => {
    const navigate = useNavigate();
    // show form or login buttons
    const [showLoginModel, setShowLoginModel] = useState(false);
    // User Details
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    // Login Registration Modal States
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const formSubmit = (e) => {
        e.preventDefault();
        setShowLoginModel(true);
        setUserName(e.target.name.value);
        setUserEmail(e.target.email.value);
    };

    function enrollNewUser(e) {
        e.preventDefault();
        handleClose();
        faceio
            .enroll({
                locale: "auto",
                userConsent: false,
                payload: {
                    whoami: `{${userName}}`,
                    email: `${userEmail}`,
                },
            })
            .then(async () => {
                handleOpen();
                message.success("User Successfully Enrolled! Now you can login.");
                faceio.restartSession();
            })
            .catch(async (errCode) => {
                faceio.restartSession();
                message.error("Registration failed: " + errCode);
            });
    }

    function authenticateUser(e) {
        e.preventDefault();
        handleClose();
        faceio
            .authenticate({
                locale: "auto",
            })
            .then(() => {
                localStorage.setItem("user_phoenixlab", userEmail);
                navigate("/aiLabsList");
            })
            .catch((code) => {
                message.error("Authentication failed: " + code);
                faceio.restartSession();
            });
    }
    return (
        <div className="aiLabs">
            <div className="Header d-flex justify-content-center w-100">
                <h1 className="w-75 text-center m-auto">AI Labs</h1>
            </div>
            <main className="container">
                <div className="row py-4 my-1">
                    <div className="text-center">
                        <p className="text-justify m-auto fs-5">
                            Welcome to our Artificial Intelligence Labs. It is here that we research and deploy complex workflows, algorithms, and projects that
                            can and will change our future. Our AI Labs Platform consists of three different laboratories that were created to focus on
                            real-world problems that require real-world solutions.
                        </p>
                        <a className="btn btn-secondary btn-sm mt-2 fw-bold" style={{ textDecoration: "none" }} href="/dataCollection">
                            Learn more
                        </a>
                    </div>
                    <div className="card shadow-lg my-4 p-2 d-flex justify-content-center align-items-center">
                        <h2 className="text-center">You must login to access all features.</h2>
                        <button className="w-75 btn btn-primary btn-lg" onClick={handleOpen}>
                            Login / Register
                        </button>
                    </div>
                    <div>
                        <div id="faceio-modal"></div>
                        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                            <Box sx={style}>
                                {showLoginModel ? (
                                    <div className="h-100 d-flex flex-column justify-content-between ">
                                        <div className="text-center card p-1">
                                            <h4>Do you already have account?</h4>
                                            <button className="btn btn-primary btn-sm" onClick={authenticateUser}>
                                                Login
                                            </button>
                                        </div>
                                        <div className="text-center card p-1">
                                            <h4>New User?</h4>
                                            <button className="btn btn-primary btn-sm" onClick={enrollNewUser}>
                                                Register
                                            </button>
                                        </div>
                                        <div className="d-flex justify-content-around">
                                            <button className="btn btn-primary btn-sm">Back</button>
                                            <button className="btn btn-primary btn-sm">Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={formSubmit}>
                                        <h4>Welcome to Facial Recognition</h4>
                                        <div>
                                            <label htmlFor="name">Name:</label>
                                            <input type="text" id="name" name="name" required />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" id="email" name="email" required />
                                        </div>
                                        <button className="btn btn-primary btn-sm" type="submit">
                                            Continue
                                        </button>
                                    </form>
                                )}
                            </Box>
                        </Modal>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default AiLabs;
