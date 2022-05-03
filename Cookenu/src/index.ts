import userCreate from "./endpoints/createUser";
import login from "./endpoints/login";
import app from "./app";

app.post('/user', userCreate)
app.post('/userlogin', login)







// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors