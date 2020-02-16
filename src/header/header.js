import React from 'react';
import './header.scss';

function header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offset"></div>
                <span className="menu-text d-md-none">Menu</span>
                <div className="header-section">
                    <a className="navbar-brand" href="/"><img className="logo" src={require("../assets/images/logo.png")} alt="logo"/></a>

                    <div className="collapse navbar-collapse navbar-dark right-nav-section right-nav-section"
                         id="navbarCollapse">
                        <div className="header-buttons">
                            <button className="btn btn-white col-md-24">
                                Lorem Ipsum
                            </button>
                            <button className="btn btn-primary col-md-24">
                                Lorem Ipsum
                            </button>
                            <button className="btn btn-primary col-md-24">
                                Lorem Ipsum
                            </button>
                        </div>
                        <div className="nav-links">
                            <a className="nav-item" href="/">Link 1</a>
                            <a className="nav-item" href="/">Link 2</a>
                            <a className="nav-item" href="/">Link 3</a>
                        </div>
                    </div>
                </div>

            </nav>

        </div>

);
}

export default header;
