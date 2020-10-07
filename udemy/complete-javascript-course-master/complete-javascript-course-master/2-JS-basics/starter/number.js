const salary = 1.23e6
const hex = 0xff
const binary = 0b111111
const octal = 0o377

let num = 255
console.log(binary == octal)
console.log(num.toString(16))


//Math tools
console.log(Math.ceil(1.234))
console.log(Math.floor(1.234))
console.log(Math.round(1.234))
console.log(Math.trunc(1.234))
console.log(Math.pow(2, 2))
console.log(Math.random(1.234))
console.log(Math.min(1, 2, 3, 4, 5))
console.log(Math.max(1, 2, 3, 4, 5))

// Imprecise calculations
let results = 0.1 + 0.2
console.log(results.toFixed(4))


// isNaN
console.log(isNaN("123123"))

// parseInt & parseFloat
console.log(parseInt())
console.log(parseFloat)