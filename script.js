//principal
let P=10000;

//rate of interest
let r=0.05;

//number of times interest is compounded per year
let n=3;

//time(in years)
let t=3;

//formula for compound interest
//A(amount)
let A=P*(1+(r/n))**(n*t)
console.log("The compound interest after 3 years is:",A);