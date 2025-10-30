const readlineSync = require('readline-sync');

console.log(' ********** CALCULANDO O IMC *********** ')

var peso = readlineSync.questionFloat('Digite o seu peso em kg (ex.: 70.5): ');
var altura = readlineSync.questionFloat('Digite a sua altura em metros (ex.: 1.75): ');

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
console.log('O seu IMC é: ' +calcularIMC(peso,altura).toFixed(2));

if(calcularIMC(peso,altura) < 18.5){
    console.log('Você está abaixo do peso.');  

} else if(calcularIMC(peso,altura) >= 18.5 && calcularIMC(peso,altura) <= 24.9){
    console.log('Parabéns! Você está com o peso ideal.');
} else if(calcularIMC(peso,altura) >= 25.0 && calcularIMC(peso,altura) <= 29.9){
    console.log('Você está com pré-obesidade.');
} else if(calcularIMC(peso,altura) >= 30.0 && calcularIMC(peso,altura) <= 34.9){
    console.log('Você está com obesidade grau I.');
} else if(calcularIMC(peso,altura) >= 35.0 && calcularIMC(peso,altura) <= 39.9){
    console.log('Você está com obesidade grau II.');
} else {
    console.log('Atenção! Você está com obesidade grau III.');
}

console.log(' ********** FIM DO PROGRAMA *********** ')

