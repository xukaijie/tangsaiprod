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
                {name:'Lanterns',child:[],icon:require('./img/Lanterns.png'),link:""},
                {name:'Spotlights',child:[],icon:require('./img/Spotllight.png'),link:""},
                {name:'Bicycle Lights',child:[],icon:require('./img/Bicycle_Lights.png'),link:""},
                {name:'Work Lights',child:[],icon:require('./img/Work_Lights.png'),link:""},
                {name:'Night Lights',child:[],icon:require('./img/Night_Lights.png'),link:""},
                {name:'Solar Lights',child:[],icon:require('./img/Solar_Lights.png'),link:""},

            ]
        }
    }

    clickOn = (root,event)=>{

        event.stopPropagation();
        hashHistory.push("/category/"+root);
    }
    render(){

        var thiz = this;
        return (
            <div className={style.container}>

                <h1 className={style.title}>Products</h1>
                <h1 className={style.title2}>Discover what product you need</h1>

                <div className={style.contentCon}>

                    {

                        this.state.content.map(function(item,index){

                            return (

                                <div className={style.contentList} onClick={thiz.clickOn.bind(thiz,item.name)}>
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