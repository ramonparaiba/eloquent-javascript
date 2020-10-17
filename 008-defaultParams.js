//First-Step
// function add(numArray){
//     let total = 0;
//     console.log(total);
// }
// add();

//StepTwo - tentando percorrer o Array (que na verdade nem foi passado)
// function add(numArray){
//     let total = 0;
//     numArray.forEach(element => {
//         total+= element;
//     });
//     console.log(total);
// }
// add();
//Cannot read property 'forEach' of undefined

// Step 3 - Passando um parâmetro default

function add(numArray = []){
    let total = 0;
    numArray.forEach(element => {
        total+= element;
    });
    console.log(total);
}

let anotherArray = [2,2,2,5]
add(anotherArray);