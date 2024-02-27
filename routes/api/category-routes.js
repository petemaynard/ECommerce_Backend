const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
   // ./category-routes/ 
   // Display all Categories, along with their products under the categories
   const categoryData = await Category.findAll({
      include: [{ model: Product }]
   })
   res.json(categoryData);
});

router.get('/:id', async (req, res) => {
   // ./category-routes/:id
   // Display a single Category, along with its product(s) under the category
   const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
   })
   res.json(categoryData);
});

router.post('/', async (req, res) => {
   // ./category-routes/ 
   // create a new category
   const newCategory = await Category.create({
      category_name: req.body.category_name
   })
   // Send the newly created row as a JSON object
   res.json(newCategory);
});

router.put('/:id', async (req, res) => {
   // ./category-routes/:id
   // update a category by its `id` value
   const updatedCategory = await Category.update(
      {
         // All the fields you can update and the data attached to the request body.
         category_name: req.body.category_name
      },
      {
         // Gets the books based on the isbn given in the request parameters
         where: {
            cat_id: req.params.id,
         },
      }
   )
   res.json(updatedCategory);
});

router.delete('/:id', async (req, res) => {
   // ./category-routes/:id
   // delete a category by its `id` value
   const deletedCategory = Category.destroy(
      {
         where: {
            cat_id: req.params.id,
         },
      })
   res.json(deletedCategory);
});

module.exports = router;
