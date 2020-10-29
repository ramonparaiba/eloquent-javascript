function Fila(array){
    this.array = []
    if(array) this.array = array
}
//printar array
Fila.prototype.printar = function(){
    console.log(this.array);
}
//enfileirar
Fila.prototype.enfileirar = function (value){
    this.array.push(value)
}

//espiar
Fila.prototype.espiar = function(){
    return this.array[0]
}

//remover
Fila.prototype.desenfileirar = function(){
    return (fila.vazia()  ? console.log("está vazia"): this.array.shift())
}

//Vazia
Fila.prototype.vazia = function(){
    return this.array.length == 0
}
//buffer
Fila.prototype.getBuffer = function(){
    return this.array.slice()
}

function buscaFila(fila, elemento){
    let bufferArray = fila.getBuffer()
    let bufferFila = new Fila(bufferArray)
    while(!bufferFila.vazia()){
        if (bufferFila.desenfileirar() === elemento)
            return true
    }
    return false
}

// instancia
var fila = new Fila([])


fila.enfileirar(3)
fila.enfileirar(4)
fila.enfileirar(5)

fila.printar()

console.log(buscaFila(fila, 4));