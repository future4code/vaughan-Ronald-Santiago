type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos:number[]

}

let clientes: Cliente[] =[
    
    
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
        
    

]

  function Banco(clientes:Cliente[]): Cliente[]{

      return clientes.filter(
          (clientela) =>{
              return clientela.debitos.reduce((total, amount) => total+amount)
          }
        
      )
        

  }

  console.log(Banco(clientes))