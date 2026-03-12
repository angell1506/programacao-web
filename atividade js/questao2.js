console.log("JOKENPO!")

let opcoes = ["pedra", "papel", "tesoura"];

let escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura");

let numeroAleatorio = Math.floor(Math.random() * 3);
let escolhaComputador = opcoes[numeroAleatorio];

console.log("Usuário escolheu: " + escolhaUsuario);
console.log("Computador escolheu: " + escolhaComputador);

if (escolhaUsuario === escolhaComputador) {
    console.log("Empate!");
} 
else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
) {
    console.log("Você venceu!");
} 
else {
    console.log("Computador venceu!");
}