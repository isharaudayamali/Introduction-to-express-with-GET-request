const User = require('./../models/User');

//GET
exports.getAllUsers = (req, res) => {
    const users = User.findAll();
    res.send(users);

}

exports.getUserById = (req,res) => {
    const userId = parseInt(req.params.id);
    const user =User.findById(userId);
    

    if(!user){
        res.send("User not found");
    }
    res.send(user);

}
//put
//post
// exports.createNewUser =(req,res) =>{
//     const user = User.newUser(req.body)
//     res.status().jason(user);
    
// }
