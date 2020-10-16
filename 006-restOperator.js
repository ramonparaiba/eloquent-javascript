// function add (nums){
//     console.log(nums);
// }
// add(4, 5, 6, 77,); //Como passar todos os valores como argumento???

// function add (...nums){ //usando o operador rest, bem parecido com o operador spread
//     console.log(nums);
// }
// add(4, 5, 6, 77,);

// function add (a,...nums){ //pegando o primeiro argumento e guardando o resto
//     console.log(a);
    
//     console.log(nums);
// }
// add(4, 5, 6, 77,);

// // Trabalhando com Objeto MEIO DESAJEITADO
// const aluno  = {
//     name:"Aloísio Antunes",
//     age: 25,
//     fone: "83 993473665",
//     adress:{
//         street: "Joaquim José",
//         city: "Jampa",
//         state:"PB",
//     }
// }

// function app(...rest) {
//     console.log(aluno.age);    
//     console.log(rest);  
// }
// app(aluno);

// // Soma de vários parâmetros

let nums = [2, 5, 8, 55, 89, 23, 78];

function soma(...rest) {
    let somatorio = 0;
    for (const num of rest){
        somatorio+=num;
    }
    return somatorio;    
}

console.log(soma(...nums));
