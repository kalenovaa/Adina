var Number = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
var  i = []

for (var num of Number) {
    var strNum = num.toString();
    if (strNum.startsWith('2') || strNum.startsWith('5')) {
        i.push(num);
    }
}
console.log(i);


function argument(data) {
    return typeof data;
}
console.log(argument(false));
console.log(argument('hello world!'));
console.log(argument(42));


const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br',];
const tagNumber = {};
for (const tag of tags) {
    if (tagNumber[tag]) {
        tagNumber[tag]++;
    } else {
        tagNumber[tag] = 1;
    }
}
console.log(tagNumber);
