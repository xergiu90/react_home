import React from 'react';
import './custom.scss';

function App() {
  return (
      <div className="main-container">
          <div className="section-carousel">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-15 col-md-15">
                          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                              <ol className="carousel-indicators">
                                  <li data-target="#carouselExampleIndicators" data-slide-to="0"
                                      className="active"></li>
                                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                              </ol>
                              <div className="carousel-inner">
                                  <div className="carousel-item active">
                                      <img className="d-block w-100" src={require("./assets/images/carousel-image.svg")}
                                           alt="First slide"/>
                                  </div>
                                  <div className="carousel-item">
                                      <img className="d-block w-100" src={require("./assets/images/carousel-image.svg")}
                                           alt="Second slide"/>
                                  </div>
                                  <div className="carousel-item">
                                      <img className="d-block w-100" src={require("./assets/images/carousel-image.svg")}
                                           alt="Third slide"/>
                                  </div>
                              </div>
                              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                 data-slide="prev">
                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span className="sr-only">Previous</span>
                              </a>
                              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                 data-slide="next">
                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span className="sr-only">Next</span>
                              </a>
                          </div>
                      </div>
                      <div className="col-lg-9 col-md-9 right-section-carousel">
                          <div className="inner-right">
                              <div className="card">
                                  <div className="card-title">
                                      Lorem Ipsum Lorem
                                  </div>
                                  <div className="card-body">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                  </div>
                              </div>

                              <div className="card mt-auto">
                                  <div className="card-title">
                                      Lorem Ipsum Lorem
                                  </div>
                                  <div className="card-body">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="section-cards">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 col-md-12">
                          <div className="card mt-auto">
                              <div className="card-title">
                                  Lorem Ipsum Lorem
                              </div>
                              <div className="card-body">
                                  <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                                  <button className="btn btn-primary col-lg-14">
                                      Lorem Ipsum
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                          <div className="card">
                              <div className="card-title">
                                  Lorem Ipsum Lorem

                              </div>
                              <div className="card-body">
                                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>

                                  <button className="btn btn-primary col-lg-14">
                                      Lorem Ipsum
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="section-multiple-cards">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-24 col-md-24 section-title">Lorem Ipsum lorem ipsum</div>
                  </div>
                  <div className="row">
                      <div className="col-lg-6 col-md-6">
                          <div className="card mt-auto">
                              <div className="card-title">
                                  Lorem Ipsum Example Text
                              </div>
                              <div className="card-body">
                                  <img className=" w-100" src={require("./assets/images/carousel-image.svg")} alt="First pic"/>
                                      <button className="btn btn-primary col-lg-24">
                                          Lorem Ipsum <span> > </span>
                                      </button>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                          <div className="card">
                              <div className="card-title">
                                  Lorem Ipsum Example Text

                              </div>
                              <div className="card-body">
                                  <img className=" w-100" src={require("./assets/images/carousel-image.svg")} alt="Second pic"/>

                                      <button className="btn btn-primary col-lg-24">
                                          Lorem Ipsum <span> > </span>
                                      </button>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                          <div className="card">
                              <div className="card-title">
                                  Lorem Ipsum Example Text

                              </div>
                              <div className="card-body">
                                  <img className=" w-100" src={require("./assets/images/carousel-image.svg")} alt="Third pic"/>

                                      <button className="btn btn-primary col-lg-24">
                                          Lorem Ipsum <span> > </span>
                                      </button>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                          <div className="card">
                              <div className="card-title">
                                  Lorem Ipsum Example Text

                              </div>
                              <div className="card-body">
                                  <img className=" w-100" src={require("./assets/images/carousel-image.svg")} alt="Fourth pic"/>

                                      <button className="btn btn-primary col-lg-24">
                                          Lorem Ipsum <span> > </span>
                                      </button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-24 col-md-24 section-button">
                          <button className="btn btn-warning col-lg-5 col-md-5">
                              Lorem Ipsum <span> > </span>
                          </button>
                      </div>

                  </div>
              </div>

          </div>
      </div>

);
}

export default App;
