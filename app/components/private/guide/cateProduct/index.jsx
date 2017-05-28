import React, {Component} from 'react';
import {Router, Route, Redirect, IndexRoute, hashHistory,browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';

import style from './cateProduct.css';
import Swiper from 'pubComp/banner/Slide/index.jsx';

import banner1 from './img/banner1.png';
import banner2 from './img/banner2.png';
import banner3 from './img/banner3.png';

import {productList} from 'cmPath/config.jsx';

import {getproductlist} from 'actionPath/action.jsx'

class Nav extends Component {


    constructor(props){

        super(props);


        var cateList = [];

        console.log(this.props)

        for (var i = 0;i < productList.length;i++){

            console.log(this.props.params.root);
            console.log(productList[i].root)
            if (productList[i].root == this.props.params.root){

                cateList = productList[i].parent;
                break;
            }
        }
        this.state = {

            cateList:cateList,
            curentIndex:-1
        }

        console.log(this.state)

    }


    selectParent = (item,index)=>{

        if (this.props.handle){

            this.props.handle(item);
        }

        this.setState({

            curentIndex:index
        })
    }


    getCurrent = (index)=>{

        return index == this.state.curentIndex?{color:'#82ff30'}:{}
    }
    render(){

        var thiz = this;

        return (

            <div className={style.navLeft}>

                <p>{this.props.params.root}</p>

                <ul>
                    {

                        this.state.cateList.map(function(item,index){

                            return <li key={'item'+index} style={thiz.getCurrent(index)}
                                       onClick={thiz.selectParent.bind(thiz,item,index)}>{item}</li>
                        })
                    }

                </ul>


            </div>
        )

    }
}


class ProductItem extends Component{
    constructor(props){

        super(props);


    }


    render(){

        return (


            <div className={style.prodRight}>

                {
                    this.props.productList.list.map(function(list,index){


                        return <div className={style.prodcon}>

                            <img src={list.img} className={style.imgcon}/>

                            <p>{list.name}</p>
                        </div>
                    })


                }


            </div>
        )
    }
}


class CateProduct extends Component {

    constructor(props){

        super(props)
    }



    handle = (parent)=>{

        console.log(this.props)
        var {dispatch} = this.props;

        var currentpage = this.props.productList.currentPage;

        var root = this.props.params.root.replace(" ","");
        parent = parent.replace(" ","")

        dispatch(getproductlist(root,parent,currentpage))

    }

    render(){

        return (
            <div className={style.container}>

                <Swiper opts={[{
                    link:"",
                    src: banner1
                },{
                    link:"",
                    src: banner2
                },{

                    link:"",
                    src: banner3

                }]}  baseWidth ={1200} baseHeight = {400} />

                <br />

                <br />

                <Nav handle={this.handle} {...this.props}/>

                <ProductItem {...this.props} />

            </div>

        )
    }

}

module.exports =  connect((state)=>{

    return {productList:state.productList}

})(CateProduct);