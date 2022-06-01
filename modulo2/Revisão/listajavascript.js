//Exercício1

function NumerosArray(array){
    return array.length;

}

//Exercício2
function ArrayInvertido(array){
    return array.reverse()

}

//Exercicio33

function ArrayCrescente(array){
    return array.sort()
}

//Exercicio4

function NumeroPar(array){
    let  NovoNumero = []
    for(let x = 0; x<array[x]; x++){
            if(array[x]%2==0){
                NovoNumero.push(array[x])
            }

    }
     return NovoNumero


}

//Exercicio5
function ParesElevados(array){
    let NovosElevados = []
    for(let x=0; x<array[x]; x++){
        if(array[x]%2==0){
            NovosElevados.push(array[x]*2)
        }
    }
    return NovosElevados

}

//Exercicio6
function MaiorNumero(array){
   let MaiorNumero;
   for(let x =0; x<array[x]; x++){
       MaiorNumero = array[x]
       if(array[x]>MaiorNumero){
           MaiorNumero = array[x]
       }
   }
   return MaiorNumero
}

console.log(MaiorNumero([1,4,2]))

//Exercicio7

function comparaDoisNumeros(num1, num2) {
    let maiorNumero;
    let menorNumero;
    let maiorDivisivelPorMenor;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
  
    const diferenca = maiorNumero - menorNumero;
    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
      };
    }

    //Exercicio8
    function retornaNNumerosPares(n) {
        const ArrayPares = [];
        for (let x = 0; n[x] < x; x++) {
          if (n[x] % 2 === 0) {
            ArrayPares.push(n[x]);
          }
        }
        return ArrayPares;
      }
  
      //Exercicio9
      function checaTriangulo(a, b, c) {
        if (a !== b && b !== c) {
          return "Escaleno";
        } else if (a === b && b === c) {
          return "Equilátero";
        } else {
          return "Isósceles";
        }
      }

      //Exercicio10
      function segundoMaiorEMenor(array) {
        let menor = Infinity;
        let maior = -Infinity;
        let segundoMenor = Infinity;
        let segundoMaior = -Infinity;
        let novoArray = [];
      
        for (let i of array) {
          if (i < menor) {
            menor = i;
          }
          if (i > maior) {
            maior = i;
          }
        }
      
        for (let i of array) {
          if (i < segundoMenor && i !== menor) {
            segundoMenor = i;
          }
          if (i > segundoMaior && i !== maior) {
            segundoMaior = i;
          }
        }
        novoArray.push(segundoMaior);
        novoArray.push(segundoMenor);
      
        return novoArray;
      }

      //Exercício11
      function imprimeChamada(filme) {
        let atoresCon = "";
        for (let i = 0; i < filme.atores.length; i++) {
          if (i === filme.atores.length - 1) {
            atoresCon += filme.atores[i];
          } else {
            atoresCon += filme.atores[i] + ", ";
          }
        }
      
        return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresCon}.`;
      }

      //Exercício12
      
      function anonimizaPessoa(pessoa) {
        return {
          ...pessoa,
          nome: "ANÔNIMO"
        };
      }

      //Exercicio13A

      function retornaPessoasAutorizadas(pessoas) {
        let pessoasAutorizadas = [];
        for (const pessoa of pessoas) {
          if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
            pessoasAutorizadas.push(pessoa);
          }
        }
        return pessoasAutorizadas;
      }

      //Exercicio13B
      function retornaPessoasNaoAutorizadas(pessoas) {
        let pessoasNaoAutorizadas = [];
        for (const pessoa of pessoas) {
          if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            pessoasNaoAutorizadas.push(pessoa);
          }
        }
        return pessoasNaoAutorizadas;
      }

      //Exerciccio14
      function calculaSaldo(contas) {
        contas.forEach((conta) => {
          let totalDeCompras = 0;
          conta.compras.forEach((valor) => {
            totalDeCompras += valor;
          });
          conta.saldoTotal -= totalDeCompras;
        });
        return contas;
      }

      //Exercicio15
      function ordenaPorNome(consultasNome) {
        for (let i = 0; i < consultasNome.length; i++) {
          for (let j = 0; j< consultasNome.length - i - 1; j++) {
            if (consultasNome[x].nome > consultasNome[x + 1].nome) {
              const temp = consultasNome[x];
              consultasNome[x] = consultasNome[x + 1];
              consultasNome[x + 1] = temp;
            }
          }
        }
        return consultasNome;
      }