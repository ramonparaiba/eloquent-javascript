function Fila (array){
    this.array = []
    if(array) this.array = array
}

let fila = new Fila([])

Fila.prototype.enfileirar = function(valor){
    this.array.push(valor)
}
Fila.prototype.vazia = function(){
    return(this.array.length === 0)
}
Fila.prototype.desenfileirar = function(){
    return (fila.vazia()? "A fila está vazia": this.array.shift())
}
Fila.prototype.primeiroValor = function(){
    return this.array[0]
}
Fila.prototype.pesquisa = function(valor){
    return this.array.includes(valor)
}
Fila.prototype.getBuffer = function(){
    return this.array.slice()
}

function busca(fila, valor){
    let bufferArray = fila.getBuffer()
    let bufferFila = new Fila(bufferArray)

    while(!bufferFila.vazia()){
       if(bufferFila.desenfileirar() === valor)
            return true
    }
    return false
}

fila.enfileirar(3)
fila.enfileirar(6)
fila.enfileirar(9)
fila.enfileirar(8)
fila.enfileirar(15)

console.log(fila.getBuffer());
console.log(busca(fila, 16));