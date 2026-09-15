function consultarDisciplinas() {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML =
        "DevOps<br>" +
        "Engenharia de Software<br>" +
        "Banco de Dados";
}
function mostrarMedia() {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const media = calcularMedia(nota1, nota2);
    const situacao = verificarSituacao(media);
    document.getElementById("resultado").innerHTML =
        "Média: " + media.toFixed(1) +
        "<br>Situação: " + situacao;
}
