const { calcularMedia, verificarSituacao } = require("./funcoes");
let erros = 0;
function verificar(descricao, resultado, esperado) {
    if (resultado === esperado) {
        console.log("OK - " + descricao);
    } else {
        console.log("ERRO - " + descricao +
            " | esperado: " + esperado +
            " | recebido: " + resultado);
        erros++;
    }
}
verificar("Média de 8 e 6", calcularMedia(8, 6), 7);
verificar("Média de 10 e 10", calcularMedia(10, 10), 10);
verificar("Aluno com média 6", verificarSituacao(6), "Aprovado");
verificar("Aluno com média 5", verificarSituacao(5), "Reprovado");

if (erros === 0) {
    console.log("Todos os testes passaram.");
    process.exit(0);
} else {
    console.log(erros + " teste(s) falharam.");
    process.exit(1);
}
