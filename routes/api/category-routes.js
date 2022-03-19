const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// gets all categories with thier associated products
router.get('/', (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: { exclude: ['category_id']}
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
// gets a specific category with its associated products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Product,
        attributes: { exclude: ['category_id']}
      }]
  })
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({message:'Category ID not found in the database'});
      return;
    }
      res.json(dbCategoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});
// create a new category
router.post('/', (req, res) => {
    /* req.body should look like this...
    {
      category_name: "Sporting Goods",
    }
  */
  Category.create(req.body)
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});
// update a category by its `id` value
router.put('/:id', (req, res) => {  
  Category.update(req.body, {
    where: { id: req.params.id}
  }).then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({ message: 'Category ID not found in the database'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  console.log(req.params.id)
  Category.destroy({
    where: {
      id: req.params.id
    }    
  })
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({message: 'Category ID not found in the database'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
