//Função nomeada
// function soma (num1, num2){
//     return num1+num2;
// }
// funçao anonima
// const soma = function(num1, num2){
//     return num1+num2;
// }
// Arrow Function
const soma = (num1, num2) => num1+num2;

const areaCirculo = (raio) => (Math.PI * Math.pow(raio,2)).toFixed(2);

console.log(soma(3,4));
console.log(areaCirculo(25));