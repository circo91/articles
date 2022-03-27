// ZADANIA Z PLATFORMY

// sprawdza czy jest to liczba pierwsza
// function firstNumber(number) {
//     if(number<2) return false
//     for (i = 2; i < number; i++) {
//         if (number % i === 0 && number != i) {
//             return false
//         }
//     }return true
// }
// let a = firstNumber(4)
// console.log(a)
//     zadanie z platformy, by sprawdzać typ parametru
// taki zapis działa tutaj ale nie na platformie
// function checkType(str) {
//         console.log(typeof(str))
// }
// checkType(true)
// taki zapisa działa na platformie
// function checkType(str) {
//         return typeof str
// }

// funkcja zamieniajaca liczbe naturalna na uklad godzinowy w formacie godziny:minuty np. 158 zamieni na 2:38, a 59 zamieni na 0:59
// function minute(number) {
//         if (number / 60 >= 1) {
//                 a = number / 60
//                 b = number % 60
//         }
//         else {
//                 a = 0
//                 b=number
//         }
//         return (`${Math.floor(a)}:${b}`)
// }
// minute(60)


// Nnapisz funkcje która będzie sprawdzała która z dwwóch liczb jest bliżej 100

// function closer(x, y) {
//     a = x - 100
//     b= y-100
//     if (Math.abs(a)>Math.abs(b)) { return a }
//     else if (Math.abs(b)>Math.abs(a)) { return b }
//     else return a,b
    
// }
// closer(15,236)
// console.log(a)
// console.log(a)

// platforma mi to przyjęła ale nie jest to dobre
// function closer(x, y) {
//     a = x - 100
//     b = y - 100
//     if (a>b) { return x }
//     else if (b>a) { return y }
//     else return x,y
    
// }
// closer(2, -5 )


// napisz funkcje, która będzie sprawdzać właściwości objektu w celu znalezienia podanej właściwości i wyświetlenia jej wartości

// do rozwiązania
const car = {
    brand: 'Opel',
    model: 'Astra',
    year: 1998
}
function getValue(obj, str ) {
    for (let str in obj) {return obj.str}
}
getValue(car, 'brand')
console.log(obj.key)