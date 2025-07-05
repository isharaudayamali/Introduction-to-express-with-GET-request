const users= [
    {id:1, name: "john", email:"john@gmail.com"},
    {id:2, name: "kamal", email:"kamal@gmail.com"},
    {id:3, name: "nimal", email:"nimal@gmail.com"}
];

module.exports ={
    // findAll :function() {return users}
    findAll : () => users,

    //findById : (id) => users.find(user=> user.id)
    findById : function(id) {
        return users.find(user => user.id === id);
    }

    // newUser : (user) => {
    //     user.id = user.length+1,
    //     users.push(user);
    //     return user;
    // }
} 