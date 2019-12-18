import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home/Home";
import {ProjectPage2} from "./Home/Projects/Project2/ProjectPage2";

const Main = () => {
    return <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={ProjectPage2} />
    </Switch>
};

export default Main;
