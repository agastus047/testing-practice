import capitalize  from "../scripts/capitalize";

test('capitalize first character',()=> {
    expect(capitalize('hello')).toBe('Hello');
});