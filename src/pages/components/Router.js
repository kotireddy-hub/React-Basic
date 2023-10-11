import React from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import About from "./About";
import NavigationCompoent from "./Navigation";
import Projects from "./Projects";
import Resume from "./Resume";

const RouterCompoent = () => {
    return <BrowserRouter>
            <NavigationCompoent />
        <Switch>
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
        </Switch>
    </BrowserRouter>
};

export default RouterCompoent;