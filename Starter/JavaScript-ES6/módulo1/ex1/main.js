class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin;
  }

  isAdmin() {
    return (this.admin) ? 'Sim': 'Não';
  }
}

class Admin extends Usuario {
  admin = true;
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Admin1 = new Admin('email@teste.com', 'senha123');

document.getElementById('user').innerHTML = JSON.stringify(User1);
document.getElementById('admin').innerHTML = JSON.stringify(Admin1);

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());