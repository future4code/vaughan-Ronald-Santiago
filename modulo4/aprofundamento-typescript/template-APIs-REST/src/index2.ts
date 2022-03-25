function obterEstatisticas(numeros: number[]) :{maior: number, menor: number, media: number} {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior:number, menor: number, media: number} ={ 
       maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type amostra ={
     numeros :number [],
     obterEstatisticas: (numeros:[]) =>{maior: number, menor:number, media: number}
}
