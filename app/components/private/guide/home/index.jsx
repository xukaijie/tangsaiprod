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

        super(props);

        this.state = {

            skype:[

                {
                    href:"skype:eric12312324?chat",
                    name:"Eric"

                },
                {
                    href:"skype:live:a5ab706cb09c9f89?chat",
                    name:"Jolin"

                },

            ]
        }
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

                <div className={style.skype_div}>

                    <div className={style.skype_div_con}>
                    {

                        this.state.skype.map(function(item,index){


                            return (

                                <div className={style.skype_item}>
                                    <a href={item.href}>

                                        <img src={require('./img/skype.png')} className={style.skype_logo}/>
                                        <p>{item.name}</p>
                                    </a>
                                </div>
                            )
                        })
                    }
                    </div>

                </div>

            </div>

        )
    }

}

module.exports = Home;