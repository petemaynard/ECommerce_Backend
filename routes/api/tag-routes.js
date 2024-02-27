const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
   // find all tags
   // be sure to include its associated Product data
   const tagData = await Tag.findAll({
      include: [
         { model: Product, as: 'products' },
      ]
   })
   res.json(tagData);
});

router.get('/:id', async (req, res) => {
   // find a single tag by its `id`
   // be sure to include its associated Product data

   const tagData = await Tag.findByPk(req.params.id, {
      include: [
         { model: Product, as: 'products' },
      ]
   })
   res.json(tagData);
});

router.post('/', async (req, res) => {
   // create a new tag
   const newTag = await Tag.create({
      tag_name: req.body.tag_name,
   })
   // Send the newly created row as a JSON object
   res.json(newTag);
});

router.put('/:id', async (req, res) => {
   // update a tag's name by its `id` value
   const updatedTag = await Tag.update(
      {
         tag_name: req.body.tag_name
      },
      {
         where: {
            tag_id: req.params.id,
         }
      }
   )
   res.json(updatedTag);
});

router.delete('/:id', async (req, res) => {
   // delete on tag by its `id` value
const deletedTag = Tag.destroy(
   {
      where: {
         tag_id: req.params.id,
      }
   })
res.json(deletedTag);

});

module.exports = router;
