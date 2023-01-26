let arr = ["spider man", "iron man", "super man"]

for (i = 0; i < arr.length; i++){
    console.log(arr[i])
}
//array to string and back to array

let syms = ["s","u","p","e","r"]

let joined = syms.join("") //joining every symbol to string

console.log(joined)


let splitted = joined.split("") //splitting it into array


console.log(splitted)

// hello to names

let names = ["Daniiar", "Sasha","Petya","Kolya"]

let helloNames = names.map((i) => {
    return "hello" + " " + i
})

console.log(helloNames)


//numeric to boolean


let numArr = [1, -1, 0, 3, 5]

let boolArr = numArr.map((e) => {
    return Boolean(e)
})


console.log(boolArr)


// sort array

let sArr = [1,6,7,8,3,4,5,6]


console.log(sArr.sort().reverse())


// filter by 3


let n = sArr.filter((e) => {
    if (e >= 3){
        return e
    }
})
console.log("Task 6")
console.log(n)

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

let func = (a, b) => {
    console.log(a.indexOf(b))
}


let newArr = [1,2,3,4,10, 11, 12];


console.log("Task 7")
func(newArr, 10)


// Implement a loop that will print the number 'a' until it is less than 10

console.log("Task 8")

for (let i = 0; i < 10; i++){
    console.log(i)
}


//prime numbers

let primes = []

for (let k = 0; k < 20; k++){
    if ((k <= 1) || k % 2 === 0) {

    } else {
        primes.push(k)
        ;
    };

}

console.log(primes)

//odd numbers


let odds = []

for (let k = 0; k < 60; k++){
    if (k % 2 == 1) {
    odds.push(k)
    }
}

console.log(odds)
