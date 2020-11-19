const Fila = {
    create(array){
        this.array = []
        if(array) this.array = array
    },
}

let filinha = Fila;

console.log(filinha.create([1,2,3]));