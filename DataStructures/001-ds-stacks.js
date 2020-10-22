const stack = {
    "deck" : [],
    isEmpty(deck){ return (deck.length === 0 ? true: false) },
    unStack(deck){
        (isEmpty === true ? console.log("Pilha Vazia"): deck.pop())
        return deck
    },
    stackUp(deck, value){
        deck.push(value)
        return deck
    },
    top(deck){
        return deck[deck.length-1]
    }
}


let meuDeck = stack.deck
let isEmpty = stack.isEmpty(meuDeck);
console.log(stack.isEmpty(meuDeck));
console.log(stack.unStack(meuDeck));
console.log(stack.stackUp(meuDeck, 6));
console.log(stack.stackUp(meuDeck, 15));
console.log(stack.stackUp(meuDeck, 5));
console.log(stack.stackUp(meuDeck, 42));
console.log(stack.top(meuDeck));