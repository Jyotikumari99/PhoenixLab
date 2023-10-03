import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../../styles/Ailabs.css";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};
const AiLabs = () => {
    // Login Registration Modal States
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const formSubmit = (e) => {
        e.preventDefault();
        // Your logic for handling form submission
    };

    const enrollNewUser = () => {
        // Your logic for enrolling a new user
    };

    const authenticateUser = () => {
        // Your logic for authenticating a user
    };
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
                    <div className="card my-4 d-flex justify-content-center align-items-center">
                        <h2>You must login to access all features.</h2>
                        <button className="w-75 " onClick={handleOpen}>
                            Login / Register
                        </button>
                    </div>
                    <div>
                        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                            <Box sx={style}>
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
                                    <button className="btn-sm" type="submit">
                                        Continue
                                    </button>
                                </form>
                            </Box>
                        </Modal>
                    </div>
                </div>
                <div id="faceio-modal"></div>
            </main>
        </div>
    );
};
export default AiLabs;
//   const [userInfo, setUserInfo] = useState(
//     JSON.parse(localStorage.getItem("userInfo")) || null
//   );
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setIsFormSubmitted(true);
//   };
//   const handleLogin = () => {
//     // Check if the user is already authenticated
//     if (isAuthenticated()) {
//       window.location.href = "ailabslist.html";
//     } else {
//       // Perform facial recognition
//       faceio
//         .authenticate({
//           locale: "auto",
//         })
//         .then((userData) => {
//           console.log("Success, user identified");
//           console.log("Linked facial Id: " + userData.facialId);
//           console.log("Payload: " + JSON.stringify(userData.payload));

//           // Store user info in localStorage
//           localStorage.setItem("userInfo", JSON.stringify(userData));
//           setUserInfo(userData);

//           // Redirect to success.html
//           window.location.href = "ailabslist.html";
//         })
//         .catch((errCode) => {
//           console.error("Authentication failed: " + errCode);
//         });
//     }
//   };

//   const handleRegister = () => {
//     // Perform user registration
//     faceio
//       .enroll({
//         locale: "auto",
//         payload: {
//           name: document.getElementById("name").value,
//           email: document.getElementById("email").value,
//         },
//       })
//       .then((userInfo) => {
//         alert(
//           `User Successfully Enrolled! Details:
//           Unique Facial ID: ${userInfo.facialId}
//           Enrollment Date: ${userInfo.timestamp}
//           Gender: ${userInfo.details.gender}
//           Age Approximation: ${userInfo.details.age}`
//         );
//         console.log(userInfo);
//       })
//       .catch((errCode) => {
//         console.error("Registration failed: " + errCode);
//       });
//   };

//   return (
//     <div>
//       <form id="user-form" onSubmit={handleFormSubmit}>
//         {/* Your form elements go here */}
//       </form>
//       {isFormSubmitted ? (
//         <div>
//           <h1 id="form-heading">Form Heading</h1>
//           <div className="action-buttons">
//             <button id="login-btn" onClick={handleLogin}>
//               Login
//             </button>
//             <button id="register-btn" onClick={handleRegister}>
//               Register
//             </button>
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// };
