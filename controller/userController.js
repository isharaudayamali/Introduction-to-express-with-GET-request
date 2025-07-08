const User = require('./../models/User');

//GET
exports.getAllUsers = async (req, res) => {
    const users =await User.findAll();
    res.send(users);
}

exports.getUserById = async (req,res) => {
    const userId = parseInt(req.params.id);
    const user =await User.findById(userId);
    

    if(!user){
        res.status(404).send("User not found");
    }
    res.send(user);

}
//put
//post
// exports.createNewUser = async (req,res) => {
//     const user = await User.newUser(req.body);
//     res.status(201).json(user);
    
// }

exports.createNewUser = async (req, res) => {
    try {
        const user = await User.newUser(req.body);
        res.status(201).json(user)
    } catch (err) {
        console.log("Failed to create User !", err);
        res.status(500).json('Failed to create User !')
    }
}
