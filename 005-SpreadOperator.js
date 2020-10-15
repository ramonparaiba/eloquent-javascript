//Tentando Copiar Natoralmente

// let arr1 = [1,3,6];
// let arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// arr1.push(9);

// console.log(arr1);
// console.log(arr2);//Arr2 também recebe o push 9

// let nums1 = [2,5,7];
// let nums2 = [...nums1];

// console.log(nums1);
// console.log(nums2);

// nums1.push(9);

// console.log(nums1);
// console.log(nums2); //nums2 nao recebe o 9 pois é um array distinto de nums1
// //Copiar arrays
// let vetor1 = ['a','b','c','d'];
// let vetor2 = [...vetor1, 'e'];

// console.log(vetor1);
// console.log(vetor2);

// //Concatenar arrays

// let arr1 = ['x','y','z'];
// let arr2 = ['j','k','l'];
// let arr3 = [...arr1, ...arr2];

// console.log(arr3);

// //Operações Matemáticas
// let nums = [2,34, 42, 17, 18];
// let max = Math.max(...nums);
// let min = Math.min(...nums);
// console.log(`Max: ${max}, Min: ${min}`);

// //String para array
// let nome  = 'Pacatatu Cutia Não';
// let chars = [...nome];
// console.log(chars);

// // dá pra usar em Objects também?

let exam1 = { 
    name: "Margarélio",
    age: 25
};
let exam2 = {...exam1};
exam2.name = "Bacmart";

console.log(`name: ${exam1.name}, age: ${exam1.age}`);
console.log(`name: ${exam2.name}, age: ${exam2.age}`);