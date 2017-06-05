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

                    <p >Company name:Ningbo Tangsai International Trade Co.,Ltd  |  Email：sales_ts@vip.126.com</p>
                    <p >Address: Room 1002.Ninghai Mansion.No.11 Renmin Road.Ninghai.Ningbo.China | Telephone:+86-0574-67051823</p>
                    <div className={style.clear}></div>
                </div>
            </div>
        )

    }
}