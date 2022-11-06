const findElement = require('./task5')

test(' 5 in array', () => {
    expect(findElement(5)).toBe(true);  
})

test(' 21 in array', () => {
    expect(findElement(22)).toBe(false);  
})