enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type User ={
    nomeFilme: string,
    ano: number,
    genero: GENERO,
    pontuação:number | null
}

function cinema(nomeFilme: string, ano: number, genero:GENERO, pontuação?: number | null): User{
    let user: User ={
        nomeFilme: nomeFilme,
        ano: ano,
        genero: genero,
        pontuação: pontuação 

    }
    return user

   



    
    }

    console.log(cinema("Ronald", 222,GENERO.ACAO))

