const number = document.getElementById('counter');
const put = document.getElementById('incrementButton');
const flexible = document.getElementById('decrementButton');

let count = 0;

put.onclick = () => {
    count++;
    number.textContent = count;
};

flexible.onclick = () => {
    count--;
    number.textContent = count;
};




function applyFunctionToArray(arr, mathFunction) {
    const result = [];
    for (const element of arr) {
        const transformedElement = mathFunction(element);
        result.push(transformedElement);
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];

function multiplyByTwo(x) {
    return x * 2;
}
const transformedArray = applyFunctionToArray(numbers, multiplyByTwo);
console.log(transformedArray);