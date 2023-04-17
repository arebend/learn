const router = require("express").Router();
const article = require("../controller/articleController");

router.get("", article.findArticles); 
router.get("/create", article.createArticleForm);
router.get("/:id", article.findArticle);
router.post("", article.createArticle);
router.post('/:id', article.updateArticle);

module.exports = router;

