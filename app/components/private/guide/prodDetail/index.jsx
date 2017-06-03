import React, {Component} from 'react';
import {Router, Route, Redirect, IndexRoute, hashHistory,browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';

import style from './prodDetail.css'

import {getProductDetail} from 'actionPath/action.jsx'

class ProdDetail extends Component {

    constructor(props){

        super(props);

        this.state={

            descp:"",
            feature:[]
        }
    }


    componentDidMount(){

        var root = this.props.params.root;

        var name = this.props.params.product;
        getProductDetail(root,name,(data)=>{


            this.setState({

                descp:data.data.descp,
                feature:data.data.feature
            })
        })


    }

    render(){

        return (
            <div className={style.container}>

                <div className={style.sideleft}>



                </div>


                <div className={style.sideright}>

                    <h1 className={style.title}>{this.props.params.product}</h1>

                    <p>be the first to review the product:</p>

                    <div className={style.description}>

                        {this.state.descp}
                    </div>


                    <h1 className={style.feature}>PRODUCT FEATURES</h1>

                    {

                        this.state.feature.map(function(ft,index){

                            return <p>· {ft}</p>
                        })
                    }


                </div>

            </div>
        )
    }

}

module.exports = connect()(ProdDetail);