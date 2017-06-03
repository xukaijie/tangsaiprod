export const GETPRODUCTLIST = "GETPRODUCTLIST";

import {HOST} from 'cmPath/config.jsx';

export const getproductlist = (root,parent,currentpage,successcallback,failcallback)=> {

    let url = HOST +"product_list?currentpage="+currentpage+"&pagesize=10";

    var body = {

        root:root,
        parent:parent
    }

    var headers = new Headers();
    headers.append("content-type", "application/json;charset=UTF-8");

    return dispatch => {

        return fetch(url, {
            method: 'post',

            /*headers:headers,*/

/*
            "content-type": "application/json;charset=UTF-8",
*/

            body:JSON.stringify(body)

        })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        if (json.err == 0) {
                            dispatch({type: GETPRODUCTLIST,data:json.data});
                            if (successcallback)
                                successcallback()
                        }else if (failcallback){

                            failcallback()
                        }
                    })
                } else {
                    console.log("status", response.status);
                    if (failcallback){

                        failcallback()
                    }
                }
            })
            .catch(error => console.log(error))
    };
}


export const getProductDetail = (root,prod,successcallback,failcallback)=>{


    let url = HOST +"product_detail?root="+root+"&prod="+prod;


    return fetch(url, {
        method: 'get'

    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                    if (json.err == 0) {
                        if (successcallback)
                            successcallback()
                    }else if (failcallback){

                        failcallback()
                    }
                })
            } else {
                console.log("status", response.status);
                if (failcallback){

                    failcallback()
                }
            }
        })
        .catch(error => console.log(error))


}