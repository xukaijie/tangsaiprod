/**
 * Created with JetBrains WebStorm.
 User: 70469
 Date: 2017/4/18
 Time: 17:36
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import {connect} from 'react-redux';

import {news_list} from 'cmPath/config.jsx'


import style from './news_detail.css';

export default class News_detail extends React.Component {

    constructor(props) {
        super(props);


    }



    render() {

        var thiz = this;

        var index = this.props.params.index;
        var news = news_list[index];

        return (
            <div className={style.container}>

                <div className={style.title}>
                    <h1>{news.title}</h1>
                    <span>Date:{news.time}</span>
                </div>


                <div className={style.content}>
                {

                    news.content.map(function(item,index){

                        return <p>{item}</p>
                    })
                }

                </div>

            </div>
        )

    }
}

module.exports = connect()(News_detail);