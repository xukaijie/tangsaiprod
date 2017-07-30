import React, {Component} from 'react';
import {Router, Route, Redirect, IndexRoute,browserHistory,hashHistory, Link} from 'react-router';

import style from './header.css'

import {getproductlist} from 'actionPath/action.jsx'


export default class Header extends Component {

    constructor(props){

        super(props)

        this.state = {

            content:[

                {name:"Home",child:[],icon:require('./img/1.png'),show:false,link:"/home"},
                {name:'About Us',child:[],icon:require('./img/2.png'),link:"/aboutus"},

                {
                    name:'Products',
                    child:[
                        'Flashlights',
                        'Headlights',
                        'Lanterns',
                        'Spotlights',
                        'Bicycle Lights',
                        'Work Lights',
                        'Night Lights',
                        'Solar Lights',

                    ],
                    icon:require('./img/3.png'),link:""

                },

                {name:'News',child:[],icon:require('./img/2.png'),link:"/news"},

                {name:'Contact us',child:[],icon:require('./img/6.png'),link:""},


            ],
            current:0

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

        if (!_state.content[index].child || _state.content[index].child.length == 0&&_state.content[index].link){

            this.setState({
                current:index
            })
            hashHistory.push(_state.content[index].link);

        }

    }


    showChild = (index)=>{



        return this.state.content[index].show == true?{}:{display:'none'}


    }

    getFirstCurrent = (index)=>{

        return index == this.state.current?{borderBottom:"1px solid #000000"}:{}
    }


    navGator = (index,child,ind)=>{


        if (this.state.content[index].name == 'Products'){


            if (this.props.location.pathname.indexOf('/category') != -1 && this.props.params.root != child){

                var {dispatch} = this.props;

                var currentpage = 1;

                var root = child;

                var parent = 'ALL'

                dispatch(getproductlist(root,parent,currentpage));

                hashHistory.push('/category/'+child)

            }else{

                hashHistory.push('/category/'+child)

            }

        }


        this.setState({
            current:index
        })
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
                                    <p onMouseEnter={thiz.setChild.bind(thiz,index,true)} style={thiz.getFirstCurrent(index)}
                                       onClick={thiz.onClick.bind(thiz,index)}>{item.name}</p>

                                    {

                                        ['b'].map(function(){

                                            if (item.child && item.child.length != 0){

                                                var ret = [];

                                                ret = item.child.map(function(child,ind){


                                                    return <li key={'child'+ind} onClick={thiz.navGator.bind(thiz,index,child,ind)}>{child}</li>
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
