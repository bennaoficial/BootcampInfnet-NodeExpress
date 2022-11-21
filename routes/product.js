const express = require ('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

productCtrl = new ProductController();


router.get('/', async (req,res) =>{
    let result = productCtrl.getProducts(req.query);
    res.send(result);
});

router.get("/:id", async (req,res) =>{
    let result = productCtrl.getProduct(req.params.id);
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

//deleta um produto
router.delete('/:id', async (req,res) =>{
    res.send('Ola Mundo!');
});




module.exports = router;