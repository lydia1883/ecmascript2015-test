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

        console.log(map.has("name"));
        console.log(map.get("name"));

        console.log(map.has("title"));
        console.log(map.get("title"));

        
        // var m = new Map().set(1)
        
        let map6 = new Map([
            [1,'one'],
            [2,'two'],
            [3,'three'],
        ])

        console.log([...map6.keys()],94984841561)
        console.log([...map6.values()],94984841561)
        console.log([...map6.entries()],94984841561)

        let map7 = new Map().set(1,'a').set(2,'b').set(3,'c');

        let map8 = new Map(
            [...map7].filter(( [ k, v ] ) => k < 3 )
        );

        let map9 = new Map(
            [...map6].map(([k,v])=> [ k * 2, '_' + v])
        )

        let map10 = new Map().set(true,7).set({foo:3},['abc']);

        console.log(map8,map9,[...map10])

        let set2 = new Set().add('a').add('b').add('c');
        let [x,y,z] = set2;
        console.log(x,y,z);

        var engines = new Set(['Gekco','Trident','Webkit','Webkit']);
        for  (var e of engines ){
            console.log(e)
        }

        var es6 = new Map();
        es6.set('edition',6);
        es6.set('committrr','TC39');
        es6.set('standard','ECMA-262');
        
        for ( var [name,value] of es6 ){
            console.log(name + ':' + value)
        }


        var arr666 = [1 , [[2 , 3] , 4] , [5 , 6]];

        var flat = function* (a){
            var length = a.length;
            for(var i = 0; i<length; i++){
                var item = a[i];
                if(typeof item !== 'number'){
                    yield* flat(item);
                }else{
                    yield item;
                }
            }
        }

        for( var f of flat(arr666) ){
            console.log(f, flat(arr666))
        }

        function* fun(){
            for(var i = 0; true; i++){
                var reset = yield i;
                if(reset) {i = -1;}
            }
        } 

        var g = fun();
        console.log(g.next())
        console.log(g.next())
        console.log(g.next(true))

        function* foo (x){
            var y = 2 * (yield ( x + 1 ) );
            var z = yield ( y / 3 );
            return (x + y + z ); 
        }
        var b = foo(5);

        console.log(b.next())
        console.log(b.next(12))    //8  
        console.log(b.next(13))    //42


        return (
            <div>
                setTest
            </div>
        )
    }
}