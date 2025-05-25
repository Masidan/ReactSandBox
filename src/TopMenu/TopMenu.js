import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function TopMenu() {
    return (

        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary  " >
            <div className="container py-0 my-0 d-flex flex-wrap" style={{ minHeight: 'var(--mainnavbar-height)' }} >
                <a className="navbar-brand d-flex align-items-center" href="./index.html"><i className="fa-brands fa-connectdevelop fa-2x me-2"></i><span>SANDbox</span></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse ms-3" id="navbarNav">
                    <ul className="navbar-nav ">

                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Forms</a>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item" href="#" data-pathname="./forms/customFormValidation.html">Custom Form Validation</a></li>
                                <li><a className="dropdown-item" href="#" data-pathname="./forms/customDinamickFormValidation.html">Custom Dinamic Form Validation</a></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Colors</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" data-pathname="./colors/darkmode.html">Dark mode</a></li>
                                <li><a className="dropdown-item" href="#" data-pathname="./colors/cards.html">Cards</a></li>
                            <li><a className="dropdown-item" href="#" data-pathname="./colors/test2.html">test2</a></li>
                            <li><a className="dropdown-item" href="#" data-pathname="./colors/test3.html">test3</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Modals</a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#" data-pathname="./modals/modal1.html">Modal1</a></li>
                            <li><a className="dropdown-item" href="#" data-pathname="./modals/modalinmodal.html">Modals in Modal</a></li>
                            <li><a className="dropdown-item" href="#" data-pathname="./modals/test3.html">test3</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">JavaScript</a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#" data-pathname="./javascript/CopyToClipboard.html">CopyToClipboard</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
            
            {/* <!-- theme switcher --> */}
            <div className="form-switch ">
                <input type="checkbox" className="themeswitch-checkbox checkbox " id="themeswitch"/>
                <label htmlFor="themeswitch" or="themeswitch" className="themeswitch-label checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <span className="themeswitch-ball"></span>
                </label>
            </div>
        </nav>

    );
}