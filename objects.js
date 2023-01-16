const car = {
    color : "black",
    power(){
        console.log("engine power is 5.0")
    }

}

console.log(car)

//changing color


car.color = "green"


console.log(car)

//showing the engine power in console

console.log(car.power())


//Pears and apples

const adding = (pears, apples) => {
    return pears + apples
}

console.log(adding(3, 7))


//name function

const name = (name) => {
    if (name){
        return "Hello" + " " + name
    }else return "There is no such name"
}

console.log(name("daniiar"))
console.log(name())

// arguments function

function arg(arg){
    return typeof arg
}

console.log(arg(3))

// prime number function

function prime(number){
    if (number === 1){
        return false
    }
    else if(number === 2){
        return true
    }
    else {
        for (let i = 2; i < number; i++){
            if (number % i === 0){
                return false
            }
        }
        return true
    }
}


console.log(prime(3))
console.log(prime(11))
console.log(prime(1))
console.log(prime(127))
