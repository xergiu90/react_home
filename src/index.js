import React from "react";
import ReactDOM from "react-dom";
import './custom.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Notfound from "./notfound";
import Header from "./header/header";
import Footer from "./footer/footer";
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

const routing = (
    <Router>
        <div>
            <Header />
            <hr />
            <Switch>
                <Route exact path="/" component={App} />
                <Route component={Notfound} />
            </Switch>
            <Footer />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

