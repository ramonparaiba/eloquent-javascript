//Includes permite verificar a ocorrência de um valor dentro de um array
//Muito útil na hora de implementar buscas.

let numArray = [2,3,4,5,6];

//console.log(numArray.indexOf(0)); //O número nao existe no array, por isso -1
console.log(numArray.includes(0)); //false
console.log(numArray.includes(3)); //true
