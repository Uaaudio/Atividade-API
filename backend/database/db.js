const Sequelize = require("sequelize");

const connection = new Sequelize("usuarios","root","root",{

    host : "localhost",
    dialect:"mysql",
    port:"3306"


})



module.exports = connection; //Exporta a conexão do meu banco de dados.