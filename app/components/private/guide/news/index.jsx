/**
 * Created with JetBrains WebStorm.
 User: 70469
 Date: 2017/4/18
 Time: 17:36
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import {connect} from 'react-redux';

import {Router, Route, Redirect, IndexRoute,browserHistory,hashHistory, Link} from 'react-router';


import style from './news.css';

import {news_list} from 'cmPath/config.jsx'

export default class News extends React.Component {

    constructor(props) {
        super(props);



    }

    click_news = (index,event)=>{

        event.stopPropagation();

        hashHistory.push("/news_detail/"+index);
    }

    render() {

        var thiz = this;

        return (
            <div className={style.container}>

                <p className={style.up}>News center :</p>


                {

                    news_list.map(function(item,index){

                        return (
                            <div className={style.new_div}>
                                <span className={style.left} onClick={thiz.click_news.bind(thiz,index)}>.{item.title}</span>
                                <span className={style.right}>{item.time}</span>

                            </div>

                        )

                    })
                }


            </div>
        )

    }
}

module.exports = connect()(News);