

const Cake_selector={

    Base_layer: ['Classic', 'Vanilla', 'Chocolate','Butter'],
    Filling: ['Strawberry', 'Rasberry', 'Bluberry','Mulberry', 'Mixed Fruit','Vanilla'],
    Second_layer:['Classic', 'Vanilla', 'Chocolate','Butter'],
    Toppings: ['Chocolate', 'Strawberry', 'Rasberry', 'Candies', 'Hazelnut', 'Almonds', 'Sprinkles']
};

/*

function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
*/

Random_selector = (x) => {

return Math.floor(Math.random()*x)

};

let cake_receipe = []


for(let layers in Cake_selector){

let i = Random_selector(Cake_selector[layers].length)

switch(layers){
case 'Base_layer':

cake_receipe.push(`Make the base layers as ${Cake_selector[layers][i]}.`)
break

case 'Filling':
cake_receipe.push(`Then, put in the ${Cake_selector[layers][i]} filling.`)
break

case 'Second_layer':
cake_receipe.push(`The next step is to put ${Cake_selector[layers][i]} as the second layer.`)
break

case 'Toppings':
cake_receipe.push(`Add the ${Cake_selector[layers][i]} topings to complete your cake.`)
break

default:
cake_receipe.push('There is some error')
}

}
console.log(cake_receipe.join('\n'))
