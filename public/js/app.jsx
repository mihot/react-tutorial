import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory, Router, IndexRoute, Route, Link } from 'react-router';

import Gallery from './gallery.jsx';
import Text from './text.jsx';

function App(props) {
    return (
        <div>
            <h1><Link to="/text">Lidijaaaaaaaa</Link></h1>
            {props.children}
        </div>
    )
};


const routes = {
    // base component (wrapper for the whole application).
    component: App,
    childRoutes: [
        {
            path: '/',
            component: Gallery
        },
        {
            path: '/text',
            component: Text
        }
    ]
};


ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root')
);