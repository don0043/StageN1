try {
    console.log(a)

    let a = 3;
} catch {
    console.log('let must be declared')
}


// in Js dividing by zero is not error its "infinity"

let num

try {
    num = 1/0
    console.log("cannot be divided by zero")
}catch (e){
    console.log(e)
}
