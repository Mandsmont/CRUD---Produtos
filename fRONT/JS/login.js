
const EMAIL = "admin@admin.com";
const SENHA = "123456";

let campoEmail = document.querySelector('#email');
let campoSenha = document.querySelector('#senha');
let btnEntrar = document.getElementById('btn-entrar');


btnEntrar.addEventListener("click", () => {
    let emailDigitado = campoEmail.value.toLowerCase();
    let senhaDigitada = campoSenha.value;


    autenticar (emailDigitado, senhaDigitada);
    
});


function autenticar (email, senha){

  // saber qual a URL da API
  const URL =  'http://localhost:3400/login';
  // criar um request para a API
fetch(URL, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({email, senha})
})
  // se der certo direcionar para a tela home
  .then(response =>  response = response.json())
  .then(response => {
    console.log(response)

    if(!!response.mensagem){
      alert(response.mensagem);
      return;
    }

  
    mostrarLoading();
    
    salvarToken(response.token);
    salvarUsuario(response.salvarUsuario)
    
    setTimeout(() => {
      window.open('home.html', '_self');
    },5000)

    
  })
  // se der errado mandar mensagem para o usuário
  .catch(erro => {
    console.log(erro)
  })
}

function mostrarLoading(){
  // capturar o campo de loading e mostrar ele

  const divLoading = document.getElementById("loading");
  divLoading.style.display = "block";

  // Pegar o elemento caixa de login e esconder ela
  const  divBoxLogin = document.querySelector('div.box-login')
  divBoxLogin.style.display = "none"
}