// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    

    return array.reverse();
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    return array.sort();
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let Arraynovo = []
  for(let x = 0; x <array.length; x++){
      if(array[x] % 2 ===0){
          Arraynovo.push(array[x])
       

      }


      }
      return Arraynovo;
  }


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
let NumerosElevados = [];
for(let x = 0; x <array.length; x++){
    if(array[x]% 2 === 0){
        NumerosElevados.push(array[x]*array[x])

    }

}
    return NumerosElevados;   
    


 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    return Math.max.apply(null, array)
    

  
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
        return Math.max.apply(null, [num1,num2])
       }
      
       function maiorDivisivelPorMenor(num1,num2){
        n = num1 > num2 ? true : false;
        if(n){
         return(num1%num2==0);
        }
        else{
         return(num1%num2==0);
        }
       }
       function diferenca(num1,num2){
        n = num1 > num2 ? true : false;
        if(n){
         return(num1-num2);
        }
        else{
         return(num2-num1);
        }
       }




// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoC === ladoA && ladoB ){
        return "Escaleno"
    }

    else if(ladoA == ladoB && ladoA!= ladoC || ladoB=== ladoA && ladoB != ladoC || ladoC === ladoA && ladoC != ladoB  ){
        return "Isosceles"
    }

    else if(ladoA != ladoB != ladoC){
        return "Equilatéro"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
     }

     return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    PessoaNome = {
        nome,
        idade,
        endereco,
        email,

    }
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}