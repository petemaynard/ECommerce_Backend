// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
   {
      prod_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      product_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      price: {
         type: DataTypes.DECIMAL(4, 2),
         // Wants me to validate decimal
      },
      stock: {
         type: DataTypes.INTEGER,
         allowNull: false,
         defaultValue: 10
         // Validate numeric
      },
      category_id: {
         type: DataTypes.INTEGER,
         references: {
            model: 'category',
            key: 'cat_id'
         }
      }
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'product',
   }
);

module.exports = Product;
