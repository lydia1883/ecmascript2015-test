
function clone (origin) {   //克隆继承的对象
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto),origin)
}