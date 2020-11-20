function Rabbit(type){
    this.type = type
}

Rabbit.prototype.speak = (line)=>console.log(`The ${this.type} rabbit says '${line}'`)
Rabbit.prototype.teeth = "small"

let umRabbit = new Rabbit("Weird")
umRabbit.speak('Laranja')

console.log(umRabbit.teeth)

umRabbit.teeth = "Grande"
console.log(umRabbit.teeth)
console.log(Rabbit.prototype.teeth)