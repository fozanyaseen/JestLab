function findElement(element){
    let arr  =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let i =0
    let check = false
    while(i<20){
        if(arr[i]==element){
            check = true
        }
        i++
    }
    return check
}

module.exports = findElement