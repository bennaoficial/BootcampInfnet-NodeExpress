class UserController{
    getUser(id){
        return{
                id: 1,
                name: 'Benna',
            };
        };


    getUsers(){
        return[
            {
                id: 1,
                name: 'Benna',
            },
            {
                id: 2,
                name: 'Guilherme',
            },
            {
                id: 3,
                name: 'Joao',
            },
        ]
    }
}

module.exports = UserController;