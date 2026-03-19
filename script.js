let produto = "";
let preco = 0;
let quantidade = 1;

function selecionarProduto(nome, valor){
    produto = nome;
    preco = valor;
    quantidade =1;

    document.getElementById("produtoSelecionado").innerText = nome;
    document.getElementById("quantidade").innerText = quantidade;
    atualizarTotal();
}

function aumentar(){
    quantidade++;
    document.getElementById("quantidade").innerText = quantidade;
    atualizarTotal();

}

function diminuir(){
    if(quantidade > 1){
        quantidade--;
        document.getElementById("quantidade").innerText = quantidade;
        atualizarTotal();
    }
}

function atualizarTotal(){
    let total = preco * quantidade;
    document.getElementById("total").innerText = total.toFixed(2);
}

const finalizarPedido = document.getElementById("finalizar")

finalizar.addEventListener("click", function(){
alert("Pedido finalizado!")
})