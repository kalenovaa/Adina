// DOM
// var button = document.getElementById('btn')
// var btn = document.getElementsByClassName('button')
// //
// var divClass = document.querySelector('.block')
// var divAll = document.querySelectorAll('.block')
// var divID = document.querySelector('#box')
// //
// var button2 = document.querySelector('.clickBtn')
// button2.addEventListener('click', () => console.log('click'))
//
// //
// var wrapper = document.querySelector('.wrapper')
// var newDiv = document.createElement('div')
// newDiv.setAttribute('class', 'block')
// wrapper.append(newDiv)
//
// document.querySelector('.addDiv').onclick = () =>{
//     var newDiv = document.createElement('div')
//     newDiv.setAttribute('class', 'block')
//     wrapper.append(newDiv)
//}
//metodi macciva
//filter()
var fruits = ['apple', 'cherry', 'pineapple', 'banana', 'orenge']
var filterFruits = fruits.filter((i)=> i.length > 6 )
console.log(filterFruits)

var users = [
    {name:'adina', age: 30},
    {name:'John',  age: 40},
    {name:'linda', age: 17},
    {name:'aibek', age: 12},
    {name:'aidana', age: 34},
    {name:'diana', age: 25},
    {name:'katerina', age: 21},
    {name:'ali', age: 50},
    {name:'mihail', age: 70},
    {name:'ermec', age: 72},
]
var result = users.filter(users => users.age <= 18)
console.log(result)
var result2 = users.filter(users=> users.name.toLowerCase().includes('a'))
console.log(result2)


var numbers = [2, 3, 4, 5, 66, 77, 65,]
var newNumbers = numbers.map((num, index)=> num *index)
console.log(newNumbers)


var soms = [230000, 4556000, 78739455, 100000000]
var dollar = soms.map(som => som / 88)
console.log(dollar);

var fixDollar = dollar.map(i => i.toFixed(2))
console.log(fixDollar)


var sored = fixDollar.sort((n1,n2)=> n1 - n2)
console.log(sored)
//forEach
var number = [2, 34, 45, 56, 67]
numbers.forEach((num, index, )=> console.log(num * index))

var num = [23, 23, 44, 56, 56, 98, 100 ]
var numSet = new Set(num)
var array  = Array.from((numSet))
console.log(numSet)


//ES6+
var hello = 'hello' //
console.log(hello)

let hello2 = 'hello'
console.log(hello2)
const arrayConst = []
arrayConst.push(2)
console.log(arrayConst)

// const fruits = [1, 'we' , 5, 'ee']
//
// for(let i = 0; i <fruits.length; i++){
//     console.log(fruits[i])
// }






