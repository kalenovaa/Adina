function isPalindrome(str) {
    str = str.replace(/\s/g, '').toLowerCase();
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('.'))
console.log(isPalindrome('lala'))
console.log(isPalindrome('bla bla '))