import React, { Component } from 'react';

export default class SetTest extends Component{
    constructor(props){
        super(props);
    }
    render(){

        var s = new Set();
        let arr = [1,2,3,3,5,6,44,5,6,5,4];
        arr.map( x => s.add(x) );
        let iter = s[Symbol.iterator]();

        for( var i of s ){ console.log(i)}
        console.log(iter.next());
        console.log(iter.next());
        console.log(iter.next());
        console.log(iter.next());
        console.log(iter.next());
        console.log(iter.next());
        console.log(iter.next());

        let set = new Set([{id:1},{id:2},{id:3}]);
        console.log([...set],"841681681")
        set = new Set( [...set].filter( x => (x.id % 2) == 0 ) )

        console.log([...set],"841681681")

        var map = new Map([["name","张三"],["title","author"]]);
        console.log(map.size)

        console.log(map.has("name"))
        console.log(map.get("name"))

        console.log(map.has("title"))
        console.log(map.get("title"))

        return (
            <div>
                setTest
            </div>
        )
    }
}