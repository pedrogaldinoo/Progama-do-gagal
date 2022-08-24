// (=) se lê "recebe"
// (Boolean): True ou False
// (Null): Nulo (não tem nada)
// (Undefined): Não foi definido
// (Number): Números
// (String): Texto (sempre tem que estar entre "",'' ou ´`)(o comando "/n" quebra a linha)
// (+) Adição
// (-) Subtração
// (*) Multiplicação
// (/) Divisão
/* (%) Módulo o resultado é o valor que sobra em uma divisão (10 % 15 = 10).
Ex: 10 carros para 15 pessoas, não posso partir o carro em vários pedaços, então eu não dou nada para ngm, e sobra 10 carros.*/
// (++) Incremento adciona "1" ao valor colocado na variável
// (--) Decremento subtrai "1" ao valor colocado na variável
/* (OBS): 
var a = 30;

"var b = --a = 29" ; "var b = a-- = 30"
"var b = ++a = 31" ; "var b = a++ = 30"
*/
// (NaN) NOT A NUMBER
// =     x = y     x = y
// +=    x += y    x = x + y
// -=    x -= y    x = x - y
// *=    x *= y    x = x * y
// /=    x /= y    x = x / y
// %=    x %= y    x = x % y
// O símbolo de (=) serve pra substituir o valor da variável pelo resultado do cálculo, sem o "=", a conta vai ser feita, porém o resultado não vai servir pra nada
/*(TAGS DE BOOLEAN, "TRUE OR FALSE"):

 (==) igual a
 (===) valor igual e igual, pega o número e o tipo ("2")
 (!=) Não é igual
 (!==) Não igual ou não igual, pega o número e o tipo ("2")
 (>) Maior que
 (<) Menor que
 (>=) Maior que ou igual a, pega o número e o tipo ("2")
 (<=) Menor que ou igual a, pega o número e o tipo ("2")
 */
//(parseInt e parseFloat) serve para transformar uma string em um número, "int" para números inteiros e "float" para números com casas decimais.

/*
//PRIMEIRO MODO

var numero = "onze" == "onze";

console.log(numero);

//CONDIÇÃO PADRÃO

var numero_1 = "onze";
var numero_2 = "onze";

if (numero_1 == numero_2) console.log(true);
else console.log(false);

//CONDIÇÃO PADRÃO

var idade = 12;

if (idade >= 18) console.log("true");
else console.log(false);

//CONDIÇÃO TERNÁRIA

var idade = 15;

idade >= 18 ? console.log(true) : console.log(false);
*/
/*
//CONDIÇÃO SWITCH

var nota1 = 8.0;
var nota2 = 5.0;

var media = (nota1 + nota2) / 2;

var conceito = "";

if (media >= 8) {
  conceito = "ótimo";
} else if (media >= 6.5) {
  conceito = "Bom";
} else {
  conceito = "Regular";
}

console.log(media);
console.log(conceito);

switch (conceito) {
  case "ótimo":
    console.log("Parabéns, vc é um ótimo aluno!");
    break;
  case "Bom":
    console.log("Você está quase perfeito!");
    break;
  case "Regular":
    console.log("Estude mais um pouco!");
    break;
  default:
    console.log("Houve algum erro");
    break;
}
*/
