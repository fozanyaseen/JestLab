const findMultiple = require('./task2')
test('Find multiple of 3 and 5 below 10', () => {
    expect(findMultiple(3,5,10)).toBe(23);  
})