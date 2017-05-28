import React, {Component} from 'react';
import {Router, Route, Redirect, IndexRoute, hashHistory,browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';

import style from './showProduct.css';



class Home extends Component {

    constructor(props){

        super(props);

        this.state = {

            content:[

                {name:"Flashlights",icon:require('./img/flashlight.png')},
                {name:'Headlights',child:[],icon:require('./img/headlight.png'),link:""},
                {name:'Lanterns',child:[],icon:require('./img/3.png'),link:""},
                {name:'Spotlights',child:[],icon:require('./img/4.png'),link:""},
                {name:'Bicycle Lights',child:[],icon:require('./img/5.png'),link:""},
                {name:'Work Lights',child:[],icon:require('./img/6.png'),link:""},
                {name:'Night Light',child:[],icon:require('./img/6.png'),link:""},
                {name:'Solar Lights',child:[],icon:require('./img/6.png'),link:""},

            ]
        }
    }

    clickOn = (root)=>{

        hashHistory.push("/guide/category/"+root);
    }
    render(){

        var thiz = this;
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

                                    <p onClick={thiz.clickOn.bind(thiz,item.name)}>{item.name}</p>

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