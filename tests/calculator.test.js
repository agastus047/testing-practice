import calculator from "../scripts/calculator";

test('1+2=3', ()=> {
    expect(calculator.add(1,2)).toBe(3);
});

test('1-1=0', ()=> {
    expect(calculator.subtract(1,1)).toBe(0);
});

test('1/0=Infinity', ()=> {
    expect(calculator.divide(1,0)).toBe(Infinity);
});

test('2*3=6', ()=> {
    expect(calculator.multiply(2,3)).toBe(6);
});