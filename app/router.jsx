import React, {Component} from 'react';
import {Router, Route, Redirect, IndexRoute, hashHistory,browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';



import Roots from './roots.jsx';

const lazyLoadPage = pageName => (location, cb) => {
    let bundle = require('bundle-loader?lazy!./components/private/' + pageName + '/index.jsx')
    bundle(component => cb(null, component))
}



const RouteConfig = (
    <Router history={browserHistory}>
        <Route path="/" component={Roots} >

            <Route path='guide' getComponent={lazyLoadPage('guide')} >
                <IndexRoute getComponent={lazyLoadPage('guide/home')}/>
                <Route path="home" getComponent={lazyLoadPage('guide/home')} />

            </Route>
        </Route>

    </Router>
);


export default RouteConfig;