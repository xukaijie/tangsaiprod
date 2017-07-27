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
            feature:[],
            special:[],
            img:"",
            img_bak:"",
            sub_img:[]
        }
    }


    componentDidMount(){

        var root = this.props.location.query.root;

        var name = this.props.location.query.name;

        getProductDetail(root,name,(data)=>{


            this.setState({

                descp:data.data.descp,
                feature:data.data.feature || [],
                img:data.data.img,
                img_bak:data.data.img,
                special:data.data.special || [],
                sub_img:data.data.sub_img_list
            })
        })


    }

    setSubImg(src){

        this.setState({
            img:src

        })
    }


    leaveImg(){

        this.setState({
            img:this.state.img_bak

        })
    }

    render(){

        var thiz = this;
        return (
            <div className={style.container}>

                <div className={style.sideleft}>

                    <img src={this.state.img} className={style.imgcl}/>

                    <div>

                        {
                            this.state.sub_img.map(function(item,index){

                                return <img src = {item} className={style.sub_img} onMouseLeave={thiz.leaveImg.bind(thiz)}
                                            onMouseEnter={thiz.setSubImg.bind(thiz,item)}/>
                            })

                        }
                    </div>

                </div>


                <div className={style.sideright}>

                    <h1 className={style.title}>{this.props.params.product}</h1>


                    <div className={style.description}>

                        {this.state.descp}
                    </div>


                    <h1 className={style.feature}>PRODUCT FEATURES</h1>

                    {

                        this.state.feature.map(function(ft,index){

                            return <p>· {ft}</p>
                        })
                    }

                    <h1 className={style.feature}>Specifications</h1>

                    {

                        this.state.special.map(function(ft,index){

                            return <p>· {ft}</p>
                        })
                    }


                </div>

            </div>
        )
    }

}

module.exports = connect()(ProdDetail);