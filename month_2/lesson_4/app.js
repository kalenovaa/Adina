// var htmlTag = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol’, ‘br’]
// var tagObject = {}
// for(var i = 0; < html.lenght; i++){
//     if(tagObject.hasOwnProperty(htmlTag[i])) {
//         tagObject[htmlTag[i]] += 1
//     }else {
//         tagObject[htmlTag[i]] = 1
//     }
// }
// console.log(tagObject)
// console.log(Object.keys(tagObject).sort(function ( tag1, tag2){
//     return tagObject[tag2] - tagObject[tag1]
// }))



// var getPositionElement = (element, array) => {
//     for(var i = 0; i< array.length; i ++){
//         if(array[i] === element){
//             return console.log(i)
//             }
//         }
//         return console.log('404')
// }
// getPositionElement(2, [2, 3, 4, 5])
//
// var seyHallo = () => console.log('hi')
//
// var seyHello = (text) => {
//
// }
//
//
// //Hof - hide ordered func

// var button = document.querySelector('button')
// function buttonClick(){
//     return console.log('click!')
// }
//
// button.addEventListener('click', buttonClick)

// var sumArray = (array) =>{
//     for(var i =0; < array.length; i++){
//         sum += array[i]
//     }
// }
// sumArray([1,2,3,4,5,])


console.dir(document)
console.dir(document.body)
// console.dir(document.body.style.backgroundColor = )
var text = document.getElementsByClassName('text')
text[1].style.color = 'darkred'
text[0].innerHTML = 'frontend'