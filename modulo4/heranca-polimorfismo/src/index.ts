//1a)a) Seria possível imprimir a senha (password) atrelada a essa instância?
//Nesse caso sim, consegue imprimir
//1b)b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//Uma só

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }

      public introduceYourself(): string{
          return `"Olá, sou ${this.name}"`
      }
  
      public getName(): string {
          return this.name
      }
  }

  let usuario1: User = new User("001", "ronald.santiago", "Ronald", "aloha")

  console.log("Testando", usuario1)

  //Exercício2
  //O console.log apareceu 1 vez cada
  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string,
      purchaseTotal: number
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
      this.purchaseTotal = purchaseTotal
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  let customer1: Customer = new Customer("001", "aloha@gmail.com", "loha", "899", "345", 233)
  console.log("Testando2", customer1)

  customer1.introduceYourself()

  //EXERCICIO3
  //a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
  //Sim, seria possível pois é uma classe filha

  export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }


 const client: Client = {
     name: "Ahe",
     registrationNumber: 2,
     consumedEnergy: 100,

     calculateBill: () =>{
         return 2;
     }
 }

 console.log(client)

 //a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
 //A única que não consegui foi a de calculateBill

 export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

  //a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?

  export class Residence extends Place {
    constructor(
      private residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    public getResidentsQuantity():number{
        return this.residentsQuantity
    }

     
  }


  //Função2
  export class Commerce extends Place {
    constructor(
      private floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }

    public getFloorsQuantity(): number{
        return this.floorsQuantity
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }

    public getMachinesQuantity(): number{
        return this.machinesQuantity
    }
  }

  let residence1:Residence = new Residence(51, "0402134")
  let commerce: Commerce = new Commerce(21, "2345")
  let industry: Industry = new Industry(20, "34556")

  console.log(residence1.getCep())
  console.log(commerce.getCep())
  console.log(industry.getCep())

  //1a)1) *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*
  //Precisamos no caso criar uma classe filha que venha da classe Place
  //b)Place é uma classe pois precisa ter acesso privado a alguns atributos, coisa diferente de interface
  //c)Place é abstrata pois não vemos motivos de deixar de outra forma
