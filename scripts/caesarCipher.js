function caesarCipher(s,n) {

    let str='';

    for(let char of s) {
        if(/^[a-zA-Z]$/.test(char)) {
            let charCode = char.charCodeAt(0);
            let newCode = charCode+n;
            if(charCode >= 97 && newCode > 122) {
                newCode = newCode - 122 + 96;
            }
            if(charCode <= 90 && newCode > 90) {
                newCode = newCode - 90 + 64;
            }
            str+=String.fromCharCode(newCode);
        }
        else {
            str+=char;
        }
    }

    return str;
}

export default caesarCipher;