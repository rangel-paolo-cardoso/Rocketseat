const checaIdade = (idade) => 
  new Promise((resolve, reject) => {
    (idade >= 18) ?
    resolve('Maior que 18') :
    reject('Menor que 18');
  });

  checaIdade(23)
    .then(response => {
      console.log(response);
    })
    .catch(erro => {
      console.log(erro);
    });