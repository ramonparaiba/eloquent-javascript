const stack = {
    "deck" : [],
    isEmpty(deck){ return (deck.length === 0 ? true: false) },
    unStack(deck){
        (this.isEmpty === true ? console.log("Pilha Vazia"): deck.pop())
        return deck
    },
    stackUp(deck, value){
        deck.push(value)
        return deck
    }, 
    top(deck){
        return deck[deck.length - 1]
    }
}

let deck = stack.deck
console.log(stack.isEmpty(deck))
console.log(stack.stackUp(deck, 4));
console.log(stack.stackUp(deck, 3));
console.log(stack.stackUp(deck, 122));
console.log(stack.isEmpty(deck))
console.log(stack.unStack(deck))
console.log(stack.stackUp(deck, 8));
console.log(stack.top(deck));
console.log(stack.unStack(deck))
console.log(stack.top(deck));











// // push()
// let nossaPilha = [1,3,5]
// console.log(nossaPilha);

// nossaPilha.push(7)
// nossaPilha.push(9)
// console.log(nossaPilha);

// //pop()
// nossaPilha.pop()
// console.log(nossaPilha);