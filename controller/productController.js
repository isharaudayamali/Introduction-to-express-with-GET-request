const Product = require('../models/Product');
const User = require('../models/Product');

//GET
exports.getAllProducts = async (req, res) => {
    const products =await Product.findAll();
    res.send(products);
}
//GET Find by id
exports.getProductById = async (req,res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    
    if(!product){
        return res.status(404).send("Product not found");
    }
    res.status(200).json(product);

}
//post
exports.createNewProduct = async (req, res) => {
    try {
        const product = await Product.newProduct(req.body);
        res.status(201).json(product)
    } catch (err) {
        console.log("Failed to create User !", err);
        res.status(500).json('Failed to create User !')
    }
}
//put
exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        
        const product = await Product.updateProduct(productId, req.body);
        if(!product){
            res.status(404).send("User not found");
        }
        res.status(201).json(Product);
} catch (err) {
    res.status(500).json('Failed to update Product !');
}
}
//delete
exports. deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.deleteProduct(productId);

        if(!product){
        res.status(404).json("User not found");
    }
        res.json("Deleted Succssful !")
    } catch (err) {
        res.status(500).json('Failed to delete User !')
    }
}
