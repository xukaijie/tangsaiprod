import React, {Component} from 'react';
import {Router, Route, Redirect, IndexRoute, hashHistory,browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';

export default class Roots extends Component {


    constructor(props){

        super(props);

    }

    componentDidMount(){


    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

