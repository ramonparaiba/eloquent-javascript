function factorial(num) {
    if (num === 0)
        return 1
    else
        return factorial(num-1)*num
}

console.log(factorial(7))

console.log(null || "samba");
console.log("Epaminondas" || "samba");
