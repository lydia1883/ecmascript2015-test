import React, { Component } from 'react';
import * as action from './test';
import * as fun from './gen';
import * as range from './range';
import SetTest from './setTest';

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

        let arr = ['a','b','c'];
        let iter = arr[Symbol.iterator]();

        console.log(iter.next());
        console.log(iter.next());
        console.log(iter.next());
        console.log(iter.next());


        for(var value of range.rangeFun(0,3)){
            console.log(value,"ppp")
        }

        
        for(let n of fun.fibonacci()) {
            if(n > 1000) break;
            console.log(n,"fib")
        }

        return (
            <div>
                Test
                <p></p>
                <SetTest /> 
            </div>
        )
    }

}