import React, { Component } from 'react'

export default class arrTset extends Component {
    render(){

        let arrayLike = {
            '0': 'a',
            '1': 'b',
            '2': 'c',
            length: 3
        } 
        console.log([].slice.call(arrayLike))

        const contains = ( () => Array.prototype.includes 
        ? ( arr , value ) => arr.includes(value) 
        : ( arr , value ) => arr.some( x => x === value ) )()
        console.log(contains(['foo','bar'],'bar'))
        return (
            2
        )
    }
}