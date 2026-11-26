console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER+1);
console.log(Number.MAX_SAFE_INTEGER+2);

let bigNumber:bigint = 1924120984901238491284n;
let bigNumber2:bigint = BigInt(21903812098309128309128);
console.log(bigNumber, bigNumber2)

let a = 100n;
let b= 50n;
console.log(a*b, a+b);
let c= 999;
// Operator '+' cannot be applied to types 'bigint' and 'number'
// .decimal cannot be used in bigint
// console.log(a+c);