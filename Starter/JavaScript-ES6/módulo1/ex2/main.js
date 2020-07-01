const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(({ idade }) => idade);

console.log(idades);

const rocketSeaters = usuarios
  .filter(({ empresa, idade }) => empresa === 'Rocketseat' && idade > 18);

console.log(rocketSeaters);

const googler = usuarios.find(({ empresa }) => empresa === 'Google');

console.log(googler);

const maxFifty = usuarios.map((user) => {
  user.idade *= 2;
  return user;
}).filter(({ idade }) => idade <= 50);

console.log(maxFifty);
