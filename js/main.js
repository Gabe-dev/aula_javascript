//Introdução ao JavaScript 

//Variaveis:Strings e Números.
var nome = "Gabriel David";
var n1 = 25;
var n2 = 10;
var frase = "Exemplo hello!";

/*Alerts combinando variaveis do tipo string com variaveis do tipo número. Ultilizando o '.replace' para trocar uma palavra por outra.  

alert("Bem vindo " + nome);
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
alert(frase.replace("hello!", "oi!"));*/

//'Console.log' serve para visualizar e testar variaveis.
console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("hello!", "oi!"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

//Arrays
var lista = ["maçã", "pêra", "laranja"];
//'.push' coloca um elemento.
lista.push("uva");
//'.pop' tira um elemento.
lista.pop();

console.log(lista);
//seleciona um elemento da lista.
console.log(lista[1]);
//'.length' ver tamhanho da lista.
console.log(lista.length);
//'.reverse()' inverte a lista.
console.log(lista.reverse());
//'.toString' transfoma em uma String.
console.log(lista.toString());
//'.join' transfoma em uma String e adiciona.
console.log(lista.join(" - "));

//Dicionário
var fruta = {nome:"maçã" , cor:"vermelha"}
console.log(fruta);
//seleciona um elemento no dicionário.
console.log(fruta.nome);

//Lista de Dicionário
var frutas = [{nome:"maçã" , cor:"vermelha"}, {nome:"uva" , cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);

//Condicionais if e else
/* var idade = prompt("Qual é sua idade ?");
if(idade >= 18){
    alert("Você é maior de idade!");
}else {
    alert("Você é menor de idade!");
} */

//Laços de repetição
var count = 0;
while (count <= 5){
    console.log(count);
    count ++;
}
//for
var count1;
for(count1=0; count1 <= 10; count1++) {
    console.log(count1);
}

//Data.
var d = new Date();
//mostra a data completa.
alert(d);
//mostra o dia.
alert(d.getDay());
//mostra as horas.
alert(d.getHours());
//mostra os minutos.
alert(d.getMinutes());