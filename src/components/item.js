import React, { Component } from 'react';
import * as action from './test';
import * as fun from './gen';
import * as range from './range';
import SetTest from './setTest';
import * as elementAll from './reactTest';
import ArrTest from './arrayTest'
import Clock from './Clock';

import StyleCom from './styleComponent'

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

        const element = (
            <h1 className="greeting">
                Hello World
            </h1>
        );

        let person = {
            sayName: function(){
                console.log(this.name)
            },
            get firstName() {
                return "Nicholas"
            }
        }

        console.log(person.sayName.name);
        console.log(person.firstName);

        var target = {};
        console.log(Object.assign(target,{a:1},{b:2}))

        console.log(Object.create({A:666}))
        let ccc = Object.create({A:666});
        console.log(ccc.__proto__)


        console.log(Symbol('foo'),Symbol('fii'));

        const COLOR_RED = Symbol('red');
        const COLOR_GREEN = Symbol('green');

        function getComplement(color){
            switch(color){
                case COLOR_RED:
                return COLOR_GREEN;
                case COLOR_GREEN:
                return COLOR_RED
                default:
                throw new Error('Undefined color');
            }
        }

        var shapeType = {
            triangle: Symbol()
        };

        function getArea ( shape , options ){
            var area = 0;
            switch(shape) {
                case shapeType.triangle:
                area = 0.5 * options.width * options.height;
                break;
            }
            return area;
        }

        console.log( getArea( shapeType.triangle, { width: 100, height: 100 } ) )

        console.log( getComplement(COLOR_GREEN) );

        var objSym = {};

        var foo = Symbol('foo');

        Object.defineProperty(objSym,foo,{
            value: 1
        })

        for(var i in objSym){
            console.log(i,"i")
        }

        console.log(Object.getOwnPropertySymbols(objSym))
        console.log(objSym);


        return (
            <div>
                Test
                <p></p>
                <SetTest /> 
                <Clock increment = { 1 }/>
                <ArrTest />

                <StyleCom/>
            
            </div>
        )
    }

}