  type Adm ={
      name: string,
      email:string,
      role: "user" |"admin"
  }
  
  
  let usuarios: Adm[] =[
    
        {name: "Rogério", email: "roger@email.com", role: "user"},
        {name: "Ademir", email: "ademir@email.com", role: "admin"},
            
  ]
  
  function User(usuarios:Adm[]): Adm[]{
      return usuarios.filter(
          (usuario) =>{
              return usuario.email
          }
      ).map(usuario => usuario)
    
      }

  console.log(User(usuarios))