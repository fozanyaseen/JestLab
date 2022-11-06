function sum (a,b){
    return a+b;
}

function div (a,b){
    if ( b ==0) {
        return "undefined"
    }
    else
    return a/b;
}

function multiple (a,b){
    return a*b;
}

function sub(a,b){
    return a-b;
}

function powerFun(x,y){
    return Math.pow(x,y)
}

function round(x){
    return Math.round(x)
}

function cellingFun(x){
    return Math.ceil(x)
}

module.exports.sum = sum;
module.exports.sub = sub
module.exports.div = div
module.exports.multiple = multiple
module.exports.powerFun = powerFun
module.exports.cellingFun =cellingFun
module.exports.round = round