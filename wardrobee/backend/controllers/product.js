const CustomError = require("../utils/CustomeError");

const User = require("../models/user");
const Product = require("../models/product");

module.exports.createNew = async (req, res, next) => {
  if (!req.file) {
    return next(new CustomError("The image is needed ", 403));
  }

  const { name, category, color, photo1 } = req.body;

  console.log(req.body);

  const newProd = await Product.create({
    id: req.user._id,
    name,
    category,
    color,
    photo: {
      id: req.file.filename,
      public_url: req.file.path,
    },
  });

  const res1 = await newProd.save();

  res.send(res1);
};
