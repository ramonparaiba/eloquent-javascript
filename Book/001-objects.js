// let rabbit = {}

// rabbit.speak = (line) => console.log(`The rabbit says '${line}'`)
// rabbit.speak("Gota serena.")

//prototypes

// let vazio = {}

// console.log(vazio.toString()) //como não há um protótipo definido para o objeto vazio, é referenciado o grande protótipo ancestral OBJECT.

// console.log(Object.getPrototypeOf({}) == Object.prototype);

let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}
let killerRabbit = Object.create(protoRabbit)
killerRabbit.type = "Killer"
killerRabbit.speak("SKREEE")

console.log(protoRabbit);

//método construtor
function makeRabbit(type){
    let rabbit = Object.create(protoRabbit)
    rabbit.type = type
    return rabbit
}