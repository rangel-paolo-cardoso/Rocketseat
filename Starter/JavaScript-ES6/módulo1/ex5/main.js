// 5.1
const arr = [1, 2, 3, 4, 5, 6];

const [ x, ...y ] = arr;

console.log(x);
console.log(y);

// 5.2
const soma = (...params) => params.reduce((tot, next) => tot + next);

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

