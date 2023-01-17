arr = ["spider man", "iron man", "super man"]

for (i = 0; i < arr.length; i++){
    console.log(arr[i])
}
//array to string and back to array

syms = ["s","u","p","e","r"]

joined = syms.join("") //joining every symbol to string

console.log(joined)


splitted = joined.split("") //splitting it into array


console.log(splitted)

// hello to names

names = ["Daniiar", "Sasha","Petya","Kolya"]

helloNames = names.map((i) => {
    return "hello" + " " + i
})

console.log(helloNames)


//numeric to boolean


numArr = [1, -1, 0, 3, 5]

boolArr = numArr.map((e) => {
    return Boolean(e)
})


console.log(boolArr)


// sort array

sArr = [1,6,7,8,3,4,5,6]


console.log(sArr.sort().reverse())


// filter by 3


let n = sArr.filter((e) => {
    return e === 3
})

console.log(n)

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

let func = (a, b) => {
    console.log(a[b])
}


newArr = [1,3,4,5,67,8]

func(newArr, 2)


// Implement a loop that will print the number 'a' until it is less than 10

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
