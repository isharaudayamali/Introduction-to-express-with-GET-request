const User = require("../models/User");
const logger = require("../utils/logger");

module.exports = {
    findAll: async () => {
        logger.info("Finding All users")
        try {
            const users = await User.find()
            logger.info(`Successfully found ${users.length} users`);
            return users;
        } catch (error) {
            logger.error("Error finding All users", error);
            throw error;
        }
    },
    //findAll : async function () {await user.find()} arrow function

    findById: async (id) => await User.findById(id),
    //findById : async function (id) {await user.findById} arrow function 

    newUser: async (userData) => {
        const user = new User(userData);
        return await user.save();
    },

    // newUser: async function (userData) {
    //     const user = newUser (userData);
    //     return await user.save();
    // } arrow function 

    updateUser: async (id, updatedData) => {
        return await User.findByIdAndUpdate(id, updatedData);
    },
    //updateUser : async function (id, updatedData) {
    //     await user.findByIdAndUpdate(id,updatedData);
    // }

    deleteUser: async (id) => {
        return await User.findByIdAndDelete(id);
    },

    findWithPagination: async (page = 1, limit = 10, sort = 'name') => {
        const skip = (page - 1) * limit;

        const users = await User.find()
            .sort(sort)
            .skip(skip)
            .limit(parseInt(limit))

        const total = await User.countDocuments();
        const totalPages = Math.ceil(total / limit);

        return {
            users,
            pagination: {
                currentPage: parseInt(page),
                totalPages,
                totalItems: total,
                itemPerPage: limit
            }
        }
    }
}



