// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Category can have multiple products but a Product can have only one Category
Category.hasMany(Product, {
   foreignKey: 'category_id',  
   onDelete: 'CASCADE',
});
Product.belongsTo(Category, {
   foreignKey: 'category_id',  // Changed from prod_id
});


// Products can have multiple Tags describing them, and Tags can be used to describe multiple Products
Product.belongsToMany(Tag, {
   through: ProductTag,
   foreignKey: 'product_id',
   // as: 'product_tags'
});
Tag.belongsToMany(Product, {
   through: ProductTag,
   foreignKey: 'tag_id',
   // as: 'tag_products' // Product has tags that match 
});


module.exports = {
   Product,
   Category,
   Tag,
   ProductTag,
};
