/**
 * Created with JetBrains WebStorm.
 User: 70469
 Date: 2017/4/18
 Time: 17:36
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import {connect} from 'react-redux';



import style from './aboutus.css';

export default class AboutUs extends React.Component {

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
            <div className={style.container}>

                <p>Introductions :</p>
                <br />


                <p>TS Lighting is a responsible supplier and exporter with over 5 years of experience in different innovation LED lights , such as flashlight ,headlamp ,camping lantern ,
                    spotlight , bicycle ,work light etc …We recognized by customers as a creative, detail-oriented and value –driven partner.
                    We listening carefully to customers and following the latest trends in the market . .</p><br/>

                <p>TS Lighting continues to research , design, develop and produce for new ideas that will make the journey an amazing part of people’s life</p><br />

                <p>
                    We are dedicated to serving our business partners , We treat our associates our colleagues and all those we serve in business with honesty ,integrity ,consideration and respect .

                    Believe us , TS Lighting will be your best partner in field of LED Lights .
                </p>

            </div>
        )

    }
}

module.exports = connect()(AboutUs);