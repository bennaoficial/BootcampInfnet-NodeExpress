//Configuração de rotas

const express = require ('express');
const app = express();
const port = 3000;
const db = require('./db')
db.sync(() => console.log ("Rondado Banco de Dados"));

//rotas
const user = require('./routes/user');
const auth = require('./routes/auth');
const product = require('./routes/product');
const category = require('./routes/category');

const conectLiveReload = require("connect-livereload");


app.use('/user', user);
app.use('/auth', auth);
app.use('/product', product);
app.use('/category', category);
app.use(conectLiveReload());

app.listen(port, function(){
    console.log('aplicacao rodando')
});

// app.get('/', function(req, res){
//     try{
//         res.statusCode = 200;
//         res.send({});
//     }catch(error){
//         res.statusCode = 500;
//         res.send({
//         msg:"Um erro inesperado ocorreu!"
//     });
//     }
// });
// app.get('/home', function(req, res){
//     res.send('Pagina Home');

// });

