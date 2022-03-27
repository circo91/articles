//przykład
// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// zadanie 1 artykuł Petle for
//kolejność wprowadzania danych do pętli to a) for(inicjalizator ; warunek; itertor)
// zadanie 2
// for (let i = 0; i <= 15; i++){
//     console.log(i)
// }
// zadanie 3
// const array = [0, 1, 2, 3, 4, 5]
// for (let i = 5; i >=0; i--){
//     console.log(i)
// }
// zadanie 4
// let number = 5
// let sum = 0
// for (let i = sum; i <= number; i ++){
//     sum +=i
// }
// console.log(sum)

// // zadanie 5

// const array = [0, 0, 0, 0, 0,]
// for (i = 0; i < array.length; i++){
//     console.log(i+array[i])
// }

// const array2 = [5, 4, 3, 2, 1,]
// for (i = 0; i < array2.length; i++){
//     console.log(i+array2[i])
// }

// zadanie 6
// const array3 = [true, false, false, true, false, true, false, false,]
// for (i = 0; i < array3.length; i++){
//     if(array3[i] === true){console.log(1)} else {console.log(0)}
// }

 
// zadanie 7
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const word = 'jumps';

// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"



// const array4 = ["Styczeń 22", "Luty", "Luty", "Marzec 4", "Marzec 8", "Marzec 9",]

// let x=0
// const filter = "a"
// for (i = 0; i < array4.length; i++){
//     if (array4[i].includes(filter)== true) {
//        x += 1
//    }
// }
// console.log(x)


// zadanie 8

// let num = 256985354
// const arr = []
// for (i = 0; i<=num; i++){
//    if( num % i == 0){arr.push(i)}
// }
// console.log(arr)

// zadanie 9

// let start = 5
// let end = 15
// let sum = 0

// for (i = start; i <= end; i++){
//     if (i % 2 === 0) {
//         sum += i
//     }
// }
// console.log(sum)

// zadanie 10

// const arr = [[4, 5], [6, 7], [8, 9]];

// for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j])
//     }
// }

//lumber ile potrzeba by podnieśc o x poziomów end tj ilość poziomów -1

// let end = 5
// let sum = 586.1
// let a=sum

// for (i = 0; i < end; i++) {
//     a += (sum += 0.09403*sum)
// }
// console.log(a)
// console.log(sum)


// const number = {
//     one: 1,
//     two: 2,
//     three: 3,
//     tour: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//     ten: 10,
// }
// for (let num in number) {
//     console.log(`${num} - ${number[num]}`)
// }

// const person = {
//     firstName: 'Paweł',
//     lastName: 'Drabato',
//     age: 31,
//     profession: 'sales'
// }
// for (let key in person) {
//     // console.log(key)
//     console.log(key == 'age' ? true : false)
    
// }

//Sprawdź z użyciem pętli for...in oraz for...of, czy któryś z obiektów zawartych w
//tablicy posiada właściwość firstName:
// const arr = [
// {
// name: 'Andrzej',
// age: 30,
// profession: 'lekarz'
// },
// {
// firstName: 'Wiesiek',
// age: 60,
// profession: 'piekarz'
// },
// ]

// for (let key of arr) {
//     // for (let age2 in key)
//         console.log(key.name)
        // if (age2 == 'firstName') { console.log(true) }
// }
// console.log(age2)
// console.log(age2)



