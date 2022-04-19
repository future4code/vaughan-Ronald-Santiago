//1) a - O construtor serve para quando criarmos a primeira instância ter certas ações iniciais  que colocamos


class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }

    public getDate() {
        return this.date
    }

    public setDate(){

    }

    
  }

  

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = []; //Não entendi
  
    constructor(
       cpf: string,
       name: string,
       age: number,
       transaction: Transaction[] 
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;   //Nãoe entendi
       this.name = name;
       this.age = age;
       this.transactions = transaction
    }

    public getCpf():string{
        return this.cpf
    }

   

    public setTransaction(transiction1:Transaction):void {
           // [...this.transactions, transiction1]
            (this.transactions).push(transiction1)
    }

    public setCpf(){
        
    }
  
  }

let transacao1: Transaction = new Transaction("201234", 222, "conta1")
let pessoa1 = new UserAccount("1234", "Ronald", 24, [transacao1])

console.log("Testando", pessoa1)

pessoa1.setTransaction(transacao1)

