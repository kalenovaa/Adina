// console.log("Hello world");
//переманная
// var name= 'Adina';
// //camelcase
// var nameAndSurname = 'Adina Kalenova';
// console.log(name + ' ' + nameAndSurname)
// console.log(name,nameAndSurname);
//
// //Типы данных
// //1)string
// var name2 = 'Aidana'
// // console.log(typeof name2)
// // console.log(name2.toUpperCase())
// // console.log(name2.toLowerCase())
// // console.log(name2.repeat(10000))
//
// //number2
// var number = 56
// var number2 = 10
// console.log(number.toString())
// console.log(number % number2)
// console.log("средний возрвст группы 30_03 ->", (17 + 17 + 18 + 14 + 17 + 21 + 20 + 15 + 17 + 21 + 25 + 20 ) /12)
//
// //3)boolean
// //операеторы сравнения <,>,<=,
// var num1 = 78
// var num2 ="78"
// console.log(num1 !== num2)
//
//
// //условные конструкции if, else , if, else
// var login = prompt("enter login")
// var password = prompt("enter password")
// //
// var login2 = prompt("enter logind")
// var password2 = prompt("enter password")
// if(login === login2 && password === password2){
//     alert("ok")
// }else{
//     console.error("error")
// }

//&&, || - логический оператор

var userName = prompt("name")
var userSurname = prompt("surname")
var userAge = prompt("age")

if(userAge <= 18){
    console.log("привет, userName")
}else if(userAge >= 19 && userAge <=60){
    console.log('Здраствуйте', userSurname + " " + userName)
}else if(userAge <61 && userAge >= 90) {
    console.log("добро пожаловать", userName + ' ' + userName)
}else{
    console.log("введите конкретный возраст от 1 до 90")
}

