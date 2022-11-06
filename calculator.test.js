const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.sum(1, 2)).toBe(3);  
})


test('Sub 2 - 1 to equal 1', () => {
    expect(calculator.sub(2, 1)).toBe(1);  
})


test('Multiply 1*2 to equal 2', () => {
    expect(calculator.multiple(1, 2)).toBe(2);  
})


test('Divide 2/2 to equal 1', () => {
    expect(calculator.div(2, 2)).toBe(1);  
})

test('Divide 2/2 to equal 1', () => {
    expect(calculator.div(2, 0)).toBe("undefined");  
})

test('ceil of 2.3 = 2', () => {
    expect(calculator.cellingFun(2.3)).toBe(3);  
})

test('2^2 = 4', () => {
    expect(calculator.powerFun(2,2)).toBe(4);  
})

test('Round 2.67 is 3', () => {
    expect(calculator.round(2.67)).toBe(3)  
})