import caesarCipher from "../scripts/caesarCipher";

test('Zoo  Keeper 666  %^&*(,2 to be equal to Bqq  Mggrgt 666  %^&*(', ()=> {
    expect(caesarCipher('Zoo  Keeper 666  %^&*(',2)).toBe('Bqq  Mggrgt 666  %^&*(');
});

const shiftPlain = `attack at dawn!`
const shiftCipher = `fyyfhp fy ifbs!`

test('test second sentence', ()=>{
    expect(caesarCipher(shiftPlain,5)).toBe(shiftCipher);
});

test("Example 3", () => {
    expect(caesarCipher("a1ab#bc c", 1)).toBe("b1bc#cd d");
});