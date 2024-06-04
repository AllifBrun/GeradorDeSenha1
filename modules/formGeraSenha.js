import geraSenha from "./geradores.js";
const maiuscula = document.querySelector('.chk-maiusculas');
const minuscula = document.querySelector('.chk-minusculas');
const numero = document.querySelector('.chk-numeros');
const simbolo = document.querySelector('.chk-simbolos');
const senha = document.querySelector('.senha-gerada');
const botao = document.querySelector('.gerar-senha');
const qtd = document.querySelector('.qtd');

document.addEventListener('click', (e)=>{
        
    const el = e.target;
    if(el.classList.contains('gerar-senha')){
     resultado();
    }
})

function resultado(){
senha.innerHTML = geraSenha(qtd.value, maiuscula.checked, minuscula.checked, numero.checked, simbolo.checked);
}
