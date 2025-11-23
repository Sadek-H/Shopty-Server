const { getsubcategory } = require('../controllers/subcategoryController');

const router = require('express').Router();

router.get("/subcategories", getsubcategory);

module.exports = router;
