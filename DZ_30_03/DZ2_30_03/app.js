let starbucks =  {
    coffee :{
        latte:' % 2 milk, steamed hot, milk foam, signature Espresso Roast' ,
        mochas:'Steamed hot, 2% milk, milk foam, mocha sauce pumps, whipped Cream, Shoots, signature Espresso Roast, ' ,
        Cappuccino:' 2% milk, steamed hot, regular foam, Shoots, signature Espresso Roast, Shoots' ,
        Americano:'water, signature Espresso Roast, Shoots, Shoots' ,
    },
    tea:{
        Green:'Steamed hot, milk foam, 2% milk, Matcha Powder scoops' ,
        Black:'tea bags' ,
        herbal:'tea bags, mint'
    },
}
let drinks = prompt('order')
if (drinks in starbucks.coffee || drinks in starbucks.tea ){
    console.log('your order is ready')
}else{
    console.log('error or not available')
}
