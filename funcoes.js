function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}
function verificarSituacao(media) {
    if (media >= 6) {
        return "Aprovado";
    }
    return "Reprovado";
}
if (typeof module !== "undefined") {
    module.exports = {
        calcularMedia,
        verificarSituacao
    };
}
