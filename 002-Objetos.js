const personalInformation =  {
    firstName: 'Pablo',
    lastName: 'Pinheiro',
    city: 'João Pessoa',
    state: 'Paraíba',
    zipCode: 58000000,
}

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);