import http from 'node:http';



//GET, POST, PUT, DELETE
//GET = Buscar uma informação (Lista, item)
//POST = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação
//PATCH = Alterar uma informação específica

const server = http.createServer((req, res) => {
   
   const {method, url} = req;

   if (method === 'GET'&& url ==='/users') {
      return res.end('listagem de usuários');
      }

   if(method === 'POST'&& url ==='/users') {
       return res.end('Criando usuários');
  
}

return res.end('Hello World');
});



server.listen(3333);