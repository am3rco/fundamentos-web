/* 
JS é Case Sensitive: Reconhece  maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()

*/

// Está criando uma variavel local para os input no contato.html
let nome = window.document.getElementById("nome");
let email = document.querySelector('#email');
let telefone = document.querySelector('#telefone');
let mensagem = document.querySelector('#mensagem');
let nomeOk = false
let emailOk = false
let mensagemOk = false

// Definindo o tamanho das caixas input
nome.style.width = '100%';
email.style.width = '100%'

// Cria uma função para validar o Nome
function validName() {
    
    let txtNome = document.querySelector('#txtNome');
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido';
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = 'Nome Válido';
        txtNome.style.color = 'green';
        nomeOk = true
    }

}

// Cria uma função para validar o Email
function validEmail() {
    let txtEmail = document.querySelector('#txtEmail');

    if (email.value.indexOf("@") == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Valido'
        txtEmail.style.color = 'green'
        emailOk = true
    }

}

// Cria uma função para validar a Mensagem
function validMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')

    if (assunto.value.length >= 100) {
        txtMensagem.innerHTML = 'Evite mensagens com mais de 250 caracteres'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
    } else {
        txtMensagem.style.display = "none"
        mensagemOk = true
    }
} 

// Cria uma função para validar o envio
function enviar() {
    if(nomeOk == true && emailOk == true && mensagemOk == true) {
        alert ("Formulário enviado com sucesso")
    } else {
        alert ('Preencha o formulario corretamente antes de enviar')
    }
}