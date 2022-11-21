const express = require ('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

categoryCtrl = new CategoryController();


router.get('/', async (req,res) =>{
    let result = categoryCtrl.getCategories(req.query);
    res.send(result);
});

router.get("/:id", async (req,res) =>{
    let result = categoryCtrl.getCategory(req.params.id);
    res.send(result);
});

//Cria um produto
router.post('/', async (req,res) =>{
    res.send('Ola Mundo!');
});

//Edita um Produto
router.put('/:id', async (req,res) =>{
    res.send('Ola Mundo!');
});
router.patch('/:id', async (req,res) =>{
    res.send('Ola Mundo!');
});

//Deleta um produto
router.delete('/:id', async (req,res) =>{
    res.send('Ola Mundo!');
});


module.exports = router;