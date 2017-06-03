import React, {Component} from 'react';
import {Router, Route, Redirect, IndexRoute, hashHistory,browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';

import style from './prodDetail.css'

class ProdDetail extends Component {

    constructor(props){

        super(props)
    }


    componentDidMount(){



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

                        i am here icnsdkjcvndsvcndcvhdkvhdnkjvdflvndfkv jndjkbncjk nhj
                        cdsvdnfkvdfnlvkdfnv
                        dcvndfkjvndf
                        dkvldfnlvkdf
                        dfvkdfnblv df
                        dcvknjdfjnvldvnkjdvndflvkn
                        vdnfkjvndfkjnv
                        dfnkjjvndflkvn
                        dclnvdflkv new
                    </div>


                    <h1 className={style.feature}>PRODUCT FEATURES</h1>

                    <p>· sdcknsdkvndkv jdfnkjv dfnkjv</p>
                    <p>· sdcvdfv dfvdfvdfvdfvdf</p>
                    <p>· csdvcdfvdfvdfjvlkdfnvdfjknvkdf</p>

                </div>

            </div>
        )
    }

}

module.exports = connect()(ProdDetail);