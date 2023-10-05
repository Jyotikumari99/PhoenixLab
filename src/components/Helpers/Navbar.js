import React from "react";
import Logo from "../images/logo.png";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import "../../styles/Navbar.css";
const Navbar = () => {
    return (
        <div className="Navbar ">
            <nav className="navbar  navbar-expand-lg fixed-top " style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
                <div className="w-100 d-flex">
                    <div className="w-50 d-flex align-items-center justify-content-start">
                        <img src={Logo} className="Logo d-none d-sm-block" alt="Logo of Company" />
                        <a className="navbar-brand text-white ms-0 ms-sm-4 fs-4" href="/">
                            Phoenix Labs
                        </a>
                    </div>
                    <div className="w-50 d-flex  align-items-center justify-content-end">
                        <button
                            className="navbar-toggler "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon text-white">
                                <ViewHeadlineIcon />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex justify-content-around align-items-center w-100">
                        <li className="nav-item px-5 py-2 p-md-0 border border-top-0 border-left-0 border-right-0">
                            <a className=" text-white fs-5" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item px-5 py-2 p-md-0 border border-top-0 border-left-0 border-right-0">
                            <a className="text-white fs-5" href="/vision">
                                Vision
                            </a>
                        </li>
                        <div className="dropdown px-5 py-2 p-md-0 border border-top-0 border-left-0 border-right-0">
                            <a
                                className=" dropdown-toggle text-white fs-5"
                                href="/"
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Divisions
                            </a>
                            <ul className="dropdown-menu mt-md-4" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <a className="dropdown-item text-dark" href="/art">
                                        Artificial Intelligence Center
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item text-dark" href="/cryptoTechnologyCenter">
                                        Crypto Technology Center
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item text-dark" href="/web">
                                        Web/Mobile Application Suite
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <li className="nav-item px-5 py-2 p-md-0 border border-top-0 border-left-0 border-right-0">
                            <a className="text-white fs-5" href="/projects">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
