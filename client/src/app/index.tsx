/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import {Router,hashHistory} from 'react-router';

render(
    (<Router history={hashHistory} routes={routes}/>),
    document.getElementById("container")
);