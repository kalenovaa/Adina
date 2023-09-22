// const button = document.getElementById('myButton');
// const displayText = document.getElementById('displayText');
// button.addEventListener('click', function () {
//     const userInput = prompt('Введите текст:', '');
//     if (userInput !== null) {
//         displayText.textContent = userInput;
//     } else {
//         alert('Ошибка: Ничего не было введено.');
//     }
// });


const mixedArray = ['frontend', 3, 34, 45, null, undefined, null, 45, 'text', 'text', true, false, 23, null, 'qwerty', '456'];
const groupedByType = {};
mixedArray.forEach((item) => {
    const type = typeof item;
    if (!groupedByType[type]) {
        groupedByType[type] = [];
    }
    groupedByType[type].push(item);
});
const arrayOfArrays = Object.values(groupedByType);
arrayOfArrays.sort((a, b) => b.length - a.length);
const filteredArrays = arrayOfArrays.map((arr) => {
    if (typeof arr[0] === 'string') {
        return arr.filter((item) => item.length > 3);
    }
    return arr;
});
console.log(filteredArrays);