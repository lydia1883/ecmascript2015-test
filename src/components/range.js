class RangeIterator {
    constructor( start , stop ){
        this.value = start;
        this.stop = stop;
    }

    [Symbol.iterator] () {
        return this;
    }

    next() {
        var value = this.value;
        console.log(value,'1')
        if ( value < this.stop ){
            this.value++;
            console.log(value,'2')
            return { done: false , value }
        }else{
            return { done: true , value: undefined };
        }
    }
}

export const rangeFun = (start,stop) => {
    let iter = new RangeIterator(start,stop)[Symbol.iterator] ();
    console.log("iter",iter.next())
    console.log("iter",iter.next())
    console.log("iter",iter.next())
    console.log("iter",iter.next())
    return new RangeIterator(start,stop)
}
