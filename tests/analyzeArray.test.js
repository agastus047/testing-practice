import analyzeArray from "../scripts/analyzeArray";

let obj = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };

test('eg 1', ()=> {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual(obj);
});