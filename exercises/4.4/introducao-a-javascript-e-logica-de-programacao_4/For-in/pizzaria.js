
// Exercício 1
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
}

for (let pessoas in names){
    console.log('Olá', names[pessoas]);
}

// Exercício 2
let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
}

for (let key in carro){
    console.log(key, carro[key]);
}