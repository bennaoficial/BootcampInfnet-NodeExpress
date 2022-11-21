// Arquivo de rotas

const express = require ('express');
const router = express.Router();
const User = require('../controllers/UserControllers');




router.get('/', async (req,res) =>{
    const userCtrl = new User();
    res.send(userCtrl.getUsers());
})
//Cria usuário
router.post('/', async (req,res) =>{
    const userCtrl = new User();
    res.send(userCtrl.getUsers());
})
//Edita Usuário
router.put('/:id', async (req,res) =>{
    const userCtrl = new User();
    res.send(userCtrl.getUsers());
})

router.patch('/:id', async (req,res) =>{
    const userCtrl = new User();
    res.send(userCtrl.getUsers());
})
//Deleta Usuário
router.delete('/:id', async (req,res) =>{
    const userCtrl = new User();
    res.send(userCtrl.getUsers());
})

router.get('/:id', async (req,res) =>{
    const userCtrl = new User();
    res.send(userCtrl.getUser(req.params.id));
})

module.exports = router;

// const get = async (req, res) => {
//     res.send ('Olá Mundo');
// };

// router.get('/', get);