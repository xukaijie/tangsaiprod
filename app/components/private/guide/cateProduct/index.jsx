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

        this.state = {

            currentIndex:0,
            root:this.props.root

        }

    }

    componentWillReceiveProps(nextProps){

        if (this.props.root != nextProps.root){

            this.setState({

                root:nextProps.root,
                currentIndex:0
            })
        }

    }


    selectParent = (item,index)=>{

        if (this.props.handle){

            this.props.handle(item);
        }

        this.setState({

            currentIndex:index
        })
    }


    getCurrent = (index)=>{

        return index == this.state.currentIndex?{color:'#82ff30'}:{}
    }
    render(){

        var thiz = this;

        return (

            <div className={style.navLeft}>

                <p>{this.props.root}</p>

                <ul>
                    {

                        this.props.cateList.map(function(item,index){

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

        super(props);

        var cateList = ['All'];

        for (var i = 0;i < productList.length;i++) {


            if (productList[i].root == this.props.params.root) {

                cateList = cateList.concat(productList[i].parent);
                break;
            }
        }

        this.state = {

            root:this.props.params.root,
            cateList:cateList
        }
    }



    componentWillReceiveProps(nextProps){


        if (this.props.location.pathname.indexOf('/guide/category') != -1 && this.props.params.root != this.state.root){

            var cateList = ['All'];

            for (var i = 0;i < productList.length;i++) {


                if (productList[i].root == this.props.params.root) {

                    cateList = cateList.concat(productList[i].parent);
                    break;
                }
            }

            var _state = {

                root:this.props.params.root,
                cateList:cateList
            }

            this.setState(_state);

        }
    }

    handle = (parent)=>{

        console.log(this.props)
        var {dispatch} = this.props;

        var currentpage = this.props.productList.currentPage;

        var root = this.props.params.root.replace(" ","");
        parent = parent.replace(" ","")

        dispatch(getproductlist(root,parent,currentpage))

    }

    componentDidMount(){

        var {dispatch} = this.props;

        var currentpage = this.props.productList.currentPage;

        var root = this.props.params.root.replace(" ","");
        var parent = 'ALL'

        dispatch(getproductlist(root,parent,currentpage))
    }

    render(){

        return (
            <div className={style.container}>

               <div>
                   <img src={require('./img/banner1.png')} className={style.catImg}/>
               </div>

                <br />

                <br />

                <Nav handle={this.handle} {...this.props} {...this.state}/>

                <ProductItem {...this.props} />

            </div>

        )
    }

}

module.exports =  connect((state)=>{

    return {productList:state.productList}

})(CateProduct);