import React, {Component} from 'react';
import {Router, Route, Redirect, IndexRoute, hashHistory,browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';

import style from './home.css';
import Swiper from 'pubComp/banner/Slide/index.jsx';

import banner1 from './img/banner1.png';
import banner2 from './img/banner2.png';
import banner3 from './img/banner3.png';

import ShowProduct from './showProduct/showProduct.jsx'


class Home extends Component {

    constructor(props){

        super(props)
    }


    render(){

        return (
            <div className={style.container}>

                <Swiper opts={[{
                    link:"",
                    src: banner1
                }]}  baseWidth ={1200} baseHeight = {400} />

                <br />

                <br />

                <ShowProduct/>

            </div>

        )
    }

}

module.exports = Home;