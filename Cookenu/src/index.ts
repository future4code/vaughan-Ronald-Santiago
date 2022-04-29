import userCreate from "./endpoints/createUser";
import app from "./app";

app.post('/user', userCreate)







// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors