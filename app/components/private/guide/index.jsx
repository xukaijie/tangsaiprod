import React, {Component} from 'react';
import {Router, Route, Redirect, IndexRoute, hashHistory,browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';

import Header from 'pubComp/header/header.jsx';

import Footer from 'pubComp/footer/footer.jsx';

class Guide extends Component {

    constructor(props){

        super(props)
    }


    render(){

        return (
            <div>
            <Header {...this.props}/>
                <br />

                {
                    this.props.children
                }

                <br />

                <div style={{clear:'both'}}><Footer /></div>

            </div>



        )
    }

}

module.exports = connect()(Guide);