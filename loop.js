//for executa "x" vezes um ação
// muito bom para ler vetores ou modificar todos os valores do vetor


for(let i = 1; i < 9; i++){
    console.log(i)


// let i = "x"; é uma variável de controle e I vai controlar 
// o número de vezes que será excutado o log i
// i < "y"; será para encerrar o for
// se um loop nunca torna "false" terá um loop infinito
// i++ é instrução que terá no final de cada repetição

let lista = ["carro", "bicicleta", "onibus"];

for(let i = 0; i < lista.length; i++)
    console.log(lista[i]);
 }

 // declarar o i fora do for 
 let i = 0;
 for(; i < 10; i++);{
    console.log(i);
}

 // for of  = para cada item de uma lista 

 let dias = ["segunda", "terça", "quarta", "quinta", "sexta"];
 for(let dia of dias){
    console.log(dia);
 }

 // while = executar o codigo enquanto for true 
 let num = 3
 while(num < 10){
    console.log("valor:" + num);
    num = num + 2;
 }
 // do while excuta um trecho e depois testa

 let mum = 1;
 do{
    console.log(mum); mum++;
 }
 while(mum < 10);
 // break = parar o loop

 let bum = 1;
 while(bum < 10){
    console.log(bum)
    if(bum == 6){
        break;
    }
    bum++ 
 }
 // continue iniciar a proxima repetição 