function findMultiple(x,y,z){
    let sum = 0;
    let i = 0;
    while(i<z){
        if(i%x==0){
            sum+=i;    
        }
        if(i%y==0){
            sum+=i
        }
        i++;
    }
    return sum;
}

module.exports = findMultiple