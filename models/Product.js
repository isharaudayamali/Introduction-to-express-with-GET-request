// const users= [
//     {id:1, name: "john", email:"john@gmail.com"},
//     {id:2, name: "kamal", email:"kamal@gmail.com"},
//     {id:3, name: "nimal", email:"nimal@gmail.com"}
// ];

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number
});

const Product = mongoose.model('Product',productSchema);

module.exports = {
     findAll : async() => await Product.find(),
     
    findById : async (id) => await Product.findById(id),
    
     newProduct: async (productData) => {
        const product = new Product(productData);
        return await product.save();
    },

    updateProduct : async(id, updatedData) => {
       return await Product.findByIdAndUpdate(id,updatedData);
    },

    deleteProduct: async (id) => {
       return await Product.findByIdAndDelete(id);
    },
    
    findWithPagination: async (page = 1, limit = 10, sort = 'name') => {
        const skip = (page - 1) * limit;

        const products = await Product.find()
            .sort(sort)
            .skip(skip)
            .limit(parseInt(limit))

        const total = await Product.countDocuments();
        const totalPages = Math.ceil(total/limit);

        return {
            products,
            pagination: {
                currentPage: parseInt(page),
                totalPages,
                totalItems: total,
                itemPerPage: limit
            }
        }
    }
}


   
