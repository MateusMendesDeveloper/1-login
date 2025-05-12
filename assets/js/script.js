const toggle = document.getElementById('tema');
const body = document.body;

if (localStorage.getItem('tema') === 'escuro') {
  body.classList.add('tema-escuro');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  body.classList.toggle('tema-escuro');

  if (body.classList.contains('tema-escuro')) {
    localStorage.setItem('tema', 'escuro');
  } else {
    localStorage.setItem('tema', 'claro');
  }
});

document.getElementById('mostrarSenha').addEventListener('click', () => {
  const senhaVisivel = document.getElementById('senha').type === 'text';
  document.getElementById('senha').type = senhaVisivel ? 'password' : 'text';
  document.getElementById('mostrarSenha').textContent = senhaVisivel ? '👁' : '🙈';
});

function verificarEmail() {
  const email = document.getElementById('email').value;
  const erroEmail = document.getElementById('erroEmail');

  if (!email) {
    erroEmail.style.display = 'block';
    erroEmail.textContent = 'Insira um Email'
  } else if (validarEmail(email)) {
    erroEmail.style.display = 'none';
  } else {
    erroEmail.style.display = 'block';
    erroEmail.textContent = 'Isso não e um Email valido'
  }
}

function verificarSenha() {
  const senha = document.getElementById('senha').value;
  const erroSenha = document.getElementById('erroSenha');

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!senha) {
    erroSenha.style.display = 'block';
    erroSenha.textContent = 'Insira uma senha'
  } else if (regex.test(senha)) {
    erroSenha.style.display = 'none';
  } else {
    erroSenha.style.display = 'block';
    erroSenha.textContent = 'Sua senha deve conter ao menos 8 caracteres, um número, uma letra maiuscula e uma minuscula.'
  }
}

function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}