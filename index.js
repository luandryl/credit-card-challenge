import  Card   from './Card'
const cards = [{
    id: 1,
    number: 4111111111111111
},{
    id: 2,
    number: 4111111111111
},{
    id: 3,
    number: 4012888888881881
},{
    id: 4,
    number: 378282246310005
},{
    id: 5,
    number: 6011111111111117
},{
    id: 6,
    number: 5105105105105100
},{
    id: 7,
    number: "5105 1051 0510 5106"
},{
    id: 8,
    number: 9111111111111111
}]

const validCards = cards.filter(card => {
    return Card.validate(card.number)
})
console.log("Cards List \n")
console.log(cards)
console.log("\n Only Valid Cards \n")
console.log(validCards)