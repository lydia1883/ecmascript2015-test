import React, { Component } from 'react';
import * as action from './test';
import * as fun from './gen';

var fs = require('fs'); 

export default class Item extends Component {

    render(){
        
        const { dataConsumer , numbers , objectEntries , objectEntries1 , fib } = action;
        // let genObj = dataConsumer();
        // console.log(genObj.next(),this.props)
        // console.log(genObj.next('a'))
        // console.log(genObj.next('b'))
        // let genObj = numbers();

        
        // console.log(genObj.next(),[...numbers()]);

        // let jane = { first: 'Jane' , last: 'Doe' };
        // jane[Symbol.iterator] = objectEntries1;

        // for(let [key,value] of jane){
        //     console.log( `${key}: ${value}` )
        // }
        // // for( let [key,value] of objectEntries(jane) ) {
        // //     console.log( `${key}: ${value}` )
        // // }

        // let fibFun = fib(10);
        // for(var x of fib(10)){
        //     console.log(x)
        // }
        // console.log(fibFun.next());
        // console.log(fibFun.next());
        // console.log(fibFun.next());
        // console.log(fibFun.next());
        // console.log(fibFun.next());
        // console.log(fibFun.next());


        fun.xFun();
        console.log(fun.f());
        console.log("666",fs)

        var fileName = 1;
        const callback = () => 3
        var readFileThunk = fun.Thunk(fileName);
        readFileThunk(callback);

        fun.axiosFun().then((data)=>{
            console.log(data,"data")
        }).catch((err)=>{
            console.log(err);
        })
        
        return (
            <div>
                Test
                <p></p>
            </div>
        )
    }

}