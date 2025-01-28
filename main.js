//recuperando todas as informações do form
const form = document.getElementById('form-contatos')

//Arrays com todos os nomes e outra com os telefones:
const nomes = [];
const telefones = [];

//Variável que receberá a contatenação das linhas
let linhas = ""

//trantando no evento de submit o refresh default
form.addEventListener(
    'submit', 
    function(evento){
        evento.preventDefault();
        comporLinha();
        inserirLinha();
    }
);

//Função que cria as linhas da tabela com a informação do formulário
function comporLinha() {
    //capturando as informções dos inputs
    const inputNome = document.getElementById("nome")
    const inputTelefone = document.getElementById("telefone")

    //Verificando se o contato já existe no array por Includes
    if(nomes.includes(inputNome.value)){
        alert(`O contato: ${inputNome.valeu} já está cadastrado`);
    } else {
        //inclusão da informação capturada no array
        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value);

        //Criando variável que receberá o código HTML construir a linha
        //valor iniciado com a linha
        let linha = '<tr>';
            //adicionando primeira coluna
            linha += `<td>${inputNome.value}</td>`;
            //adicionando segunda coluna
            linha += `<td>${inputTelefone.value}</td>`;
        //finalizando a linha
        linha += `</tr>`;

        //Incluindo linha na variável linhas
        linhas += linha;
    }
    //Limpando campos ao submeter 
    inputNome.value ='';
    inputTelefone.value = '';    
}

//função que adiciona a linha criada dentro da tabela HTML
function inserirLinha(){
    //recuperando seletor
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



