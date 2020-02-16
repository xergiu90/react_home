import React from "react";
import "./footer.scss";

function Footer() {
    var bottomLinks = [1,2,3,4,5,6];
    var linksList = bottomLinks.map(function(number, index){
        if (number===2 || number===3 || number===5 || number===6) {
            return (<div className="info col-lg-4 col-md-4 col-sm-8 col-xs-8" key={index}>
                            <span className="bullet">&#9679;</span>
                        <a href="/">Link {number}</a>
                    </div>);
        }

        return (<div className="info col-lg-4 col-md-4 col-sm-8 col-xs-8" key={index}>
                    <a href="/">Link {number}</a>
                </div>);
    });

    return (
        <div>
            <hr/>
            <div className="section-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-24 col-xs-24 news-title"><span>Subscribe to our newsletter</span></div>
                        <div className="col-lg-16 col-md-16 col-sm-18 col-xs-18 input-name">
                            <div className="input-group">
                                <input type="text" className="form-control name" placeholder="Name"/>
                                <input type="text" className="form-control" placeholder="Email address"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 button-subscribe">
                            <button className="btn btn-primary">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-info">
                <div className="container">
                    <div className="row">
                        <div className="info col-lg-14 col-md-24"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                </div>
                <div className="band"></div>
            </div>
            <div className="section-links">
                <div className="container">
                    <div className="row">
                        {linksList}
                        </div>
                    </div>
            </div>
            <div className="section-disclaimer">
                <div className="container">
                    <div className="row">
                        <div className="info col-lg-14 col-md-24"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
