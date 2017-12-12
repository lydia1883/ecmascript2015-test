export function* dataConsumer () {
    console.log('Start');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result'
}

export function* numbers () {
    yield 1;
    yield 2;
    return 3
    yield 4;
}

export function* objectEntries (obj) {
    let propKeys = Reflect.ownKeys(obj);

    for(let propKey of propKeys){
        console.log([ propKey , obj[propKey] ])
        yield [ propKey , obj[propKey] ]
    }    
}

export function* objectEntries1 (){
    let propKeys = Object.keys(this);

    for( let propKey of propKeys ){
        yield [propKey,this[propKey]]
    }
}

export function* fib(max){
    var t,
    a = 0,
    b = 1,
    n = 0;
    while ( n < max ){
        yield a;
        [a,b] = [b,a + b];
        console.log( [a,b] );
        n++;
    }   
    return;
}

