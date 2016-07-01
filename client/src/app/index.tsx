/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import {render} from 'react-dom';
import { Hello } from './components/Hello';
import { App } from './components/App';
import { About } from './components/About';
import { Home } from './components/Home';
import {Router,Route,Link,IndexRoute,Redirect,hashHistory} from 'react-router';

render(
    (<Router history={hashHistory}>
        <Route path="/"  component={App}>
            <IndexRoute component={Home}/>
            <Route path="hello" component={Hello}/>
            <Route path="about" component={About}/>
        </Route>
    </Router>),
    document.getElementById("container")
);