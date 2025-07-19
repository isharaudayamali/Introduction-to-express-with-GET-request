const logger = require('../utils/logger');
const userDao = require('../dao/userDao');


//GET 
exports.getAllUsers = async (req, res) => {
    logger.info("Getting All users")
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const sort = req.query.sort || 'name';

        const result = await userDao.findWithPagination(page, limit, sort);
        logger.info("successfully retrieve all Users")
        res.status(200).json({
            success: true,
            data: result.users,
            pagination: result.pagination
        });
    } catch (error) {
        logger.error("Failed to get Users !")
        res.status(500).json('Failed to Request !')
    }
}

//GET Find by id
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    logger.info(`Getting user by ID: ${userId}`);
    try {
        const user = await userDao.findById(userId);

        if (!user) {
            logger.info(`User not found with ID: ${userId}`);
            return res.status(404).send("User not found");
        }
        logger.info(`Successfully retrieved user with ID: ${userId}`);
        res.status(200).json(user);

    } catch (error) {
        logger.error(`Failed to get user by ID: ${userId}`, error);
        res.status(500).json('Failed to get User !');
    }

}
//post
exports.createNewUser = async (req, res) => {
    logger.info("Creating new users");
    try {
        const name = req.body.name;
        const email = req.body.email;
        //const {name,email} =req.body; 

        if (!name || !email) {
            res.status(400).json('Missing Required Field')
            logger.info("Missing required field");
        }
        const user = await userDao.newUser(req.body);
        logger.info(`Successfully create new user, ID: ${user._id}`);
        res.status(201).json(user)
    } catch (err) {
        //console.log("Failed to create User !", err);
        res.status(500).json('Failed to create User !')
    }
}
//put
exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    logger.info(`Updating user with ID: ${userId}`);
    try {
        const userId = req.params.id;

        const user = await userDao.updateUser(userId, req.body);
        if (!user) {
            logger.info(`User not found for update with ID: ${userId}`);
            res.status(404).send("User not found");
        }
        logger.info(`Successfully updated user with ID: ${userId}`);
        res.status(201).json('Successfully updated');
    } catch (err) {
        logger.error(`Failed to update user with ID: ${userId}`, error);
        res.status(500).json('Failed to update User !');
    }
}
//delete
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    logger.info(`Deleting user with ID: ${userId}`);
    try {
        const user = await userDao.deleteUser(userId);

        if (!user) {
            logger.info(`User not found for deletion with ID: ${userId}`);
            return res.status(404).json("User not found");
        }
        logger.info(`Successfully deleted user with ID: ${userId}`);
        res.json("Deleted Successful !")
    } catch (err) {
        logger.error(`Failed to delete user with ID: ${userId}`, error);
        res.status(500).json('Failed to delete User !')
    }
}
