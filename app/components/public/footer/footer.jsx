/**
 * Created with JetBrains WebStorm.
 User: 70469
 Date: 2017/4/18
 Time: 17:36
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import style from './footer.css';

export default class footer extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillReceiveProps() {


    }

    componentDidUpdate() {


    }

    componentDidMount() {


    }


    render() {
        return (
            <div className={style.part9}>
                <div className="inner">
                    <p className={style.p1}>Copyright©2016 www.xxx.com 浙ICP备16023665号-3</p>
                    <p className={style.p2}>宁波唐赛国际贸易有限公司  |  联系地址：浙江省宁波市宁海县  |  联系电话：0571-88647556</p>
                    <div className={style.clear}></div>
                </div>
            </div>
        )

    }
}