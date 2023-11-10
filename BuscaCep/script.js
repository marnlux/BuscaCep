

function DadosTela(dados) {
    console.log(dados)
   
    document.getElementById("logra").value = dados.logradouro
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("local").value = dados.localidade
    document.getElementById("uf").value = dados.uf
    document.getElementById("ddd").value = dados.ddd
}

async function BuscarDados(cep) {
    const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    DadosTela(dados)


}

function CliqueBotao() {
    const cep = document.querySelector('.input-cep').value
   BuscarDados(cep)

}

function Limpar() {
    document.getElementById("logra").value = " "
    document.getElementById("bairro").value = " "
    document.getElementById("local").value = " "
    document.getElementById("uf").value = " "
    document.getElementById("ddd").value = " "
}

