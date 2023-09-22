// var day  = Number (prompt('Введите день рождения'))
// var month = prompt('Введите месяц рождения').toLowerCase()
//
// if(day >= 21 && day <= 31 && month === 1 || day <= 19 && month === 4) {
//     console.log('ты овен')
// } else if(day >= 20 && day <= 30 && month === 4 || day <= 20 && month === 5) {
//     console.log('ты телец')
// } else if(day >= 21 && day <= 31 && month === 5 || day <= 21 && month === 6) {
//     console.log('ты близнецы')
// } else if(day >= 22 && day <= 30 && month === 6 || day <= 22 && month === 7) {
//     console.log('ты рак')
// } else if(day >= 23 && day <= 31 && month === 7 || day <= 22 && month === 8) {
//     console.log('ты лев')
// } else if(day >= 23 && day <= 31 && month === 8 || day <= 22 && month === 9) {
//     console.log('ты дева')
// } else if(day >= 23 && day <= 31 && month === 9 || day <= 23 && month === 10) {
//     console.log('ты весы')
// } else if(day >= 24 && day <= 31 && month === 10 || day <= 22 && month === 11) {
//     console.log('ты скорпион')
// } else if(day >= 23 && day <= 30 && month === 11 || day <= 21 && month === 12) {
//     console.log('ты стрелец')
// } else if(day >= 22 && day <= 31 && month === 12 || day <= 20 && month === 1) {
//     console.log('ты козерог')
// } else if(day >= 21 && day <= 31 && month === 1 || day <= 18 && month === 2) {
//     console.log('ты водолей')
// }else if(day >= 19 && day <= 29 && month === 2 || day <= 20 && month === 3){
//     console.log('ты рыбы')
// }
// else {
//     console.log('ведите конкретное число ')
// }
//
// const month = Number(prompt("Введите месяц вашего рождения (число от 1 до 12):"));
// const day = Number(prompt("Введите день вашего рождения (число от 1 до 31):"));
//
// if (month === 3 && day >= 21 || month === 4 && day <= 19) {
//     alert("Овен");
// } else if (month === 4 && day >= 20 || month === 5 && day <= 20) {
//     alert("Телец");
// } else if (month === 5 && day >= 21 || month === 6 && day <= 20) {
//     alert("Близнецы");
// } else if (month === 6 && day >= 21 || month === 7 && day <= 22) {
//     alert("Рак");
// } else if (month === 7 && day >= 23 || month === 8 && day <= 22) {
//     alert("Лев");
// } else if (month === 8 && day >= 23 || month === 9 && day <= 22) {
//     alert("Дева");
// } else if (month === 9 && day >= 23 || month === 10 && day <= 22) {
//     alert("Весы");
// } else if (month === 10 && day >= 23 || month === 11 && day <= 21) {
//     alert("Скорпион");
// } else if (month === 11 && day >= 22 || month === 12 && day <= 21) {
//     alert("Стрелец");
// } else if (month === 12 && day >= 22 || month === 1 && day <= 19) {
//     alert("Козерог");
// } else if (month === 1 && day >= 20 || month === 2 && day <= 18) {
//     alert("Водолей");
// } else if (month === 2 && day >= 20 || month === 3 && day <= 20) {
//     alert("Рыбы");
// } else {
//     alert("Ошибка");
// }

// var day = Number(prompt('день рождения'))
// var month = Number(prompt('месяц рождения'))
//
// if (day >= 21 && day <= 18 && month === 1 || month === 4 && day >= 1 && day <= 19){
//     console.log("ты oвен")
// } else if (day >= 20 && day <= 30 && month === 4 || month === 5 && day >= 1 && day <= 20){
//     console.log("ты телец")
// } else if (day >= 21 && day <= 31 && month === 5 || month === 6 && day >= 1 && day <= 21){
//     console.log("ты близнецы")
// } else if (day >= 22 && day <= 30 && month === 6 || month === 7 && day >= 1 && day <= 22){
//     console.log("ты рак")
// } else if (day >= 23 && day <= 31 && month === 7 || month === 8 && day >= 1 && day <= 22){
//     console.log("ты лев")
// } else if (day >= 23 && day <= 31 && month === 8 || month === 9 && day >= 1 && day <= 22){
//     console.log("ты дева")
// } else if (day >= 23 && day <= 30 && month === 9 || month === 10 && day >= 1 && day <= 23){
//     console.log("беч ты весы")
// } else if (day >= 24 && day <= 31 && month === 10 || month === 11 && day >= 1 && day <= 22){
//     console.log("беч ты скорпион")
// } else if (day >= 23 && day <= 30 && month === 11 || month === 12 && day >= 1 && day <= 21){
//     console.log("беч ты стрелец")
// } else if (day >= 22 && day <= 31 && month === 12 || month === 1 && day >= 1 && day<= 20){
//     console.log("беч ты козерог")
// } else if (day >= 21 && day <= 31 && month === 1 || month === 2 && day >= 1 && day <= 18){
//     console.log("беч ты водолей")
// } else if (day >= 19 && day <= 29 && month === 2 || month === 3 && day >= 1 && day <= 20){
//     console.log("беч ты рыбы")
// } else{
//     console.log('попробуй еще раз...')
// }


let day = Number(prompt('день рождения'))
let month = Number(prompt('месяц рождения'))

if (day >= 21 && day <= 18 && month === 1 || month === 4 && day >= 1 && day <= 19){
    console.log("ты oвен")
} else if (day >= 20 && day <= 30 && month === 4 || month === 5 && day >= 1 && day <= 20){
    console.log("ты телец")
} else if (day >= 21 && day <= 31 && month === 5 || month === 6 && day >= 1 && day <= 21){
    console.log("ты близнецы")
} else if (day >= 22 && day <= 30 && month === 6 || month === 7 && day >= 1 && day <= 22){
    console.log("ты рак")
} else if (day >= 23 && day <= 31 && month === 7 || month === 8 && day >= 1 && day <= 22){
    console.log("ты лев")
} else if (day >= 23 && day <= 31 && month === 8 || month === 9 && day >= 1 && day <= 22){
    console.log("ты дева")
} else if (day >= 23 && day <= 30 && month === 9 || month === 10 && day >= 1 && day <= 23){
    console.log("ты весы")
} else if (day >= 24 && day <= 31 && month === 10 || month === 11 && day >= 1 && day <= 22){
    console.log("ты скорпион")
} else if (day >= 23 && day <= 30 && month === 11 || month === 12 && day >= 1 && day <= 21){
    console.log("ты стрелец")
} else if (day >= 22 && day <= 31 && month === 12 || month === 1 && day >= 1 && day<= 20){
    console.log("ты козерог")
} else if (day >= 21 && day <= 31 && month === 1 || month === 2 && day >= 1 && day <= 18){
    console.log("ты водолей")
} else if (day >= 19 && day <= 29 && month === 2 || month === 3 && day >= 1 && day <= 20){
    console.log("ты рыбы")
} else{
    console.log('попробуй еще раз...')
}