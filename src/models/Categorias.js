const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Categorias', {
       id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
       },
       nombre: {
          type: DataTypes.STRING,
          allowNull: false,
          
       },

    }, { timestamps: false });
};