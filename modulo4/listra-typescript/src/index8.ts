function data(data: string, dataEmissao: string): boolean{
    let dataConvertida:number = +data;
    let EmissaoConvertida:number = +dataEmissao;
    if(dataConvertida <= 20 && EmissaoConvertida >= 5){
        return true
    } 
    else if(dataConvertida >= 20 && 50 && EmissaoConvertida >= 10){
        return true

    }
    else if(dataConvertida >= 50 && EmissaoConvertida >= 15){
        return true
    }
    else {
        return false
    }
   
}


console.log(data("25", "3"))

// let s = "250711";
// let n = +s;
// console.log(s, typeof s)
// console.log(n, typeof n)