function reverseString(s) {
    let arr = s.split("");
    arr = arr.reverse();
    let str = arr.join("");
    return str;

}

export default reverseString;