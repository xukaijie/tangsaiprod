import React, {Component} from 'react';
import {Router, Route, Redirect, IndexRoute,browserHistory,hashHistory, Link} from 'react-router';

import style from './header.css'

export default class Header extends Component {

    constructor(props){

        super(props)

        this.state = {

            content:[

                {name:"Home",child:[],icon:require('./img/1.png'),show:false,link:"/guide/home"},
                {name:'Aboutus',child:[],icon:require('./img/2.png'),link:""},
                {name:'Products',child:[],icon:require('./img/3.png'),link:""},
                {name:'Service',child:[],icon:require('./img/4.png'),link:""},
                {name:'Contact us',child:[],icon:require('./img/6.png'),link:""},


            ]

        }
    }


    setChild = (index,type)=>{


        var _state = {...this.state};

        if (_state.content[index].child && _state.content[index].child.length != 0){

            _state.content[index].show = type;
            this.setState(_state);
        }
    }


    onClick = (index)=>{

        var _state = {...this.state};

        if (!_state.content[index].child || _state.content[index].child.length == 0){

            hashHistory.push(_state.content[index].link)
        }

    }


    showChild = (index)=>{


        return this.state.content[index].show == true?{}:{display:'none'}

    }
    render(){

        var thiz = this;

        return (
            <div className={style.container}>

                <div className={style.logoCon}>
                    <img src={require('./img/logo.png')} className={style.logo}/>
                </div>

                <div className={style.navCon}>

                    {

                        this.state.content.map(function(item,index){

                            return (

                                <div className={style.navItem} onMouseLeave={thiz.setChild.bind(thiz,index,false)} key={'item'+index}>

                                    {/*<img src={item.icon}/>*/}
                                    <p onMouseEnter={thiz.setChild.bind(thiz,index,true)} onClick={thiz.onClick.bind(thiz,index)}
                                    >{item.name}</p>

                                    {

                                        ['b'].map(function(){

                                            if (item.child && item.child.length != 0){

                                                var ret = [];

                                                ret = item.child.map(function(child,ind){


                                                    return <li key={'child'+ind}>{child}</li>
                                                })

                                                return <ul style={thiz.showChild(index)} className={style.childCon}>{ret}</ul>
                                            }
                                        })
                                    }
                                </div>
                            )

                        })
                    }


                </div>

            </div>

        )
    }

}
