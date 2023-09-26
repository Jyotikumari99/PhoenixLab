// import "../styles/Style.css";
// import "../styles/Ailabs.css";
// import { useState } from "react";
// const AiLabs = () => {
//   const formSubmited = (e) => {
//     e.preventDefault();
//     // Your logic for handling form submission
//   };

//   const enrollNewUser = () => {
//     // Your logic for enrolling a new user
//   };

//   const authenticateUser = () => {
//     // Your logic for authenticating a user
//   };
//   return (
//     <div>
//       <div className="contain">
//         <nav className="navbar navbar-expand-lg navbar-light bg-ligh fixed-top">
//           <div className="container-fluid">
//             <img src="/images/logo.png" alt="" />
//             <a className="navbar-brand" href="#">
//               Phoenix Labs
//             </a>

//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav ms-auto mb-2 mb-lg">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     Home
//                   </a>
//                 </li>

//                 <li className="nav-item">
//                   <a
//                     className="nav-link active"
//                     aria-current="page"
//                     href="/art.html"
//                   >
//                     Back
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <section className="art d-flex justify-content-center w-100">
//           <h1 className="w-75 text-center m-auto">AI Labs</h1>
//         </section>
//       </div>
//       <main className="container">
//         <div className="row">
//           <div style={{ border: "1px solid #000" }} className="p-4">
//             <p className="text-justify m-auto fs-5">
//               Welcome to our Artificial Intelligence Labs. It is here that we
//               research and deploy complex workflows, algorithms, and projects
//               that can and will change our future. Our AI Labs Platform consists
//               of three different laboratories that were created to focus on
//               real-world problems that require real-world solutions.
//             </p>
//             <div>
//               <button type="button" className="btn btn-primary btn-lg">
//                 <a
//                   style={{ color: "aliceblue", textDecoration: "none" }}
//                   href="/datac.html"
//                 >
//                   Learn more
//                 </a>
//               </button>
//             </div>
//             <div className="form-container" onSubmit={formSubmited}>
//               <div id="form-heading" style={{ display: "none" }}>
//                 <h3>Login or Register</h3>
//               </div>
//               <form id="user-form">
//                 <h1>Welcome to Facial Recognition</h1>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" name="name" required />
//                 <br />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" required />
//                 <br />
//                 <button type="submit" id="continue-btn">
//                   Continue
//                 </button>
//               </form>
//             </div>
//             <div
//               className="action-buttons"
//               style={{
//                 display: "none",
//                 width: "50%",
//                 margin: "auto",
//                 justifyContent: "space-around",
//                 alignItems: "center",
//               }}
//             >
//               <button
//                 id="login-btn"
//                 onClick={enrollNewUser}
//                 className="btn btn-primary btn-lg"
//               >
//                 Login
//               </button>
//               <button
//                 id="register-btn"
//                 onClick={authenticateUser}
//                 className="btn btn-primary btn-lg"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>
//         <div id="faceio-modal"></div>
//       </main>
//     </div>
//   );
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

// export default AiLabs;
