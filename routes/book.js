const express = require("express");
const router = express.Router();

const routeController = require("../controllers/book");

router.get("/",routeController.get_books);
router.get("/:id",routeController.get_book);

router.post("/book",routeController.post_book);


router.put("/:id",routeController.put_book);

router.delete("/:id",routeController.delete_book);


module.exports = router;