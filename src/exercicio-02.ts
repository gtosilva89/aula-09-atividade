// Utilizando (DoWhile), elaborar um programa que apresente o somatório dos valores pares existentes na faixa de 1 até 500.

let soma2 = 0; // soma começa em 0
let par = 2; // Começa com 2, o primeiro número par

do {
    soma2 += par; // Adiciona o número par à soma
    par += 2; // Incrementa de 2 em 2 para pegar os próximos números pares
} while (par <= 500);

console.log("A soma dos números pares de 1 até 500 é:", soma2);