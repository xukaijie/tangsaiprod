import React, {Component} from 'react';
import {Router, Route, Redirect, IndexRoute, hashHistory,browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';

import style from './showProduct.css';



class Home extends Component {

    constructor(props){

        super(props);

        this.state = {

            content:[

                {name:"FLASHLIGHTS",icon:require('./img/flashlight.png')},
                {name:'HEADLIGHTS',child:[],icon:require('./img/headlight.png'),link:""},
                {name:'LANTERNS',child:[],icon:require('./img/3.png'),link:""},
                {name:'WORK LIGHTS',child:[],icon:require('./img/4.png'),link:""},
                {name:'MOTION',child:[],icon:require('./img/5.png'),link:""},
                {name:'SPOTLIGHTS',child:[],icon:require('./img/6.png'),link:""},
                {name:'SOLAR LIGHTS',child:[],icon:require('./img/6.png'),link:""},
                {name:'NIGHT LIGHTS',child:[],icon:require('./img/6.png'),link:""},

            ]
        }
    }


    render(){

        return (
            <div className={style.container}>

                <h1>Shop By Product</h1>
                <h1 className={style.title2}>Discover what product you need</h1>

                <div className={style.contentCon}>

                    {

                        this.state.content.map(function(item,index){

                            return (

                                <div className={style.contentList}>
                                    <img src={item.icon} />

                                    <p>{item.name}</p>

                                </div>
                            )
                        })
                    }

                </div>


            </div>

        )
    }

}

module.exports = Home;