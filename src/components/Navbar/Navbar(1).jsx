import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand fs-2 fw-bold" href="#"> BeU </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"> Home </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li> 
                            <li class="nav-item">
                                <a class="nav-link" href = "#">Contact</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <li a href = "#" class = "btn px-2 btn-outline-dark bg-light"> Login </li>
                            <li a href = "#" class = "btn px-2 btn-outline-dark bg-light ms-2"> Register </li>
                            <li a href = "#" class = "btn px-2 btn-outline-dark bg-light ms-2"> Cart </li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}