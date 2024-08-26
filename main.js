const form = document.getElementById('form-agenda');

let linhas = '';
let contador = 1 ;
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputNome = document.getElementById('nome-form');
    const inputTelefone = document.getElementById('telefone-form');



    let linha = '<tr>' ;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const totalContatos = document.getElementById('total-contatos');
    totalContatos.innerHTML = contador;
    
    contador = contador+1;

    const corpoTabela = document.querySelector('tbody');

    corpoTabela.innerHTML = linhas ;


    
})