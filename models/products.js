const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class Products extends Model {}

Products.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    productName: {
      type: DataTypes.STRING
    },
    productAmount: {
      type: DataTypes.INTEGER
    },
    productEmail: {
      type: DataTypes.STRING,
      unique: true
    },
    isAvailable: {
      type: DataTypes.BOOLEAN
    },
    
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'products', // We need to choose the model name,
    tableName: 'products',
    timestamps: true
  },
);


module.exports = Products;