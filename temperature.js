
//this is a variable called kelvin that is set to 293
const kelvin = 213;

//to convert kevin to celcius we subtract 273
var celcius = kelvin - 273;

//to convert celcius to farenheit
var farenheit = celcius * (9/5) + 32;

//round down that value
farenheit = Math.floor(farenheit);

console.log(`the temperature is ${farenheit} in deg F`)
