let a = 20, b = 10, c = 40

let numMaior = maximo(a, b, c)
console.log(numMaior);


function maximo(a, b, c){
    let max = a
    if(b > max)
        max = b
    if(c > max)
        max = c
    return max
}