// function saySmothing(text) {
//     console.log(text);
// }
// let res = saySmothing('Dzień dobry !')
// console.log('Result of res: ', res)



// function multiply(x, y) {
//     return x * y;
// }
// let res2 = multiply(2, 7)
// console.log('Result of res: ', res2)

// hoistMeUp();
// function hoistMeUp() {
//     console.log('To podciąganie naprawdę działa!')
// }

//zadania: zadanie 1.

// function sum(x, y) {
//     return x + y;
// }
// let result = sum(5, 3)
// console.log('Result of sum: ', result)

// zadanie 2
// function person(text) {
//    window.alert('Witaj, ', text)
// }
// let res = person('Paweł')

// zadanie 3
// function age(x) {
//    if(x>0){return x*365}else{'Wiek nie może być ujemny'}
// }
// let res = age(5)
// console.log(res)

//zadanie 4
// function number(x, y) {
//    if (x === 12 || y === 12 || x+y=== 12){return true}
// }
// let res = number(4, 3)
// console.log(res)

// zadanie 5
// Zadeklaruj tablicę z czterema imionami. Następnie napisz funkcję, która jako argument będzie
// przyjmować tę tablicę oraz drugi argument - literę. Następnie sprawdź czy dana litera występuje w
// każdym z elementów tablicy i zwróć informację na ten temat w konsoli. Sprawdź czy na wynik ma
// wpływ wielkość szukanej litery. Zapoznaj się z dokumentacją:
// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// Moje rozwiązanie - Zlicza w ilu obiektach znajduje sie szukana litera
// const arr = ['Paweł', 'Tomek', 'Agata', 'Piotr']

// function name(arr, letter) {
//    let a = 0
//    for (i = 0; i < arr.length; i++){
//       if (arr[i].toLowerCase().includes(letter)==true){a++}
//    }
//     return `Litera ${letter} znajduje się w ${a} obiektach tablicy`
// }
// let res2 = name(arr, 't')
// console.log(res2)
//ROZWIAZANIE MATEUSZA MENTORA - Mówi czy we wszystkich obiektach znajduje się szukana litera
// const arr = [ 'Maciek', 'Anina', 'Kasia', 'Damian' ]
// function functionOfArray (arr, letter){
//     for(let i = 0; i < arr.length ; i++ ){
//         if(!arr[i].includes(letter)){
//             return 'Przykro mi ale nie kazdy wyraz ma tą literę'
//         }
//     }
//      return `litera ${letter} jest w kazdym elemencie!`
//     }
//     const res = functionOfArray(arr, 'm')
//     console.log(res)

//zadanie 6 źle
// const arr = [1,2,3,4,5]
// function arb(x) {

//    for (i = 0; i < arr.length; i++){
//       if (x === arr[i]) {
//          console.log(`Element znajduję się w tablicy`)
//       } else { arr.push(x) }
//    }return arr
// }
// const number = arb(4)
// console.log(number)

//zadanie 7 powiedzmy, dzieli na 2 tablice
//    const newArr = []
//    const newArr2 =[]
// function twoArrays(arr) {
//    for (i = 0; i < arr.length; i++){
//       if (arr[i] % 2 == 0) { newArr.push(arr[i])}
//       else {newArr2.push(arr[i])}
//    }
// }
// twoArrays([2,3,5,4,6,8,1,3])

// console.log(newArr)
// console.log(newArr2)

// zadanie 8
//Stwórz funkcję, która określi czy barman powinien zaserwować napój alkoholowy osobie, która jest
//nieletnia. Na początek zdefiniuj sobie tablicę z obiektami:

// Nasza funkcja przyjmie dwa parametry - pierwszym z nich będzie oczywiście powyższa tablica,
// kolejnym zaś boolean określający czy barman nie jest czasami na przerwie. Jeżeli barman jest na
// przerwie, to wyskakuje w konsoli powiadomienie - “Bar nieczynny, barman ma przerwę”. Jeżeli
// jednak jest przy barze, to należy sprawdzić, czy Nasi dzielni chłopcy są pełnoletni za pomocą pętli i
// logiki. W przypadku, jeżeli chłopiec jest pełnoletni, powinna się wyświetlić informacja : “Spokojnie
// (imię chłopaka), barman zaraz Cię obsłuży”. Jeżeli jednak ta druga osoba to małolat, to powinniśmy
// otrzymać informację “(imię osoby), uciekaj do domu, bo matce powiem!”.

const people = [
{
name: 'Andrzej',
age: 19,
},
{
name: 'Jasiek',
age: 16,
}
]
function adult(arr, boolean) {
   if (boolean == true) {
      for (let key of people) {
            if (key.age >= 18) { console.log(`Spokojnie ${key.name}, barman zaraz Cię obsłuży`) }
         else {
            console.log(`${key.name}, uciekaj do domu, bo matce powiem!`)
            }
         }
   }
   else { console.log('Bar nieczynny, barman ma przerwę') }
}
adult (people, true)