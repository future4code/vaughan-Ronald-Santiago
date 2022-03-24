type AutorPost ={
    autor: string,
    texto: string

}


let posts : AutorPost []=[
     {
      autor: "",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  function buscarPostsPorAutor( posts:AutorPost[], autorInformado: string): AutorPost[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }
  