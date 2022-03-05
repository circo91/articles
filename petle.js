// zadanie 1. artykuł 35
// Warunek przy instruki 'if' jes w okrągłym nawiasie ()

// zadanie 2
// Blok kodu przy instrukcji 'if' jest w nawiasah wąsach {}

//zadanie 3
// Używając pojedyńczego if-else sa 2 możliwości do wyboru

// zadanie 4
const salary = 4500

// if (salary > 6000) {
//     console.log('A gdyby tak dodać jeszcze jedno zero do tej kwoty?!')
// }

// zadanie 5

// if (salary > 6000) {
//     console.log('A gdyby tak dodać jeszcze jedno zero do tej kwoty?!')
// } else {
//     console.log('Musimy jeszcze nad tym popracować..')
// }

// zadanie 6

// const age = 23

// if (age < 5) {
//     console.log('Przedszkolak')
// } else if (age < 14) {
//     console.log('Uczeń szkoły podstawowej')
// } else if (age < 18) {
//     console.log('Licealista')
// } else if (age < 23) {
//     console.log('Student')
// } else if (age >= 23) {
//     console.log('Karierowicz')
// }

// zadanie 7

// const child = 24

// if (child >= 9 && child <= 24) {
//     console.log('Dziecko zostanie przyjęte do żłobka')
// } else {
//     console.log('Dziecko nie zostanie przyjęte do żłobka')
// }

// zadanie 8

// const number = 30

// if (number % 3 === 0 && number % 5 === 0) {
//     console.log(`${number} jest podzielne przez 3 i 5`)
// } else  if (number % 3 === 0){
//     console.log(`${number} jest podzielne przez 3, ale nie przez 5`)
// } else if (number % 5 === 0) {
//     console.log(`${number} jest podzielne przez 5, ale nie przez 3`)
// } else {
//     console.log(`${number} nie jest podzielne przez 3 i 5`)
// }

// przykład switch case

let season = 'winter'

if (season === 'winter'){
} else if (season === 'fall') {
    console.log('winter')
} else if (season === 'spring') {
    console.log('winter')
} else if (season === 'summer') {
    console.log('winter')
} else {
    console.log('Nie podałeś pory roku')
}
// zamiasttego wyżej robimy:

switch (season) {
    case 'winter':
        console.log('winter')
        break;
    case 'fall': 
        console.log('fall')
        break;
    case 'spring': 
        console.log('spring')
        break;
    case 'summer': 
        console.log('summer')
        break;
    default:
        console.log('Nie podałeś pory roku')
}

// 3 alternatywa czyli ternary operator najpierw if-else

let isAdult 
const age = 17
if (age >= 18) {
    isAdult = true
} else {
    isAdult = false
}

// a teraz zamieniamy if-elsa na ternary operator

const isAdults = age >= 18 ? true : false

console.log(isAdults)
