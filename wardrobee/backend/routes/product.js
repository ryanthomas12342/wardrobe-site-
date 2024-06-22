const router = require("express").Router();
const multer = require("multer");

const asyncWrap = require("../middlewares/asyncWrap");

const { storage } = require("../cloudinary");

const upload = multer({ storage });

const { createNew } = require("../controllers/product");

router.route("/product/new").post(upload.single("photo"), asyncWrap(createNew));

module.exports = router;
