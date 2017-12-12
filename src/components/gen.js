import fetch from 'node-fetch';
import axios from 'axios';

function* gen(){
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
    console.log(result.bio);
}

var g = gen();
var resultValue;
var result = g.next();
console.log(result,"result");
export const xFun = () => {  
    result.value.then(function(data){
        return data.json();
    }).then(function(data){
        resultValue = g.next(data)
    })
}


var x = 1;
var thunk = (params) => x + 5
export var f = () => thunk(x) * 2;


const ccc = (x,y) => console.log(x,y(),"66666666")
export const Thunk = (fileName) => {
    return function (callback) {
        return ccc(fileName,callback);
    }
}


export const axiosFun = async () =>{
    try{
        const response = await axios.get('https://api.github.com/users/github');
        const data = response.data;
        return data;
    }catch( error ){
        console.log(error)
    }
} 

