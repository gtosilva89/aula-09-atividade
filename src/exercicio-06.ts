// Elaborar um programa que apresente os valores de conversão de graus Celsius em graus Fahrenheit, de dez em dez graus,
// iniciando a contagem em dez graus Celsius e finalizando em cem graus Celsius.
// O programa deve apresentar os valores das duas temperaturas.
// Para converter grau Celsius para Fahrenheit, basta multiplicar a temperatura em graus Celsius por 1,8 e somar 32

let c = 0;
let f =0;

for(let i = 1; i<=100; i++){
  if(!(i%10)){
  c = i;
  f = (c*1.8) +32;
  console.log(c + " Graus Celsius é equivalente à " + f + " Graus Fahrenheit");
}
}