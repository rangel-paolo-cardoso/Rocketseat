const txtUserName = document.getElementById('user-name');
const btnBusca = document.getElementById('busca');
const listaRepos = document.getElementById('repositorios');

const preencheLista = repos => { // Preenche a ul com os nomes de repos.
  repos.forEach(repo => {
    const li = document.createElement('li');
    li.innerHTML = repo.name;
    listaRepos.appendChild(li);
  });
};

const carregaRepos = async () => {
  fetch(`https://api.github.com/users/${txtUserName.value}/repos`)
    .then(response => response.json())
    .then(json => preencheLista(json))
    .catch(erro => {
      console.warn(erro);
    });
};

btnBusca.addEventListener('click', carregaRepos);