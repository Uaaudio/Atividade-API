const Express = require("express") // Importa o Express.
const connection = require("./db") // Import minha conexão.
const { Sequelize } = require("sequelize")



const User =connection.define("user",{
    name : { // Campo do nome
        type: Sequelize.STRING(150),
        allowNull: false

    },

     email:{ //Campo de Email
        type:Sequelize.STRING(150),
        allowNull:false
    },

    password:{ // Campo da senha
        type:Sequelize.INTEGER(12),
        allowNull:false
    }
})


User.sync({ force: false }).then(() => {
  console.log("Tabela User criada (se não existir).");
});


module.exports =User;