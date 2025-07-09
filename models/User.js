// const users= [
//     {id:1, name: "john", email:"john@gmail.com"},
//     {id:2, name: "kamal", email:"kamal@gmail.com"},
//     {id:3, name: "nimal", email:"nimal@gmail.com"}
// ];

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User',userSchema)

module.exports = {
     findAll : async() => await User.find(),
     //findAll : async function () {await user.find()} arrow function
     
    findById : async (id) => await User.findById(id),
    //findById : async function (id) {await user.findById} arrow function 
    
     newUser: async (userData) => {
        const user = new User(userData);
        return await user.save();
    },

    // newUser: async function (userData) {
    //     const user = newUser (userData);
    //     return await user.save();
    // }

    updateUser : async(id, updatedData) => {
       return await User.findByIdAndUpdate(id,updatedData);
    },
    //updateUser : async function (id, updatedData) {
    //     await user.findByIdAndUpdate(id,updatedData);
    // }
     deleteUser: async (id) => {
       return await User.findByIdAndDelete(id);
    }
}

   
