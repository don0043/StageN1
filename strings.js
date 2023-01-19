//Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
let gString = 'ahb acb aeb aeeb adcb axeb'

let re = /a.b/gi;


console.log(gString.match(re))


//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

let nString = '2 + 3 223 2223'


let reg = /2...3/gi;

console.log(nString.match(reg))

//Get the day, month and year of the current date and output it to the console separately

let d = new Date().toString();

console.log(d)

let splitted = d.split(' ')

console.log("Day" + " " + splitted[2])
console.log("Month" + " " + splitted[1])
console.log("Year" + " " + splitted[3])
