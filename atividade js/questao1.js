console.log("Jogo do número aleatório!");

let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let palpite;

while (palpite !== numeroSecreto){

    palpite = parseInt(prompt("Adivinhe o número entre 1 e 20:"));

    if(palpite > numeroSecreto){
        console.log("O número secreto é menor que " + palpite);
    } 
    else if(palpite < numeroSecreto){
        console.log("O número secreto é maior que " + palpite);
    } 
    else{
        console.log("Parabéns, você acertou!!!");
    }
}